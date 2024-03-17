export const revalidate = 0; 
import ServiceComponent from "@/components/ServiceComponent";
import MasterLayout from "@/layout/MasterLayout";
import { PrismaClient } from "@prisma/client";

async function getData() {
  const prisma = new PrismaClient();
  let service_page_data = await prisma.service_page.findMany();
  let service_data = await prisma.service.findMany();
  let review_data = await prisma.review.findMany();

  return {
    service_page_data,
    service_data,
    review_data,
  };
}

export default async function Service() {
  const data = await getData();
  return (
    <main>
      <MasterLayout>
        <ServiceComponent data={data} />
      </MasterLayout>
    </main>
  );
}
