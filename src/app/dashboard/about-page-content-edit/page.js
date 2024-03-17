export const revalidate = 0; 
import AboutPageContentEditComponent from "@/components/AboutPageContentEditComponent";
import DashboardMasterLayout from "@/layout/DashboardMasterLayout";

import { PrismaClient } from "@prisma/client";

async function getData() {
  const prisma = new PrismaClient();
  let blogs = await prisma.about_page.findUnique({
    where: { id: 1 },
  });
  return blogs;
}

export default async function Page() {
  const data = await getData();
  return (
    <main>
      <DashboardMasterLayout>
        <AboutPageContentEditComponent data={data} />
      </DashboardMasterLayout>
    </main>
  );
}
