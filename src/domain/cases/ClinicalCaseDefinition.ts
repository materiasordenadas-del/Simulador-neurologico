export type BodySide = "left" | "right";
export type Sex = "female" | "male";
export type HouseBrackmannGrade = 1 | 2 | 3 | 4 | 5 | 6;
export type ActivationLevel = number;

export interface BilateralActivation {
  left: ActivationLevel;
  right: ActivationLevel;
}

export interface ClinicalCaseDefinition {
  id: string;
  displayName: string;
  diagnosis: string;
  patient: {
    ageYears: number;
    sex: Sex;
  };
  affectedSide: BodySide;
  severity: {
    scale: "House–Brackmann";
    grade: HouseBrackmannGrade;
  };
  history: {
    durationHours: number;
    onset: "acute";
    headache: boolean;
    limbWeakness: boolean;
    sensoryLoss: boolean;
    diplopia: boolean;
    dysphagia: boolean;
    earPain: boolean;
    vesicularRash: boolean;
  };
  examination: {
    facialMotor: {
      restSymmetry: BilateralActivation;
      eyebrowRaise: BilateralActivation;
      foreheadWrinkling: BilateralActivation;
      gentleEyeClosure: BilateralActivation;
      forcefulEyeClosure: BilateralActivation;
      smile: BilateralActivation;
      showTeeth: BilateralActivation;
      cheekPuff: BilateralActivation;
      lipPucker: BilateralActivation;
    };
    neurologicalScreen: {
      speechNormal: boolean;
      upperLimbStrengthNormal: boolean;
      lowerLimbStrengthNormal: boolean;
      sensationNormal: boolean;
      coordinationNormal: boolean;
      gaitNormal: boolean;
      gazeNormal: boolean;
    };
  };
}
