"use client";
import { Dialog } from '@headlessui/react';

export default function TermsModal({ isOpen, onClose, type = 'terms' }) {
  const content = {
    terms: {
      title: 'Términos y Condiciones',
      text: `Al reservar con Cladonia, aceptas los siguientes términos:

1. RESERVAS Y PAGOS
- Las reservas deben realizarse con mínimo 48 horas de anticipación
- El pago debe completarse para confirmar la reserva
- Cancelaciones con más de 24 horas tienen reembolso del 80%

2. RESPONSABILIDADES
- Los participantes deben estar en condiciones físicas adecuadas
- Es obligatorio seguir las instrucciones del guía en todo momento
- Cladonia no se hace responsable por objetos personales perdidos

3. REQUISITOS
- Edad mínima: 12 años (menores con adulto responsable)
- Seguro de accidentes incluido en el precio
- Equipo básico proporcionado por Cladonia

4. CONDICIONES CLIMÁTICAS
- Las actividades pueden cancelarse por condiciones climáticas adversas
- En caso de cancelación por clima, se reprograma sin costo adicional

5. CÓDIGO DE CONDUCTA
- Respeto por la naturaleza y otros visitantes
- Prohibido el consumo de alcohol o sustancias
- No está permitido salirse de los senderos marcados`
    },
    privacy: {
      title: 'Política de Privacidad y Protección de Datos',
      text: `CLADONIA respeta tu privacidad y protege tus datos personales:

1. DATOS RECOPILADOS
- Nombre completo, correo electrónico, teléfono
- Información de reserva y preferencias
- Datos de pago (procesados de forma segura)

2. USO DE LA INFORMACIÓN
- Procesar y confirmar reservas
- Comunicaciones sobre tu experiencia
- Mejora de nuestros servicios
- Cumplimiento de obligaciones legales

3. PROTECCIÓN DE DATOS
- Almacenamiento seguro con encriptación
- Acceso restringido solo a personal autorizado
- No compartimos datos con terceros sin consentimiento

4. TUS DERECHOS
- Acceso a tus datos personales
- Corrección de información inexacta
- Eliminación de datos (derecho al olvido)
- Oposición al procesamiento

5. COOKIES Y SEGUIMIENTO
- Usamos cookies para mejorar la experiencia
- Puedes desactivarlas en tu navegador
- Algunas funciones pueden verse afectadas

6. CONTACTO
- Para ejercer tus derechos: info@cladonia.com
- Respuesta en máximo 15 días hábiles

Última actualización: Enero 2025`
    }
  };

  const { title, text } = content[type];

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-2xl w-full bg-white rounded-xl shadow-2xl max-h-[80vh] overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <Dialog.Title className="text-2xl font-bold text-gray-900">
              {title}
            </Dialog.Title>
          </div>
          
          <div className="p-6 overflow-y-auto max-h-[60vh]">
            <pre className="whitespace-pre-wrap text-sm text-gray-700 font-sans leading-relaxed">
              {text}
            </pre>
          </div>
          
          <div className="p-6 border-t border-gray-200 flex justify-end">
            <button
              onClick={onClose}
              className="bg-yellow-400 text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-500 transition"
            >
              Cerrar
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
