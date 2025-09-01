# Configuración del Formulario de Contacto

## Variables de Entorno Requeridas

Para que el formulario de contacto funcione correctamente, necesitas configurar las siguientes variables de entorno:

### Configuración SMTP (Servidor de Email)

```bash
SMTP_HOST=smtp.gmail.com          # Servidor SMTP (ejemplo con Gmail)
SMTP_PORT=587                     # Puerto SMTP (587 para TLS, 465 para SSL)
SMTP_USER=landingpagesjhamf@gmail.com      # Usuario SMTP
SMTP_PASS=jHAMF123456+       # Contraseña de aplicación
```

### Configuración de Emails

```bash
SMTP_FROM=noreply@jhamf.com       # Email remitente
#CONTACT_EMAIL=jlarcila@jhamf.com,proyectos@jhamf.com,hquiceno@jhamf.com # Email destinatario de formularios
CONTACT_EMAIL=hquiceno@jhamf.com # Email destinatario de formularios
```

## Configuración con Gmail

1. **Habilitar autenticación de 2 factores** en tu cuenta de Gmail
2. **Generar una contraseña de aplicación**:
   - Ve a Configuración de Google → Seguridad
   - En "Acceso a Google", selecciona "Contraseñas de aplicaciones"
   - Genera una nueva contraseña para "Correo"
3. **Usar la contraseña generada** en `SMTP_PASS`

## Configuración con Otros Proveedores

### Outlook/Hotmail

```bash
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
```

### Yahoo

```bash
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
```

### Servidor SMTP Personalizado

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=landingpagesjhamf@gmail.com
SMTP_PASS=jHAMF123456+
```

## Características del Formulario

### Campos Incluidos

- ✅ **Nombre completo** (requerido)
- ✅ **Empresa** (requerido)
- ✅ **Email** (requerido)
- ✅ **Teléfono** (opcional)
- ✅ **Cargo** (opcional)
- ✅ **Mensaje** (requerido, mínimo 10 caracteres)
- ✅ **Servicios de interés** (múltiple selección)

### Consentimientos AVEAS/RGPD

- ✅ **Tratamiento de datos personales** (requerido)
- ✅ **Newsletter** (opcional)

### Validaciones

- ✅ **Validación frontend** con mensajes de error
- ✅ **Validación backend** con Zod
- ✅ **Formato de email** validado
- ✅ **Campos requeridos** verificados

### Funcionalidades

- ✅ **Envío por email HTML** con diseño profesional
- ✅ **Estados de carga** (loading, success, error)
- ✅ **Respuesta automática** al usuario
- ✅ **Cumplimiento RGPD/AVEAS** con consentimientos

## Pruebas en Desarrollo

En desarrollo, si no configuras las variables SMTP, el sistema usará **Ethereal Email** (emails de prueba) y mostrará un enlace en la consola para ver el email enviado.

## Producción

Para producción, asegúrate de:

1. **Configurar todas las variables** de entorno SMTP
2. **Usar un servidor SMTP confiable** (Gmail, SendGrid, etc.)
3. **Verificar que el email destinatario** (`CONTACT_EMAIL`) sea correcto
4. **Probar el formulario** antes de lanzar

## Endpoint de API

El formulario envía datos a:

```
POST /api/contact
```

Con el siguiente formato JSON:

```json
{
  "nombre": "Juan Pérez",
  "empresa": "Empresa SAS",
  "email": "juan@empresa.com",
  "telefono": "+57 300 123 4567",
  "cargo": "Gerente IT",
  "mensaje": "Interesado en servicios Azure...",
  "serviciosInteres": ["IaaS", "PaaS"],
  "consentimientoDatos": true,
  "newsletter": false
}
```
