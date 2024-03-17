export const revalidate = 0; 
import DashboardMasterLayout from "@/layout/DashboardMasterLayout";
import CommentTable from "@/childComponents/CommentTable";


export default function Page() {
  return (
    <main>
      <DashboardMasterLayout>
        <CommentTable />
      </DashboardMasterLayout>
    </main>
  );
}
