export const revalidate = 0; 
import EditReviewComponent from "@/components/EditReviewComponent";
import DashboardMasterLayout from "@/layout/DashboardMasterLayout";


export default async function Page({ params }) {
  let id = params.id;

  return (
    <main>
      <DashboardMasterLayout>
        <EditReviewComponent id={id} />
      </DashboardMasterLayout>
    </main>
  );
}
