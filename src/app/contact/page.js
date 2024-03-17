export const revalidate = 0; 
import ContactComponent from "@/components/ContactComponent";
import MasterLayout from "@/layout/MasterLayout";
import { PrismaClient } from "@prisma/client";

async function getData() {
  const prisma = new PrismaClient();
  let contact_page_data = await prisma.contact_page.findMany();

  return { contact_page_data };
}

export default async function Page() {
  const data = await getData();
  return (
    <main>
      <MasterLayout>
        <ContactComponent data={data} />
      </MasterLayout>
    </main>
  );
}
