import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2, Mail, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  cargo: string;
  mensaje: string;
  serviciosInteres: string[];
  consentimientoDatos: boolean;
  newsletter: boolean;
}

interface FormErrors {
  [key: string]: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    cargo: "",
    mensaje: "",
    serviciosInteres: [],
    consentimientoDatos: false,
    newsletter: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const serviciosOptions = [
    "Infraestructura como Servicio (IaaS)",
    "Plataforma como Servicio (PaaS)",
    "Seguridad en Azure",
    "Migración a la nube",
    "Consultoría especializada",
    "Soporte técnico",
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nombre.trim() || formData.nombre.length < 2) {
      newErrors.nombre = "El nombre debe tener al menos 2 caracteres";
    }

    if (!formData.empresa.trim()) {
      newErrors.empresa = "La empresa es requerida";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "El email no es válido";
    }

    if (!formData.mensaje.trim() || formData.mensaje.length < 10) {
      newErrors.mensaje = "El mensaje debe tener al menos 10 caracteres";
    }

    if (!formData.consentimientoDatos) {
      newErrors.consentimientoDatos =
        "Debe aceptar el tratamiento de datos personales";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleServiceToggle = (service: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      serviciosInteres: checked
        ? [...prev.serviciosInteres, service]
        : prev.serviciosInteres.filter((s) => s !== service),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        setSubmitMessage(result.message);
        // Reset form
        setFormData({
          nombre: "",
          empresa: "",
          email: "",
          telefono: "",
          cargo: "",
          mensaje: "",
          serviciosInteres: [],
          consentimientoDatos: false,
          newsletter: false,
        });
      } else {
        setSubmitStatus("error");
        setSubmitMessage(result.message || "Error al enviar el formulario");

        if (result.errors) {
          const serverErrors: FormErrors = {};
          result.errors.forEach((error: any) => {
            serverErrors[error.path[0]] = error.message;
          });
          setErrors(serverErrors);
        }
      }
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage("Error de conexión. Inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="border-azure-200 shadow-lg">
      <CardHeader>
        <CardTitle className="text-azure-900 text-xl">
          Solicita Información
        </CardTitle>
        <CardDescription>
          Completa el formulario y nos pondremos en contacto contigo.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Datos Personales */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="nombre">Nombre completo *</Label>
              <Input
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                className={`border-azure-200 focus:border-azure-500 ${errors.nombre ? "border-red-500" : ""}`}
                placeholder="Tu nombre completo"
              />
              {errors.nombre && (
                <p className="text-red-500 text-xs mt-1">{errors.nombre}</p>
              )}
            </div>

            <div>
              <Label htmlFor="empresa">Empresa *</Label>
              <Input
                id="empresa"
                name="empresa"
                value={formData.empresa}
                onChange={handleInputChange}
                className={`border-azure-200 focus:border-azure-500 ${errors.empresa ? "border-red-500" : ""}`}
                placeholder="Nombre de tu empresa"
              />
              {errors.empresa && (
                <p className="text-red-500 text-xs mt-1">{errors.empresa}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`border-azure-200 focus:border-azure-500 ${errors.email ? "border-red-500" : ""}`}
                placeholder="tu@empresa.com"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <Label htmlFor="telefono">Teléfono</Label>
              <Input
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
                className="border-azure-200 focus:border-azure-500"
                placeholder="+57 300 123 4567"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="cargo">Cargo</Label>
            <Input
              id="cargo"
              name="cargo"
              value={formData.cargo}
              onChange={handleInputChange}
              className="border-azure-200 focus:border-azure-500"
              placeholder="Tu cargo en la empresa"
            />
          </div>

          {/* Servicios de Interés */}
          <div className="space-y-3">
            <Label>Servicios de interés</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {serviciosOptions.map((service) => (
                <div key={service} className="flex items-center space-x-2">
                  <Checkbox
                    id={service}
                    checked={formData.serviciosInteres.includes(service)}
                    onCheckedChange={(checked) =>
                      handleServiceToggle(service, checked as boolean)
                    }
                    className="border-azure-300"
                  />
                  <Label
                    htmlFor={service}
                    className="text-sm text-azure-700 cursor-pointer"
                  >
                    {service}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Mensaje */}
          <div>
            <Label htmlFor="mensaje">Mensaje *</Label>
            <Textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleInputChange}
              rows={4}
              className={`border-azure-200 focus:border-azure-500 ${errors.mensaje ? "border-red-500" : ""}`}
              placeholder="Cuéntanos sobre tu proyecto o consulta específica para ANDICOM 2025..."
            />
            {errors.mensaje && (
              <p className="text-red-500 text-xs mt-1">{errors.mensaje}</p>
            )}
          </div>

          {/* Consentimientos AVEAS/RGPD */}
          <div className="space-y-3 bg-azure-50 p-4 rounded-lg border border-azure-200">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="consentimientoDatos"
                checked={formData.consentimientoDatos}
                onCheckedChange={(checked) =>
                  handleCheckboxChange(
                    "consentimientoDatos",
                    checked as boolean,
                  )
                }
                className={`border-azure-300 mt-1 ${errors.consentimientoDatos ? "border-red-500" : ""}`}
              />
              <div>
                <Label
                  htmlFor="consentimientoDatos"
                  className="text-sm cursor-pointer"
                >
                  Acepto el tratamiento de mis datos personales *
                </Label>
                <p className="text-xs text-azure-600 mt-1">
                  Consiento que Jhamf Group SAS trate mis datos personales para
                  contactarme sobre los servicios consultados y enviarme
                  información relacionada con Microsoft Azure y eventos como
                  ANDICOM 2025.
                </p>
                {errors.consentimientoDatos && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.consentimientoDatos}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="newsletter"
                checked={formData.newsletter}
                onCheckedChange={(checked) =>
                  handleCheckboxChange("newsletter", checked as boolean)
                }
                className="border-azure-300 mt-1"
              />
              <div>
                <Label htmlFor="newsletter" className="text-sm cursor-pointer">
                  Deseo recibir información comercial
                </Label>
                <p className="text-xs text-azure-600 mt-1">
                  Acepto recibir newsletters y comunicaciones sobre eventos,
                  servicios y novedades de Microsoft Azure.
                </p>
              </div>
            </div>
          </div>

          {/* Mensaje de Estado */}
          {submitStatus !== "idle" && (
            <div
              className={`p-3 rounded-lg flex items-center space-x-2 ${
                submitStatus === "success"
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              {submitStatus === "success" ? (
                <CheckCircle className="h-4 w-4" />
              ) : (
                <AlertCircle className="h-4 w-4" />
              )}
              <span className="text-sm">{submitMessage}</span>
            </div>
          )}

          {/* Botón de Envío */}
          <Button
            type="submit"
            className="w-full bg-azure-600 hover:bg-azure-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Mail className="mr-2 h-4 w-4" />
                Enviar Consulta
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
