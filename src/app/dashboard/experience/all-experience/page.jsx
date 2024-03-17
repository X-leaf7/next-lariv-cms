export const revalidate = 0; 
import DashboardMasterLayout from "@/layout/DashboardMasterLayout";
import ExperienceTable from "@/childComponents/ExperienceTable";

export default function Page() {
  return (
    <main>
      <DashboardMasterLayout>
        <ExperienceTable />
      </DashboardMasterLayout>
    </main>
  );
}
