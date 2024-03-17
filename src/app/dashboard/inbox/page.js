export const revalidate = 0; 
import InboxTable from "@/childComponents/InboxTable";

import DashboardMasterLayout from "@/layout/DashboardMasterLayout";


export default function Page() {
  return (
    <main>
      <DashboardMasterLayout>
        <InboxTable />
      </DashboardMasterLayout>
    </main>
  );
}
