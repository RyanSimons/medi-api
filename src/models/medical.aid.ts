import mongoose, { Schema } from "mongoose"

export interface IMedicalAid extends Document {
  id: number
  category: string
  vertical: string
  medicalAid: string
  logo: string
  brochure: string
  hospList: string
  hospital: Hospital
  price: number
  contribution: Contribution
  dayToDay: DayToDay
  chronic: Chronic
  maternity: Maternity
  oncology: Oncology
}

export interface Hospital {
  generalCover: string
  gpAndSpecialists: string
  dialysis: string
  mentalHealth: string
  pvtHospitalNetworkCover: string
}

export interface Contribution {
  id: number
  principal: Principal
  adult: Adult
  children: Children
}

export interface Principal {
  id: number
  ranges: number[]
  savings: number
}

export interface Adult {
  id: number
  ranges: number[]
  savings: number
}

export interface Children {
  id: number
  ranges: number[]
  savings: number
}

export interface DayToDay {
  id: number
  medicalSavingsAccount: string
  generalPracticioners: string
  specialists: string
  optometry: string
  dentistry: string
  physiotherapy: string
}

export interface Chronic {
  id: number
  generalCover: string
  additionalCover: string
}

export interface Maternity {
  id: number
  consultations: string
  scans: string
  vaccinations: string
}

export interface Oncology {
  generalCover: string
}

const MedicalAidSchema: Schema = new Schema({
  "id": {
    "type": "Number"
  },
  "category": {
    "type": "String"
  },
  "vertical": {
    "type": "String"
  },
  "medicalAid": {
    "type": "String"
  },
  "logo": {
    "type": "String"
  },
  "brochure": {
    "type": "String"
  },
  "hospList": {
    "type": "String"
  },
  "hospital": {
    "generalCover": {
      "type": "String"
    },
    "gpAndSpecialists": {
      "type": "String"
    },
    "dialysis": {
      "type": "String"
    },
    "mentalHealth": {
      "type": "String"
    },
    "pvtHospitalNetworkCover": {
      "type": "String"
    }
  },
  "price": {
    "type": "Number"
  },
  "contribution": {
    "id": {
      "type": "Number"
    },
    "principal": {
      "id": {
        "type": "Number"
      },
      "ranges": {
        "type": [
          "Number"
        ]
      },
      "savings": {
        "type": "Number"
      }
    },
    "adult": {
      "id": {
        "type": "Number"
      },
      "ranges": {
        "type": [
          "Number"
        ]
      },
      "savings": {
        "type": "Number"
      }
    },
    "children": {
      "id": {
        "type": "Number"
      },
      "ranges": {
        "type": [
          "Number"
        ]
      },
      "savings": {
        "type": "Number"
      }
    }
  },
  "dayToDay": {
    "id": {
      "type": "Number"
    },
    "medicalSavingsAccount": {
      "type": "String"
    },
    "generalPracticioners": {
      "type": "String"
    },
    "specialists": {
      "type": "String"
    },
    "optometry": {
      "type": "String"
    },
    "dentistry": {
      "type": "String"
    },
    "physiotherapy": {
      "type": "String"
    }
  },
  "chronic": {
    "id": {
      "type": "Number"
    },
    "generalCover": {
      "type": "String"
    },
    "additionalCover": {
      "type": "String"
    }
  },
  "maternity": {
    "id": {
      "type": "Number"
    },
    "consultations": {
      "type": "String"
    },
    "scans": {
      "type": "String"
    },
    "vaccinations": {
      "type": "String"
    }
  },
  "oncology": {
    "generalCover": {
      "type": "String"
    }
  }
});

export default mongoose.model<IMedicalAid>('MedicalAid', MedicalAidSchema);
