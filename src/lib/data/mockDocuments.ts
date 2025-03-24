import type { Document } from "$lib/types";

// Extended mock document data
export const mockDocuments: Document[] = [
  {
    id: 1,
    title: "Hypertension Follow-up",
    type: "Läkaranteckning",
    category: "Clinical",
    date: "2024-04-15",
    unit: "Kardiologiska kliniken",
    professional: "Läkare",
    abstract: "Patient with chronic hypertension, stable with current medication.",
    patient_id: 1001,
    content: "Detailed examination shows stable blood pressure."
  },
  {
    id: 2,
    title: "Diabetes Management",
    type: "Research Article",
    category: "Follow-up",
    date: "2024-04-10",
    unit: "Medicinkliniken",
    professional: "Specialistläkare",
    abstract: "Routine follow-up for diabetic patient, blood sugar well controlled.",
    patient_id: 1002,
    content: "Patient maintains good glucose control with current treatment."
  },
  {
    id: 3,
    title: "Appendectomy Follow-up",
    type: "Clinical Study",
    category: "Post-op",
    date: "2024-04-05",
    unit: "Kirurgen",
    professional: "Kirurg",
    abstract: "Post-surgical evaluation after appendectomy, wound healing well.",
    patient_id: 1003,
    content: "Patient recovering well with no signs of infection."
  },
  {
    id: 4,
    title: "Chest Pain Assessment",
    type: "Case Report",
    category: "Emergency",
    date: "2024-04-01",
    unit: "Kardiologiska kliniken",
    professional: "Läkare",
    abstract: "Patient presented with chest pain, ECG normal.",
    patient_id: 1004,
    content: "Detailed examination shows no acute cardiac issues."
  },
  {
    id: 5,
    title: "Stroke Rehabilitation",
    type: "Clinical Study",
    category: "Rehab",
    date: "2024-03-28",
    unit: "Neurologiska avdelningen",
    professional: "Specialistläkare",
    abstract: "Progress report on post-stroke rehabilitation therapy.",
    patient_id: 1005,
    content: "Patient shows gradual improvement in motor function of left side."
  },
  {
    id: 6,
    title: "Cancer Treatment Protocol",
    type: "Guidelines",
    category: "Oncology",
    date: "2024-03-25",
    unit: "Onkologiska kliniken",
    professional: "Specialistläkare",
    abstract: "Updated treatment protocol for breast cancer patients.",
    patient_id: 1006,
    content: "New regimen includes combination therapy with improved outcomes."
  },
  {
    id: 7,
    title: "Pneumonia Case Study",
    type: "Case Report",
    category: "Respiratory",
    date: "2024-03-20",
    unit: "Medicinkliniken",
    professional: "Läkare",
    abstract: "Severe pneumonia case with antibiotic resistance challenges.",
    patient_id: 1007,
    content: "Case demonstrates importance of culture-guided antibiotic selection."
  },
  {
    id: 8,
    title: "Hip Replacement Procedure",
    type: "Clinical Study",
    category: "Orthopedic",
    date: "2024-03-18",
    unit: "Kirurgen",
    professional: "Kirurg",
    abstract: "New minimally invasive approach for hip replacement surgery.",
    patient_id: 1008,
    content: "Technique resulted in faster recovery and reduced hospital stays."
  },
  {
    id: 9,
    title: "Cardiac Arrhythmia Management",
    type: "Läkaranteckning",
    category: "Cardiology",
    date: "2024-03-15",
    unit: "Kardiologiska kliniken",
    professional: "Specialistläkare",
    abstract: "Patient with recurrent atrial fibrillation requiring adjustment in treatment.",
    patient_id: 1009,
    content: "Increased dose of beta-blocker with addition of anticoagulant therapy."
  },
  {
    id: 10,
    title: "Diabetes Screening Guidelines",
    type: "Guidelines",
    category: "Preventive",
    date: "2024-03-10",
    unit: "Medicinkliniken",
    professional: "Läkare",
    abstract: "Updated recommendations for diabetes screening in high-risk populations.",
    patient_id: 1010,
    content: "Earlier screening recommended for patients with family history and obesity."
  },
  {
    id: 11,
    title: "Migraine Treatment Review",
    type: "Research Article",
    category: "Neurology",
    date: "2024-03-05",
    unit: "Neurologiska avdelningen",
    professional: "Specialistläkare",
    abstract: "Comparative analysis of current migraine treatments and efficacy.",
    patient_id: 1011,
    content: "CGRP antagonists show promising results compared to traditional treatments."
  },
  {
    id: 12,
    title: "Knee Arthroscopy Results",
    type: "Läkaranteckning",
    category: "Post-op",
    date: "2024-03-01",
    unit: "Kirurgen",
    professional: "Kirurg",
    abstract: "Two-week follow-up after arthroscopic knee surgery.",
    patient_id: 1012,
    content: "Patient reports significant pain reduction and improved mobility."
  },
  {
    id: 13,
    title: "Chemotherapy Side Effect Management",
    type: "Guidelines",
    category: "Supportive Care",
    date: "2024-02-28",
    unit: "Onkologiska kliniken",
    professional: "Sjuksköterska",
    abstract: "Strategies for managing common chemotherapy side effects.",
    patient_id: 1013,
    content: "Proactive approach to nausea, fatigue, and neutropenia improves completion rates."
  },
  {
    id: 14,
    title: "Asthma Exacerbation Case",
    type: "Case Report",
    category: "Emergency",
    date: "2024-02-25",
    unit: "Medicinkliniken",
    professional: "Läkare",
    abstract: "Severe asthma exacerbation requiring intensive treatment.",
    patient_id: 1014,
    content: "Case highlights importance of early intervention and proper inhaler technique."
  },
  {
    id: 15,
    title: "Heart Failure Management",
    type: "Research Article",
    category: "Cardiology",
    date: "2024-02-20",
    unit: "Kardiologiska kliniken",
    professional: "Specialistläkare",
    abstract: "Novel approaches to managing chronic heart failure.",
    patient_id: 1015,
    content: "SGLT2 inhibitors show promising results in reducing hospitalizations."
  }
]; 