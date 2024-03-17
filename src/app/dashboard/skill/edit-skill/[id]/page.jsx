export const revalidate = 0; 
import EditSkillComponent from "@/components/EditSkillComponent";
import DashboardMasterLayout from "@/layout/DashboardMasterLayout";


export default async function Page({ params }) {
  let id = params.id;

  return (
    <main>
      <DashboardMasterLayout>
        <EditSkillComponent id={id} />
      </DashboardMasterLayout>
    </main>
  );
}
