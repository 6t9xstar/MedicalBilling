export interface Specialty {
  name: string;
  slug: string;
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

function createSpecialty(name: string): Specialty {
  return { name, slug: slugify(name) };
}

export const specialties: SpecialtyGroup[] = [
  {
    letter: "A",
    specialties: [
      createSpecialty("Acupuncture"),
      createSpecialty("Allergy Immunology"),
      createSpecialty("Anesthesia"),
      createSpecialty("Audiology"),
    ],
  },
  {
    letter: "B",
    specialties: [createSpecialty("Behavioral Health")],
  },
  {
    letter: "C",
    specialties: [
      createSpecialty("Cardiology"),
      createSpecialty("Chiropractic"),
      createSpecialty("Cosmetic Surgery"),
    ],
  },
  {
    letter: "D",
    specialties: [
      createSpecialty("Dentistry"),
      createSpecialty("Dermatology"),
      createSpecialty("Diagnostic Imaging"),
    ],
  },
  {
    letter: "E",
    specialties: [
      createSpecialty("Emergency Medicine"),
      createSpecialty("Endocrinology"),
    ],
  },
  {
    letter: "F",
    specialties: [createSpecialty("Family Medicine")],
  },
  {
    letter: "G",
    specialties: [
      createSpecialty("Gastroenterology"),
      createSpecialty("General Surgery"),
    ],
  },
  {
    letter: "H",
    specialties: [createSpecialty("Home Health")],
  },
  {
    letter: "I",
    specialties: [createSpecialty("Internal Medicine")],
  },
  {
    letter: "M",
    specialties: [createSpecialty("Mental Health")],
  },
  {
    letter: "N",
    specialties: [
      createSpecialty("Nephrology"),
      createSpecialty("Neurology"),
      createSpecialty("Nuclear Medicine"),
    ],
  },
  {
    letter: "O",
    specialties: [
      createSpecialty("Obstetrics & Gynecology"),
      createSpecialty("Oncology"),
      createSpecialty("Ophthalmology"),
      createSpecialty("Orthopedic Surgery"),
      createSpecialty("Otolaryngology"),
    ],
  },
  {
    letter: "P",
    specialties: [
      createSpecialty("Pain Management"),
      createSpecialty("Pathology"),
      createSpecialty("Pediatrics"),
      createSpecialty("Physical Medicine & Rehab"),
      createSpecialty("Plastic Surgery"),
      createSpecialty("Podiatry"),
      createSpecialty("Psychiatry"),
      createSpecialty("Pulmonology"),
    ],
  },
  {
    letter: "R",
    specialties: [
      createSpecialty("Radiology"),
      createSpecialty("Rheumatology"),
    ],
  },
  {
    letter: "S",
    specialties: [
      createSpecialty("Sleep Medicine"),
      createSpecialty("Speech Therapy"),
      createSpecialty("Sports Medicine"),
    ],
  },
  {
    letter: "T",
    specialties: [createSpecialty("Telehealth")],
  },
  {
    letter: "U",
    specialties: [
      createSpecialty("Urgent Care"),
      createSpecialty("Urology"),
    ],
  },
  {
    letter: "V",
    specialties: [createSpecialty("Vascular Surgery")],
  },
];

export function getAllSpecialties(): Specialty[] {
  return specialties.flatMap((group) => group.specialties);
}

export function getAllSpecialtyLetters(): string[] {
  return specialties.map((g) => g.letter);
}
