export interface PersonalityDefinition {
  id: string;
  displayName: string;
  traits: {
    cooperation: number;
    anxiety: number;
    irritability: number;
    trust: number;
    verbosity: number;
  };
  communication: {
    answersDirectly: boolean;
    asksForClarification: boolean;
    interrupts: boolean;
    refusesManeuvers: boolean;
  };
}
