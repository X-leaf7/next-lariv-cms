export const revalidate = 0; 
import CreateNewServiceComponent from "@/components/CreateNewServiceComponent";
import DashboardMasterLayout from "@/layout/DashboardMasterLayout";


export default async function Page() {

  return (
    <main>
      <DashboardMasterLayout>
        <CreateNewServiceComponent />
      </DashboardMasterLayout>
    </main>
  );
}
