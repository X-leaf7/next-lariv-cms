export const revalidate = 0; 
import BlogComponent from "@/components/BlogComponent";
import MasterLayout from "@/layout/MasterLayout";
import { PrismaClient } from "@prisma/client";

async function getData() {
  const prisma = new PrismaClient();
  let blog_page_data = await prisma.blog_page.findMany();
  return { blog_page_data };
}

export default async function Page({ params }) {
  let page = await params.page;
  const data = await getData();

  return (
    <main>
      <MasterLayout>
        <BlogComponent page={page} data={data} />
      </MasterLayout>
    </main>
  );
}
