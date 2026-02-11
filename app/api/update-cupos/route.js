import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function POST(request) {
  try {
    const { eventId, personas } = await request.json();

    // Obtener cupos actuales
    const { data: evento, error: fetchError } = await supabase
      .from('eventos')
      .select('cupos_disponibles')
      .eq('id', eventId)
      .single();

    if (fetchError) throw fetchError;

    // Calcular nuevos cupos
    const nuevosCupos = evento.cupos_disponibles - personas;

    if (nuevosCupos < 0) {
      return NextResponse.json(
        { error: 'No hay suficientes cupos disponibles' },
        { status: 400 }
      );
    }

    // Actualizar cupos
    const { error: updateError } = await supabase
      .from('eventos')
      .update({ cupos_disponibles: nuevosCupos })
      .eq('id', eventId);

    if (updateError) throw updateError;

    return NextResponse.json({ success: true, cuposDisponibles: nuevosCupos });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
