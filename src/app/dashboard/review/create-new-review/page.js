export const revalidate = 0; 
import CreateNewReviewComponent from "@/components/CreateNewReviewComponent";
import DashboardMasterLayout from "@/layout/DashboardMasterLayout";


export default async function Page() {

  return (
    <main>
      <DashboardMasterLayout>
        <CreateNewReviewComponent />
      </DashboardMasterLayout>
    </main>
  );
}
