export const revalidate = 0; 
import DashboardMasterLayout from "@/layout/DashboardMasterLayout";
import EducationTable from "@/childComponents/EducationTable";


export default function Page() {
  return (
    <main>
      <DashboardMasterLayout>
        <EducationTable />
      </DashboardMasterLayout>
    </main>
  );
}
