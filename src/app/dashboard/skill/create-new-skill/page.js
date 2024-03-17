export const revalidate = 0; 
import CreateNewSkillComponent from "@/components/CreateNewSkillComponent";
import DashboardMasterLayout from "@/layout/DashboardMasterLayout";


export default async function Page() {

  return (
    <main>
      <DashboardMasterLayout>
        <CreateNewSkillComponent />
      </DashboardMasterLayout>
    </main>
  );
}
