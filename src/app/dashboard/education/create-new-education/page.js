export const revalidate = 0; 
import CreateNewEducationComponent from "@/components/CreateNewEducationComponent";
import DashboardMasterLayout from "@/layout/DashboardMasterLayout";

export default async function Page() {
  return (
    <main>
      <DashboardMasterLayout>
        <CreateNewEducationComponent />
      </DashboardMasterLayout>
    </main>
  );
}
