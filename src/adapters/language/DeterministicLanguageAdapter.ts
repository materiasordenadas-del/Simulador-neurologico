import type { DialogueIntent } from "../../domain/dialogue/DialogueIntent";

const patterns: ReadonlyArray<{
  intent: Exclude<DialogueIntent, "UNKNOWN">;
  expressions: readonly RegExp[];
}> = [
  {
    intent: "ASK_ONSET",
    expressions: [/desde cu[aá]ndo/i, /cu[aá]ndo comenz[oó]/i, /hace cu[aá]nto/i]
  },
  {
    intent: "ASK_HEADACHE",
    expressions: [/dolor de cabeza/i, /duele la cabeza/i, /cefalea/i]
  },
  {
    intent: "ASK_LIMB_WEAKNESS",
    expressions: [/debilidad.*(brazo|pierna)/i, /mover.*(brazo|pierna)/i]
  },
  {
    intent: "ASK_EAR_PAIN",
    expressions: [/dolor.*o[ií]do/i, /duele.*oreja/i, /otalgia/i]
  },
  {
    intent: "ASK_DIPLOPIA",
    expressions: [/visi[oó]n doble/i, /ve doble/i, /diplop[ií]a/i]
  }
];

export class DeterministicLanguageAdapter {
  classify(text: string): DialogueIntent {
    for (const entry of patterns) {
      if (entry.expressions.some((expression) => expression.test(text))) {
        return entry.intent;
      }
    }

    return "UNKNOWN";
  }
}
