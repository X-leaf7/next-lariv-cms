export const revalidate = 0; 
import HomeComponent from "@/components/HomeComponent";
import MasterLayout from "@/layout/MasterLayout";
import { PrismaClient } from "@prisma/client";
import Visitor from "@/childComponents/Visitor";

async function getData() {
  const prisma = new PrismaClient();
  let home_data = await prisma.home_page.findMany();
  let service_data = await prisma.service.findMany();

  return { home_data, service_data };
}

export default async function Home() {
  const data = await getData();

  return (
    <main>
      <MasterLayout>
        <HomeComponent data={data} />
        <Visitor />
      </MasterLayout>
    </main>
  );
}
