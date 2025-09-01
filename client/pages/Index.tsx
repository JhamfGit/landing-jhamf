import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/ContactForm";
import {
  Cloud,
  Shield,
  Database,
  Server,
  Globe,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Users,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-azure-50 to-azure-100">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-azure-200 sticky top-0 z-50">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <img
                src="https://jhamfgroup.net/wp-content/uploads/2025/07/logo-grande-Jhamf-ISO9001_Original-scaled.png"
                alt="Jhamf Group SAS Logo"
                className="h-8 sm:h-10 w-auto object-contain"
              />
              <div className="hidden sm:block">
                <h1 className="text-lg sm:text-xl font-bold text-azure-900">
                  Jhamf Group SAS
                </h1>
                <p className="text-xs sm:text-sm text-azure-600">
                  Microsoft Azure Solutions
                </p>
              </div>
            </div>
            <Badge
              variant="outline"
              className="bg-azure-50 text-azure-700 border-azure-300 text-xs sm:text-sm px-2 sm:px-2.5"
            >
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">ANDICOM </span>2025
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Formulario - Lado Izquierdo */}
            <div className="order-2 lg:order-1">
              <ContactForm />
            </div>

            {/* Contenido Principal - Lado Derecho */}
            <div className="order-1 lg:order-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-azure-900 mb-4 sm:mb-6 leading-tight">
                Transformamos tu infraestructura con
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-azure-600 to-azure-800">
                  {" "}
                  Microsoft Azure
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-azure-700 mb-6 sm:mb-8 leading-relaxed">
                En <strong>ANDICOM 2025</strong>, Jhamf Group SAS presenta
                soluciones integrales de cloud computing con Microsoft Azure.
                Especialistas en infraestructura, plataformas y seguridad en la
                nube.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
                <Button
                  size="lg"
                  className="bg-azure-600 hover:bg-azure-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 w-full sm:w-auto"
                  asChild
                >
                  <a
                    href="https://wa.me/573174660498"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Contactar Ahora
                  </a>
                </Button>
                <div className="flex items-center text-azure-600">
                  <MapPin className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-xs sm:text-sm">
                    Cartagena de Indias, Colombia • ANDICOM 2025
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Azure Services Section */}
      <section className="py-12 sm:py-16 px-3 sm:px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-azure-900 mb-3 sm:mb-4 px-2">
              Nuestras Especialidades en Microsoft Azure
            </h2>
            <p className="text-base sm:text-lg text-azure-600 max-w-2xl mx-auto px-4">
              Ofrecemos servicios completos de infraestructura, plataforma y
              seguridad en Azure para impulsar la transformación digital de tu
              empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
            {/* IaaS */}
            <Card className="border-azure-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-azure-500 to-azure-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Server className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-azure-900">
                  Infraestructura como Servicio (IaaS)
                </CardTitle>
                <CardDescription className="text-azure-600">
                  Soluciones robustas de infraestructura en la nube
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-azure-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-azure-500 rounded-full mr-3"></div>
                    Máquinas virtuales escalables
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-azure-500 rounded-full mr-3"></div>
                    Almacenamiento seguro y redundante
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-azure-500 rounded-full mr-3"></div>
                    Redes virtuales configurables
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-azure-500 rounded-full mr-3"></div>
                    Balanceadores de carga
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* PaaS */}
            <Card className="border-azure-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-azure-500 to-azure-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-azure-900">
                  Plataforma como Servicio (PaaS)
                </CardTitle>
                <CardDescription className="text-azure-600">
                  Plataformas listas para desarrollo y despliegue
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-azure-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-azure-500 rounded-full mr-3"></div>
                    Azure SQL Database
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-azure-500 rounded-full mr-3"></div>
                    Azure Kubernetes Service (AKS)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-azure-500 rounded-full mr-3"></div>
                    Azure App Service
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-azure-500 rounded-full mr-3"></div>
                    Azure Functions
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Security */}
            <Card className="border-azure-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-azure-500 to-azure-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-azure-900">
                  Seguridad en Azure
                </CardTitle>
                <CardDescription className="text-azure-600">
                  Protección integral para tus aplicaciones y datos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-azure-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-azure-500 rounded-full mr-3"></div>
                    Azure Security Center
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-azure-500 rounded-full mr-3"></div>
                    Azure Active Directory
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-azure-500 rounded-full mr-3"></div>
                    Azure Key Vault
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-azure-500 rounded-full mr-3"></div>
                    Azure Firewall
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ANDICOM 2025 Section */}
      <section className="py-12 sm:py-16 px-3 sm:px-4 bg-gradient-to-r from-azure-600 to-azure-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-2">
            Encuéntranos en ANDICOM 2025
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto px-4">
            Únete a nosotros en el evento de telecomunicaciones más importante
            de Colombia. Descubre cómo Microsoft Azure puede transformar tu
            infraestructura tecnológica.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
              <Calendar className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 mx-auto mb-3 sm:mb-4 opacity-90" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Evento</h3>
              <p className="opacity-90 text-sm sm:text-base">ANDICOM 2025</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
              <Users className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 mx-auto mb-3 sm:mb-4 opacity-90" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Networking
              </h3>
              <p className="opacity-90 text-sm sm:text-base">
                Conecta con expertos
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
              <Globe className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 mx-auto mb-3 sm:mb-4 opacity-90" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Innovación
              </h3>
              <p className="opacity-90 text-sm sm:text-base">
                Últimas tecnologías
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-12 sm:py-16 px-3 sm:px-4 bg-azure-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-azure-900 mb-3 sm:mb-4 px-2">
                Información de Contacto
              </h2>
              <p className="text-base sm:text-lg text-azure-600 px-4">
                Ponte en contacto con nuestros especialistas en Microsoft Azure
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Contact Information */}
              <Card className="border-azure-200">
                <CardHeader>
                  <CardTitle className="text-azure-900">
                    Datos de Contacto
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-azure-600" />
                    <div>
                      <p className="font-medium text-azure-900">Email</p>
                      <p className="text-azure-600">proyectos@jhamf.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-azure-600" />
                    <div>
                      <p className="font-medium text-azure-900">Ubicación</p>
                      <p className="text-azure-600">
                        Cartagena de Indias, Colombia
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Cloud className="h-5 w-5 text-azure-600" />
                    <div>
                      <p className="font-medium text-azure-900">Especialidad</p>
                      <p className="text-azure-600">
                        Microsoft Azure Solutions
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="border-azure-200 bg-gradient-to-br from-azure-50 to-azure-100">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-azure-900 mb-3">
                    ¿Por qué elegir Jhamf Group SAS?
                  </h3>
                  <ul className="space-y-2 text-azure-700">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-azure-500 rounded-full mr-3"></div>
                      Certificaciones Microsoft Azure
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-azure-500 rounded-full mr-3"></div>
                      Experiencia en proyectos enterprise
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-azure-500 rounded-full mr-3"></div>
                      Soporte técnico especializado
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-azure-500 rounded-full mr-3"></div>
                      Soluciones personalizadas
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* QR Section */}
      <section className="py-12 sm:py-16 px-3 sm:px-4 bg-white border-t border-azure-200">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-azure-900 mb-4 sm:mb-6">
              ¡Inscríbete Ahora!
            </h2>
            <div className="flex flex-col items-center space-y-4 sm:space-y-6">
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-azure-200">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F8fbe59dc18274fad89d11a8abd413a01%2F144c6e96a879468f9019a77d34ca1d5e?format=webp&width=800"
                  alt="Código QR para inscripción ANDICOM 2025"
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain"
                />
              </div>

              <div className="text-center">
                <p className="text-sm sm:text-base text-azure-700 font-semibold mb-2">
                  Formulario de Contacto Jhamf Group SAS
                </p>
                <p className="text-xs sm:text-sm text-azure-600">
                  Escanea con la cámara de tu smartphone para acceder al
                  formulario
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-azure-900 text-white py-6 sm:py-8 px-3 sm:px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-azure-400 to-azure-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-base">
                J
              </span>
            </div>
            <span className="text-lg sm:text-xl font-bold">
              Jhamf Group SAS
            </span>
          </div>
          <p className="text-azure-300 mb-3 sm:mb-4 text-sm sm:text-base px-2">
            Transformamos empresas con Microsoft Azure • ANDICOM 2025
          </p>
          <p className="text-azure-400 text-xs sm:text-sm">
            © 2025 Jhamf Group SAS. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
