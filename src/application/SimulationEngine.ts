import type { ClinicalCaseDefinition } from "../domain/cases/ClinicalCaseDefinition";
import type { FacialExamManeuverId } from "../domain/examination/ExamManeuver";
import type { SimulationEvent } from "../domain/simulation/SimulationEvent";
import {
  initialSimulationState,
  type SimulationState
} from "../domain/simulation/SimulationState";

const facialMotorKeyByManeuver: Record<
  FacialExamManeuverId,
  keyof ClinicalCaseDefinition["examination"]["facialMotor"]
> = {
  OBSERVE_FACE_AT_REST: "restSymmetry",
  RAISE_EYEBROWS: "eyebrowRaise",
  WRINKLE_FOREHEAD: "foreheadWrinkling",
  CLOSE_EYES_GENTLY: "gentleEyeClosure",
  CLOSE_EYES_FORCEFULLY: "forcefulEyeClosure",
  SMILE: "smile",
  SHOW_TEETH: "showTeeth",
  PUFF_CHEEKS: "cheekPuff",
  PUCKER_LIPS: "lipPucker"
};

export class SimulationEngine {
  private state: SimulationState = structuredClone(initialSimulationState);

  constructor(private readonly clinicalCase: ClinicalCaseDefinition) {}

  getState(): Readonly<SimulationState> {
    return this.state;
  }

  start(): SimulationEvent[] {
    this.state = {
      ...structuredClone(initialSimulationState),
      status: "running"
    };

    return [{ type: "SIMULATION_STARTED" }];
  }

  performManeuver(maneuverId: FacialExamManeuverId): SimulationEvent[] {
    this.assertRunning();

    const motorKey = facialMotorKeyByManeuver[maneuverId];
    const activation = this.clinicalCase.examination.facialMotor[motorKey];

    const avatarCommand = {
      actor: "patient" as const,
      type: "SET_FACIAL_MANEUVER" as const,
      maneuverId,
      activation,
      transitionMs: 300,
      holdMs: 1800
    };

    this.state = {
      ...this.state,
      maneuversPerformed: [...this.state.maneuversPerformed, maneuverId],
      lastAvatarCommand: avatarCommand
    };

    const description = `Activación izquierda ${Math.round(
      activation.left * 100
    )} %, derecha ${Math.round(activation.right * 100)} %.`;

    return [
      {
        type: "EXAM_FINDING_REVEALED",
        maneuverId,
        description
      },
      {
        type: "AVATAR_COMMAND_CREATED",
        command: avatarCommand
      }
    ];
  }

  end(): SimulationEvent[] {
    this.assertRunning();
    this.state = { ...this.state, status: "finished" };
    return [{ type: "SIMULATION_ENDED" }];
  }

  private assertRunning(): void {
    if (this.state.status !== "running") {
      throw new Error("La simulación debe estar activa para ejecutar esta acción.");
    }
  }
}
