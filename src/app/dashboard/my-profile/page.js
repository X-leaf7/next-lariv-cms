export const revalidate = 0; 
import MyProfile from "@/components/MyProfile";
import DashboardMasterLayout from "@/layout/DashboardMasterLayout";
import { PrismaClient } from "@prisma/client";

async function getData() {
  const prisma = new PrismaClient();
  let res = await prisma.profile.findUnique({
    where: { id: 1 },
  })
  return res
}

export default async function Page() {
  const data = await getData()
  return (
    <main>
      <DashboardMasterLayout>
        <MyProfile data={data} />
      </DashboardMasterLayout>
    </main>
  );
}
