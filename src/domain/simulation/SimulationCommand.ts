import type { FacialExamManeuverId } from "../examination/ExamManeuver";

export type SimulationCommand =
  | { type: "START_SIMULATION" }
  | { type: "ASK_QUESTION"; text: string }
  | { type: "PERFORM_MANEUVER"; maneuverId: FacialExamManeuverId }
  | { type: "END_SIMULATION" };
