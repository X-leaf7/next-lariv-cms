export const revalidate = 0; 
import CreateNewExperienceComponent from "@/components/CreateNewExperienceComponent";
import DashboardMasterLayout from "@/layout/DashboardMasterLayout";


export default async function Page() {

  return (
    <main>
      <DashboardMasterLayout>
        <CreateNewExperienceComponent />
      </DashboardMasterLayout>
    </main>
  );
}
