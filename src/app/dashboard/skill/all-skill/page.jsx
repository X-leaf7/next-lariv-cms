export const revalidate = 0; 
import DashboardMasterLayout from "@/layout/DashboardMasterLayout";
import SkillTable from "@/childComponents/SkillTable";


export default function Page() {
  return (
    <main>
      <DashboardMasterLayout>
        <SkillTable />
      </DashboardMasterLayout>
    </main>
  );
}
