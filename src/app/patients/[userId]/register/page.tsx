import Image from "next/image";
import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "../../../../../lib/actions/patient.actions";
import LogoIcon from "@/public/assets/icons/logo-full.svg"
import RegisterImg from "@/public/assets/images/register-img.png"

async function Register({ params }: SearchParamProps) {
  const { userId } = await params;

  const user = await getUser(userId);
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="w-full max-w-[860px] flex flex-col py-10">
          <Image
            src={LogoIcon}
            width={1000}
            height={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          <RegisterForm user={user} />

          <p className="copyright pt-8">© 2025 CarePulse</p>
        </div>
      </section>

      <Image
        src={RegisterImg}
        width={1000}
        height={1000}
        alt="register"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}

export default Register;