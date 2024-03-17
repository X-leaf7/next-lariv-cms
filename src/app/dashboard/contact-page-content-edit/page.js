export const revalidate = 0; 
import ContactPageContentEditComponent from "@/components/ContactPageContentEditComponent";
import DashboardMasterLayout from "@/layout/DashboardMasterLayout";
import { PrismaClient } from "@prisma/client";

async function getData() {
  const prisma = new PrismaClient();
  let res = await prisma.contact_page.findUnique({
    where: { id: 1 },
  })
  return res
}


export default async function Page() {
  const data = await getData()
  return (
    <main>
      <DashboardMasterLayout>
        <ContactPageContentEditComponent data={data} />
      </DashboardMasterLayout>
    </main>
  );
}
