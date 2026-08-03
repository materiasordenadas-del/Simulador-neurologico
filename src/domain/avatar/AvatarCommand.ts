import type { BilateralActivation } from "../cases/ClinicalCaseDefinition";
import type { FacialExamManeuverId } from "../examination/ExamManeuver";

export interface AvatarCommand {
  actor: "patient";
  type: "SET_FACIAL_MANEUVER";
  maneuverId: FacialExamManeuverId;
  activation: BilateralActivation;
  transitionMs: number;
  holdMs: number;
}
