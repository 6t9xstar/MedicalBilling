export interface Specialty {
  name: string;
  slug: string;
  icon: string;
}

export interface SpecialtyGroup {
  letter: string;
  specialties: Specialty[];
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function createSpecialty(name: string, icon: string): Specialty {
  return { name, slug: slugify(name), icon };
}

export const specialties: SpecialtyGroup[] = [
  {
    letter: "A",
    specialties: [
      createSpecialty("Acupuncture", "Syringe"),
      createSpecialty("Allergy Immunology", "Bug"),
      createSpecialty("Anesthesia", "Moon"),
      createSpecialty("Audiology", "AudioLines"),
    ],
  },
  {
    letter: "B",
    specialties: [createSpecialty("Behavioral Health", "Users")],
  },
  {
    letter: "C",
    specialties: [
      createSpecialty("Cardiology", "HeartPulse"),
      createSpecialty("Chiropractic", "PersonStanding"),
      createSpecialty("Cosmetic Surgery", "Sparkles"),
    ],
  },
  {
    letter: "D",
    specialties: [
      createSpecialty("Dentistry", "Smile"),
      createSpecialty("Dermatology", "Scan"),
      createSpecialty("Diagnostic Imaging", "Monitor"),
    ],
  },
  {
    letter: "E",
    specialties: [
      createSpecialty("Emergency Medicine", "Siren"),
      createSpecialty("Endocrinology", "Gauge"),
    ],
  },
  {
    letter: "F",
    specialties: [createSpecialty("Family Medicine", "Stethoscope")],
  },
  {
    letter: "G",
    specialties: [
      createSpecialty("Gastroenterology", "Apple"),
      createSpecialty("General Surgery", "Scissors"),
    ],
  },
  {
    letter: "H",
    specialties: [createSpecialty("Home Health", "Home")],
  },
  {
    letter: "I",
    specialties: [createSpecialty("Internal Medicine", "Activity")],
  },
  {
    letter: "M",
    specialties: [createSpecialty("Mental Health", "HeartHandshake")],
  },
  {
    letter: "N",
    specialties: [
      createSpecialty("Nephrology", "Droplet"),
      createSpecialty("Neurology", "Brain"),
      createSpecialty("Nuclear Medicine", "Radiation"),
    ],
  },
  {
    letter: "O",
    specialties: [
      createSpecialty("Obstetrics & Gynecology", "Flower2"),
      createSpecialty("Oncology", "Ribbon"),
      createSpecialty("Ophthalmology", "Eye"),
      createSpecialty("Orthopedic Surgery", "Bone"),
      createSpecialty("Otolaryngology", "Ear"),
    ],
  },
  {
    letter: "P",
    specialties: [
      createSpecialty("Pain Management", "Zap"),
      createSpecialty("Pathology", "Microscope"),
      createSpecialty("Pediatrics", "Baby"),
      createSpecialty("Physical Medicine & Rehab", "Dumbbell"),
      createSpecialty("Plastic Surgery", "Feather"),
      createSpecialty("Podiatry", "Footprints"),
      createSpecialty("Psychiatry", "MessageCircle"),
      createSpecialty("Pulmonology", "Wind"),
    ],
  },
  {
    letter: "R",
    specialties: [
      createSpecialty("Radiology", "Camera"),
      createSpecialty("Rheumatology", "Hand"),
    ],
  },
  {
    letter: "S",
    specialties: [
      createSpecialty("Sleep Medicine", "Moon"),
      createSpecialty("Speech Therapy", "Waves"),
      createSpecialty("Sports Medicine", "Flame"),
    ],
  },
  {
    letter: "T",
    specialties: [createSpecialty("Telehealth", "Video")],
  },
  {
    letter: "U",
    specialties: [
      createSpecialty("Urgent Care", "Clock"),
      createSpecialty("Urology", "Droplets"),
    ],
  },
  {
    letter: "V",
    specialties: [createSpecialty("Vascular Surgery", "Heart")],
  },
];

export function getAllSpecialties(): Specialty[] {
  return specialties.flatMap((group) => group.specialties);
}

export function getAllSpecialtyLetters(): string[] {
  return specialties.map((g) => g.letter);
}
