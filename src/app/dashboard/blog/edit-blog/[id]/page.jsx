export const revalidate = 0; 
import EditBlogComponent from "@/components/EditBlogComponent";
import DashboardMasterLayout from "@/layout/DashboardMasterLayout";
import { PrismaClient } from "@prisma/client";

export default async function Page({ params }) {
  let id = params.id;

  return (
    <main>
      <DashboardMasterLayout>
        <EditBlogComponent id={id} />
      </DashboardMasterLayout>
    </main>
  );
}
