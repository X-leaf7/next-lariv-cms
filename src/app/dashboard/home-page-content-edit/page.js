export const revalidate = 0; 
import HomePageContentEditComponent from "@/components/HomePageContentEditComponent";
import DashboardMasterLayout from "@/layout/DashboardMasterLayout";
import { PrismaClient } from "@prisma/client";

async function getData() {
  const prisma = new PrismaClient();
  let res = await prisma.home_page.findUnique({
    where: { id: 1 },
  })
  return res
}

export default async function Page() {
  const data = await getData()
  return (
    <main>
      <DashboardMasterLayout>
        <HomePageContentEditComponent data={data} />
      </DashboardMasterLayout>
    </main>
  );
}
