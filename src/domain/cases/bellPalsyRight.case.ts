import type { ClinicalCaseDefinition } from "./ClinicalCaseDefinition";

export const bellPalsyRightCase: ClinicalCaseDefinition = {
  id: "bell-palsy-right-v0-1",
  displayName: "Parálisis facial periférica derecha",
  diagnosis: "Parálisis facial periférica idiopática (parálisis de Bell)",
  patient: {
    ageYears: 42,
    sex: "male"
  },
  affectedSide: "right",
  severity: {
    scale: "House–Brackmann",
    grade: 4
  },
  history: {
    durationHours: 8,
    onset: "acute",
    headache: false,
    limbWeakness: false,
    sensoryLoss: false,
    diplopia: false,
    dysphagia: false,
    earPain: true,
    vesicularRash: false
  },
  examination: {
    facialMotor: {
      restSymmetry: { left: 1, right: 0.45 },
      eyebrowRaise: { left: 1, right: 0.15 },
      foreheadWrinkling: { left: 1, right: 0.15 },
      gentleEyeClosure: { left: 1, right: 0.45 },
      forcefulEyeClosure: { left: 1, right: 0.35 },
      smile: { left: 1, right: 0.2 },
      showTeeth: { left: 1, right: 0.2 },
      cheekPuff: { left: 1, right: 0.3 },
      lipPucker: { left: 1, right: 0.35 }
    },
    neurologicalScreen: {
      speechNormal: true,
      upperLimbStrengthNormal: true,
      lowerLimbStrengthNormal: true,
      sensationNormal: true,
      coordinationNormal: true,
      gaitNormal: true,
      gazeNormal: true
    }
  }
};
