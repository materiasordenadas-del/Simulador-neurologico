import type { AvatarCommand } from "../avatar/AvatarCommand";
import type { FacialExamManeuverId } from "../examination/ExamManeuver";

export interface SimulationState {
  status: "not-started" | "running" | "finished";
  elapsedSeconds: number;
  questionsAsked: string[];
  maneuversPerformed: FacialExamManeuverId[];
  lastPatientResponse: string | null;
  lastAvatarCommand: AvatarCommand | null;
}

export const initialSimulationState: SimulationState = {
  status: "not-started",
  elapsedSeconds: 0,
  questionsAsked: [],
  maneuversPerformed: [],
  lastPatientResponse: null,
  lastAvatarCommand: null
};
