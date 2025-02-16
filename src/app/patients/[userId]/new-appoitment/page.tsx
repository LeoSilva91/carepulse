import Image from "next/image";

import LogoIcon from "@/public/assets/icons/logo-full.svg"
import AppointmentImg from "@/public/assets/images/appointment-img.png"
import { AppointmentForm } from "@/components/forms/AppoitmentForm";
import { getPatient } from "../../../../../lib/actions/patient.actions";

async function NewAppointment({ params }: SearchParamProps) {
  const { userId } = await params;
  const patient = await getPatient(userId);

  return (
    patient && (
      <div className="flex h-screen max-h-screen">
        <section className="remove-scrollbar container my-auto">
          <div className="sub-container max-w-[860px] flex-1 justify-between">
            <Image
              src={LogoIcon}
              width={1000}
              height={1000}
              alt="patient"
              className="mb-12 h-10 w-fit"
            />

            <AppointmentForm
              type="create"
              userId={userId}
              patientId={patient.$id}
            />
            <p className="copytight mt-10 py-12">© 2025 CarePulse</p>
          </div>
        </section>

        <Image
          src={AppointmentImg}
          width={1000}
          height={1000}
          alt="patient"
          className="side-img max-w-[50%] bg-bottom"
        />
      </div>
    )
  );
}

export default NewAppointment;