export const plans = {
  basic: {
    id: 'basic',
    name: 'Plan Básico',
    subtitle: 'Experiencia esencial',
    badge: null,
    features: [
      'Guía especializado',
      'Póliza de seguro incluida'
    ],
    prices: {
      chingaza: 45000,
      zoque: 50000,
      fotografico: 60000,
      eventos: 40000
    }
  },
  standard: {
    id: 'standard',
    name: 'Plan Estándar',
    subtitle: 'Experiencia completa',
    badge: 'MÁS POPULAR',
    features: [
      'Todo del plan básico',
      'Almuerzo incluido',
      'Transporte incluido'
    ],
    prices: {
      chingaza: 74900,
      zoque: 80000,
      fotografico: 90000,
      eventos: 65000
    }
  },
  premium: {
    id: 'premium',
    name: 'Plan Personalizado',
    subtitle: 'Experiencia a tu medida',
    badge: null,
    features: [
      'Todo del plan estándar',
      'Fotografía profesional',
      'Itinerario personalizado',
      'Guía bilingüe disponible'
    ],
    prices: {
      chingaza: 110000,
      zoque: 120000,
      fotografico: 140000,
      eventos: 95000
    }
  }
};
