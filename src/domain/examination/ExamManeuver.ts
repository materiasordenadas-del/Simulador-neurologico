export type FacialExamManeuverId =
  | "OBSERVE_FACE_AT_REST"
  | "RAISE_EYEBROWS"
  | "WRINKLE_FOREHEAD"
  | "CLOSE_EYES_GENTLY"
  | "CLOSE_EYES_FORCEFULLY"
  | "SMILE"
  | "SHOW_TEETH"
  | "PUFF_CHEEKS"
  | "PUCKER_LIPS";

export interface ExamManeuver {
  id: FacialExamManeuverId;
  displayName: string;
  instruction: string;
}
