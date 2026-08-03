import { describe, expect, it } from "vitest";
import { bellPalsyRightCase } from "../domain/cases/bellPalsyRight.case";
import { SimulationEngine } from "./SimulationEngine";

describe("SimulationEngine", () => {
  it("emite asimetría ocular derecha al solicitar cierre forzado", () => {
    const engine = new SimulationEngine(bellPalsyRightCase);
    engine.start();

    const events = engine.performManeuver("CLOSE_EYES_FORCEFULLY");
    const avatarEvent = events.find(
      (event) => event.type === "AVATAR_COMMAND_CREATED"
    );

    expect(avatarEvent).toBeDefined();
    if (avatarEvent?.type !== "AVATAR_COMMAND_CREATED") {
      throw new Error("No se generó el comando esperado.");
    }

    expect(avatarEvent.command.activation.left).toBe(1);
    expect(avatarEvent.command.activation.right).toBe(0.35);
  });
});
