export const revalidate = 0; 
import ServicePageContentEditComponent from "@/components/ServicePageContentEditComponent";
import DashboardMasterLayout from "@/layout/DashboardMasterLayout";
import { PrismaClient } from "@prisma/client";

async function getData() {
  const prisma = new PrismaClient();
  let res = await prisma.service_page.findUnique({
    where: { id: 1 },
  });
  return res;
}

export default async function Page() {
  const data = await getData();
  return (
    <main>
      <DashboardMasterLayout>
        <ServicePageContentEditComponent data={data} />
      </DashboardMasterLayout>
    </main>
  );
}
