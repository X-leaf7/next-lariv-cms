export const revalidate = 0; 
import CreateNewBlogComponent from "@/components/CreateNewBlogComponent";
import DashboardMasterLayout from "@/layout/DashboardMasterLayout";

export default async function Page() {
  return (
    <main>
      <DashboardMasterLayout>
        <CreateNewBlogComponent />
      </DashboardMasterLayout>
    </main>
  );
}
