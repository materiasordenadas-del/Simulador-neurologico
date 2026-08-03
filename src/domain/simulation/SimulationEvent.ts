import type { AvatarCommand } from "../avatar/AvatarCommand";
import type { FacialExamManeuverId } from "../examination/ExamManeuver";

export type SimulationEvent =
  | { type: "SIMULATION_STARTED" }
  | { type: "PATIENT_RESPONDED"; text: string }
  | {
      type: "EXAM_FINDING_REVEALED";
      maneuverId: FacialExamManeuverId;
      description: string;
    }
  | { type: "AVATAR_COMMAND_CREATED"; command: AvatarCommand }
  | { type: "SIMULATION_ENDED" };
