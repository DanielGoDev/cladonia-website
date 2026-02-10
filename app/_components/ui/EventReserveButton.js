"use client";
import { useRouter } from "next/navigation";

export default function EventReserveButton({ eventId, cuposDisponibles }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/form?destination=eventos&activity=${eventId}`);
  };

  return (
    <button
      onClick={handleClick}
      disabled={cuposDisponibles === 0}
      className={`px-6 py-3 rounded-full font-bold transition ${
        cuposDisponibles === 0
          ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
          : 'bg-yellow-400 text-black hover:bg-yellow-500'
      }`}
    >
      {cuposDisponibles === 0 ? 'Agotado' : `${cuposDisponibles} Cupos disponibles -  Reservar `}
    </button>
  );
}
