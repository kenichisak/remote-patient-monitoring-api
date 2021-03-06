export interface Center {
  centerId: string;
  centerName?: string;
}
export interface NurseParam {
  nurseId: string;
  manageCenters: {
    centerId: string;
  }[];
}
export interface PatientParam {
  patientId: string;
  phone: string;
  display?: boolean;
  policy_accepted?: string;
  statuses?: Status[];
  centerId: string;
}

export interface Patient {
  patientId: string;
  phone: string;
  display?: boolean;
  policy_accepted?: string;
  statuses?: Status[];
  centerId: string;
}
export interface Status {
  statusId: string;
  patientId: string;
  centerId: string;
  created: string;
  SpO2: number;
  body_temperature: number;
  pulse: number;
  symptom?: {
    symptomId: string;
    cough: boolean;
    phlegm: boolean;
    suffocation: boolean;
    headache: boolean;
    sore_throat: boolean;
    remarks?: string;
  };
}

export interface Symptom {
  cough: boolean;
  phlegm: boolean;
  suffocation: boolean;
  headache: boolean;
  sore_throat: boolean;
  remarks?: string;
}

export interface StatusParam {
  SpO2: number;
  body_temperature: number;
  pulse: number;
  symptom?: Symptom;
}
