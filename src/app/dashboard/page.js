export const revalidate = 0; 
import HomeDashboardComponent from "@/components/HomeDashboardComponent";
import DashboardMasterLayout from "@/layout/DashboardMasterLayout";
import { PrismaClient } from "@prisma/client";

async function getData() {
  const prisma = new PrismaClient();
  let all_blog = await prisma.blog.findMany({
    orderBy: { createAt: "desc" },
    select: {
      id: true,
      title: true,
      createAt: true,
      updateAt: true,
    },
  });
  let all_comment = await prisma.comment.findMany({
    orderBy: { createAt: "desc" },
    select: {
      id: true,
      name: true,
      createAt: true,
      updateAt: true,
    },
  });
  let all_message = await prisma.message.findMany({
    orderBy: { createAt: "desc" },
    select: {
      id: true,
      email: true,
      createAt: true,
      updateAt: true,
    },
  });
  let all_portfolio = await prisma.portfolio.findMany({
    orderBy: { createAt: "desc" },
    select: {
      id: true,
      title: true,
      createAt: true,
      updateAt: true,
    },
  });

  let visitor_data = await prisma.visitor_data.count();

  return { all_blog, all_comment, all_message, all_portfolio, visitor_data };
}

export default async function Page() {
  const all_data = await getData();
  return (
    <main>
      <DashboardMasterLayout>
        <HomeDashboardComponent all_data={all_data} />
      </DashboardMasterLayout>
    </main>
  );
}
