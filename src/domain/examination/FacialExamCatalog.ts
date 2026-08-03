import type { ExamManeuver } from "./ExamManeuver";

export const facialExamCatalog: readonly ExamManeuver[] = [
  {
    id: "OBSERVE_FACE_AT_REST",
    displayName: "Inspección facial en reposo",
    instruction: "Observe el rostro sin pedir movimientos."
  },
  {
    id: "RAISE_EYEBROWS",
    displayName: "Elevación de cejas",
    instruction: "Levante ambas cejas."
  },
  {
    id: "WRINKLE_FOREHEAD",
    displayName: "Arrugar la frente",
    instruction: "Arrugue la frente."
  },
  {
    id: "CLOSE_EYES_GENTLY",
    displayName: "Cierre ocular suave",
    instruction: "Cierre ambos ojos suavemente."
  },
  {
    id: "CLOSE_EYES_FORCEFULLY",
    displayName: "Cierre ocular forzado",
    instruction: "Cierre ambos ojos con fuerza."
  },
  {
    id: "SMILE",
    displayName: "Sonrisa",
    instruction: "Sonría."
  },
  {
    id: "SHOW_TEETH",
    displayName: "Mostrar dientes",
    instruction: "Muéstreme los dientes."
  },
  {
    id: "PUFF_CHEEKS",
    displayName: "Inflar mejillas",
    instruction: "Infle ambas mejillas."
  },
  {
    id: "PUCKER_LIPS",
    displayName: "Fruncir labios",
    instruction: "Frunza los labios como si fuera a silbar."
  }
] as const;
