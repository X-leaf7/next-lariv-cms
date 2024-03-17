export const revalidate = 0; 
import DashboardMasterLayout from "@/layout/DashboardMasterLayout";
import ReviewTable from "@/childComponents/ReviewTable";


export default function Page() {
  return (
    <main>
      <DashboardMasterLayout>
        <ReviewTable />
      </DashboardMasterLayout>
    </main>
  );
}
