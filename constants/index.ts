import ScheduledIcon from '../src/public/assets/icons/check.svg'
export const GenderOptions = ["male", "female", "other"];
import Green from "@/public/assets/images/dr-green.png"
import Cameron from "@/public/assets/images/dr-cameron.png"
import Livingston from "@/public/assets/images/dr-livingston.png"
import Peter from "@/public/assets/images/dr-peter.png"
import Powell from "@/public/assets/images/dr-powell.png"
import Ramirez from "@/public/assets/images/dr-remirez.png"
import Lee from "@/public/assets/images/dr-lee.png"
import Cruz from "@/public/assets/images/dr-cruz.png"
import Sharma from "@/public/assets/images/dr-sharma.png"
export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: Green,
    name: "John Green",
  },
  {
    image: Cameron,
    name: "Leila Cameron",
  },
  {
    image: Livingston,
    name: "David Livingston",
  },
  {
    image: Peter,
    name: "Evan Peter",
  },
  {
    image: Powell,
    name: "Jane Powell",
  },
  {
    image: Ramirez,
    name: "Alex Ramirez",
  },
  {
    image: Lee,
    name: "Jasmine Lee",
  },
  {
    image: Cruz,
    name: "Alyana Cruz",
  },
  {
    image: Sharma,
    name: "Hardik Sharma",
  },
];

export const StatusIcon = {
  scheduled: ScheduledIcon,
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};