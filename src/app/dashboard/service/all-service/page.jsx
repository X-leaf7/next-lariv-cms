export const revalidate = 0; 
import DashboardMasterLayout from "@/layout/DashboardMasterLayout";
import ServiceTable from "@/childComponents/ServiceTable";


export default function Page() {
  return (
    <main>
      <DashboardMasterLayout>
        <ServiceTable />
      </DashboardMasterLayout>
    </main>
  );
}
