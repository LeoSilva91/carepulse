import { DataTable } from "@/components/table/DataTable";
import Image from "next/image";
import Link from "next/link";
import { columns } from "@/components/table/columns";
import { Appointment } from "../../../types/appwrite.types";
import { StatCard } from "@/components/StatCard";
import { getRecentAppointmentList } from "../../../lib/actions/appoitment.actions";
import Logofull from "@/public/assets/icons/logo-full.svg"
import Appointments from "@/public/assets/icons/appointments.svg"
import Pending from "@/public/assets/icons/pending.svg"
import Cancelled from "@/public/assets/icons/cancelled.svg"

async function Admin() {
  const appointments = await getRecentAppointmentList();

  if (!appointments)
    throw new Error(
      "An error occured while trying to retrieve all appointments. Please try again"
    );
  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          <Image
            src={Logofull}
            width={162}
            height={32}
            alt="Logo"
            className="h-8 w-fit"
          />

          <p className="text-16-semibold">Admin Dashboard</p>
        </Link>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome 👋</h1>
          <p className="text-dark-700">
            Start the day with managing new appointments
          </p>
        </section>

        <section className="admin-stat">
          <StatCard
            type="appointments"
            count={appointments.scheduleCount}
            label="Scheduled appointments"
            icon={Appointments}
          />

          <StatCard
            type="pending"
            count={appointments.pendingCount}
            label="Pending appointments"
            icon={Pending}
          />

          <StatCard
            type="cancelled"
            count={appointments.canceledCount}
            label="Canceled appointments"
            icon={Cancelled}
          />
        </section>

        <DataTable
          columns={columns}
          data={appointments.documents as Appointment[]}
        />
      </main>
    </div>
  );
}

export default Admin;