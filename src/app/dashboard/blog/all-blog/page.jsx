export const revalidate = 0; 
import DashboardMasterLayout from "@/layout/DashboardMasterLayout";
import BlogTable from "@/childComponents/BlogTable";


export default function Page() {
  return (
    <main>
      <DashboardMasterLayout>
        <BlogTable />
      </DashboardMasterLayout>
    </main>
  );
}
