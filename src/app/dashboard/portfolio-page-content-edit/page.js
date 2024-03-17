export const revalidate = 0; 
import PortfolioPageContentEditComponent from "@/components/PortfolioPageContentEditComponent";
import DashboardMasterLayout from "@/layout/DashboardMasterLayout";
import { PrismaClient } from "@prisma/client";

async function getData() {
  const prisma = new PrismaClient();
  let res = await prisma.portfolio_page.findUnique({
    where: { id: 1 },
  })
  return res
}

export default async function Page() {
  const data = await getData()
  return (
    <main>
      <DashboardMasterLayout>
        <PortfolioPageContentEditComponent data={data} />
      </DashboardMasterLayout>
    </main>
  );
}
