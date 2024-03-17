export const revalidate = 0; 
import EditPortfolioComponent from "@/components/EditPortfolioComponent";
import DashboardMasterLayout from "@/layout/DashboardMasterLayout";
import { PrismaClient } from "@prisma/client";

export default async function Page({ params }) {
  let id = params.id;

  return (
    <main>
      <DashboardMasterLayout>
        <EditPortfolioComponent id={id} />
      </DashboardMasterLayout>
    </main>
  );
}
