import { RequestHandler } from "express";
import { z } from "zod";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config(); // 👈 Esto carga las variables del archivo .env

// Schema de validación para el formulario de contacto
const ContactFormSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  empresa: z.string().min(1, "La empresa es requerida"),
  email: z.string().email("Email inválido"),
  telefono: z.string().optional(),
  cargo: z.string().optional(),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
  serviciosInteres: z.array(z.string()).optional(),
  consentimientoDatos: z.boolean().refine((val) => val === true, {
    message: "Debe aceptar el tratamiento de datos personales",
  }),
  newsletter: z.boolean().optional(),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

// Configuración del transporter de nodemailer para Gmail
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false, // true para 465, false para 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

const handleContactForm: RequestHandler = async (req, res) => {
  try {
    // Validar datos del formulario
    const validatedData = ContactFormSchema.parse(req.body);

    const emailContent = `
Nuevo contacto desde la página web de ANDICOM 2025

DATOS PERSONALES:
==================
Nombre: ${validatedData.nombre}
Empresa: ${validatedData.empresa}
Email: ${validatedData.email}
Teléfono: ${validatedData.telefono || "No proporcionado"}
Cargo: ${validatedData.cargo || "No proporcionado"}

MENSAJE:
========
${validatedData.mensaje}

SERVICIOS DE INTERÉS:
====================
${validatedData.serviciosInteres?.join(", ") || "No especificado"}

CONSENTIMIENTOS AVEAS/RGPD:
=========================
✓ Acepta tratamiento de datos: ${validatedData.consentimientoDatos ? "SÍ" : "NO"}
✓ Desea recibir newsletter: ${validatedData.newsletter ? "SÍ" : "NO"}

---
Formulario enviado desde: Landing Page Jhamf Group SAS - ANDICOM 2025
Fecha y hora: ${new Date().toLocaleString("es-CO", { timeZone: "America/Bogota" })}
IP del visitante: ${req.ip || "No disponible"}
    `;

  const mailOptions = {
    from: process.env.SMTP_FROM || `"Landing Page Jhamf Group" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_EMAIL,
    subject: `🚀 Nuevo contacto ANDICOM 2025 - ${validatedData.empresa}`,
    text: emailContent,
    html: `
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" 
          style="font-family: Arial, sans-serif; background-color:#f8fafc; padding:20px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" 
                style="background:#ffffff; border-radius:8px; overflow:hidden;">
            
            <!-- Header -->
            <tr>
              <td bgcolor="#0076a3" align="center" style="padding:20px; color:white;">
                <h1 style="margin:0; font-size:24px;">🚀 Nuevo contacto - ANDICOM 2025</h1>
                <p style="margin:10px 0 0 0; font-size:14px;">Landing Page Jhamf Group SAS</p>
              </td>
            </tr>
            
            <!-- Datos Personales -->
            <tr>
              <td style="padding:30px;">
                <h2 style="color:#00A2D2; border-bottom:2px solid #00A2D2; padding-bottom:10px;">📋 Datos Personales</h2>
                <table width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom:20px;">
                  <tr><td style="padding:8px 0; font-weight:bold; color:#374151;">Nombre:</td><td>${validatedData.nombre}</td></tr>
                  <tr><td style="padding:8px 0; font-weight:bold; color:#374151;">Empresa:</td><td>${validatedData.empresa}</td></tr>
                  <tr><td style="padding:8px 0; font-weight:bold; color:#374151;">Email:</td><td><a href="mailto:${validatedData.email}" style="color:#00A2D2;">${validatedData.email}</a></td></tr>
                  <tr><td style="padding:8px 0; font-weight:bold; color:#374151;">Teléfono:</td><td>${validatedData.telefono || "No proporcionado"}</td></tr>
                  <tr><td style="padding:8px 0; font-weight:bold; color:#374151;">Cargo:</td><td>${validatedData.cargo || "No proporcionado"}</td></tr>
                </table>
              </td>
            </tr>
            
            <!-- Mensaje -->
            <tr>
              <td style="padding:0 30px;">
                <h2 style="color:#00A2D2; border-bottom:2px solid #00A2D2; padding-bottom:10px;">💬 Mensaje</h2>
                <table width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom:20px;">
                  <tr>
                    <td style="background:#f1f5f9; padding:15px; border-left:4px solid #00A2D2; color:#374151;">
                      ${validatedData.mensaje.replace(/\n/g, "<br>")}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            
            <!-- Servicios de Interés -->
            ${
              validatedData.serviciosInteres && validatedData.serviciosInteres.length > 0
                ? `
            <tr>
              <td style="padding:0 30px;">
                <h2 style="color:#00A2D2; border-bottom:2px solid #00A2D2; padding-bottom:10px;">🛠️ Servicios de Interés</h2>
                <ul style="margin:0 0 20px 20px; padding:0; color:#374151;">
                  ${validatedData.serviciosInteres.map((s) => `<li style="padding:4px 0;">${s}</li>`).join("")}
                </ul>
              </td>
            </tr>
                `
                : ""
            }
            
            <!-- Consentimientos -->
            <tr>
              <td style="padding:0 30px 30px 30px;">
                <h2 style="color:#00A2D2; border-bottom:2px solid #00A2D2; padding-bottom:10px;">🔒 Consentimientos AVEAS/RGPD</h2>
                <table width="100%" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td style="padding:8px 0; font-weight:bold; color:#374151;">Tratamiento de datos:</td>
                    <td style="padding:8px 0; color:${validatedData.consentimientoDatos ? "#059669" : "#dc2626"}; font-weight:bold;">
                      ${validatedData.consentimientoDatos ? "✓ ACEPTADO" : "✗ NO ACEPTADO"}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0; font-weight:bold; color:#374151;">Newsletter:</td>
                    <td style="padding:8px 0; color:${validatedData.newsletter ? "#059669" : "#6b7280"}; font-weight:bold;">
                      ${validatedData.newsletter ? "✓ SÍ" : "– NO"}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            
            <!-- Footer -->
            <tr>
              <td style="padding:15px 30px; background:#f8fafc; border-top:1px solid #e2e8f0; font-size:12px; color:#6b7280;">
                <p style="margin:0;">
                  <strong>Enviado desde:</strong> Landing Page Jhamf Group SAS - ANDICOM 2025<br>
                  <strong>Fecha:</strong> ${new Date().toLocaleString("es-CO", { timeZone: "America/Bogota" })}<br>
                  <strong>IP:</strong> ${req.ip || "No disponible"}
                </p>
              </td>
            </tr>
            
          </table>
        </td>
      </tr>
    </table>
    `,
    replyTo: validatedData.email,
  };




    // Enviar el email
    try {
      const transporter = createTransporter();
      const info = await transporter.sendMail(mailOptions);

      console.log("Email enviado exitosamente:", info.messageId);
      console.log("Preview URL:", nodemailer.getTestMessageUrl(info));

      res.status(200).json({
        success: true,
        message:
          "Formulario enviado correctamente. Nos pondremos en contacto contigo pronto.",
      });
    } 
    
    catch (emailError) {
      console.error("Error enviando email:", emailError);

      return res.status(500).json({
        success: false,
        message: "Error enviando correo. Intenta de nuevo más tarde.",
        error: emailError, // 👈 opcional, para ver detalles en frontend
      });
    }

  } catch (error) {
    console.error("Error procesando formulario:", error);

    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: "Datos del formulario inválidos",
        errors: error.errors,
      });
    }

    res.status(500).json({
      success: false,
      message: "Error interno del servidor. Inténtalo de nuevo.",
    });
  }
};

// Export the function
export { handleContactForm };
export default handleContactForm;
