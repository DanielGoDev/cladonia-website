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
    // Tarifas diferenciadas por tipo de visitante
    rates: {
      // Chingaza
      lagunas_siecha: { children: 30000, adults: 45000, seniors: 0, foreigners: 60000 },
      observacion_aves: { children: 35000, adults: 50000, seniors: 0, foreigners: 65000 },
      fotografia_paisaje: { children: 38000, adults: 55000, seniors: 0, foreigners: 70000 },
      // Zoque
      caminata_ecologica: { children: 35000, adults: 50000, seniors: 0, foreigners: 65000 },
      avistamiento_fauna: { children: 38000, adults: 55000, seniors: 0, foreigners: 70000 },
      plantas_medicinales: { children: 33000, adults: 48000, seniors: 0, foreigners: 63000 },
      // Fotográfico
      amanecer_montaña: { children: 42000, adults: 60000, seniors: 0, foreigners: 78000 },
      macro_flora: { children: 40000, adults: 58000, seniors: 0, foreigners: 75000 },
      paisajes_aereos: { children: 48000, adults: 70000, seniors: 0, foreigners: 90000 },
      // Eventos
      caminata_ancestral: { children: 28000, adults: 40000, seniors: 0, foreigners: 52000 },
      tarde_meditacion: { children: 26000, adults: 38000, seniors: 0, foreigners: 50000 },
      observacion_nocturna: { children: 31000, adults: 45000, seniors: 0, foreigners: 58000 }
    },
    prices: {} // Mantener para compatibilidad
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
      // Chingaza
      lagunas_siecha: 74900,
      observacion_aves: 80000,
      fotografia_paisaje: 85000,
      // Zoque
      caminata_ecologica: 80000,
      avistamiento_fauna: 85000,
      plantas_medicinales: 78000,
      // Fotográfico
      amanecer_montaña: 90000,
      macro_flora: 88000,
      paisajes_aereos: 100000,
      // Eventos
      caminata_ancestral: 65000,
      tarde_meditacion: 63000,
      observacion_nocturna: 70000
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
      // Chingaza
      lagunas_siecha: 110000,
      observacion_aves: 120000,
      fotografia_paisaje: 130000,
      // Zoque
      caminata_ecologica: 120000,
      avistamiento_fauna: 130000,
      plantas_medicinales: 115000,
      // Fotográfico
      amanecer_montaña: 140000,
      macro_flora: 135000,
      paisajes_aereos: 160000,
      // Eventos
      caminata_ancestral: 95000,
      tarde_meditacion: 90000,
      observacion_nocturna: 100000
    }
  }
};
