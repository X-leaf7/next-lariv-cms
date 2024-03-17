export const revalidate = 0; 
import CreateNewPortfolioComponent from "@/components/CreateNewPortfolioComponent";
import DashboardMasterLayout from "@/layout/DashboardMasterLayout";


export default async function Page() {

  return (
    <main>
      <DashboardMasterLayout>
        <CreateNewPortfolioComponent />
      </DashboardMasterLayout>
    </main>
  );
}
