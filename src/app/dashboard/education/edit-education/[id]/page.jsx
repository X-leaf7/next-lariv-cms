export const revalidate = 0; 
import EditEducationComponent from "@/components/EditEducationComponent";
import DashboardMasterLayout from "@/layout/DashboardMasterLayout";


export default async function Page({ params }) {
  let id = params.id;

  return (
    <main>
      <DashboardMasterLayout>
        <EditEducationComponent id={id} />
      </DashboardMasterLayout>
    </main>
  );
}
