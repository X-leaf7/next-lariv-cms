export const revalidate = 0; 
import EditServiceComponent from "@/components/EditServiceComponent";
import DashboardMasterLayout from "@/layout/DashboardMasterLayout";
import { PrismaClient } from "@prisma/client";

export default async function Page({ params }) {
  let id = params.id;

  return (
    <main>
      <DashboardMasterLayout>
        <EditServiceComponent id={id} />
      </DashboardMasterLayout>
    </main>
  );
}
