export const revalidate = 0; 
import EditExperienceComponent from "@/components/EditExperienceComponent";
import DashboardMasterLayout from "@/layout/DashboardMasterLayout";


export default async function Page({ params }) {
  let id = params.id;

  return (
    <main>
      <DashboardMasterLayout>
        <EditExperienceComponent id={id} />
      </DashboardMasterLayout>
    </main>
  );
}
