import type { PersonalityDefinition } from "./PersonalityDefinition";

export const calmCooperativePersonality: PersonalityDefinition = {
  id: "calm-cooperative",
  displayName: "Tranquilo y cooperador",
  traits: {
    cooperation: 1,
    anxiety: 0.15,
    irritability: 0,
    trust: 0.9,
    verbosity: 0.4
  },
  communication: {
    answersDirectly: true,
    asksForClarification: false,
    interrupts: false,
    refusesManeuvers: false
  }
};
