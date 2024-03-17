export const revalidate = 0; 
import BlogDetailsComponent from "@/components/BlogDetailsComponent";
import MasterLayout from "@/layout/MasterLayout";
import { PrismaClient } from "@prisma/client";

async function getData(id) {
  const prisma = new PrismaClient();
  let blog_data = await prisma.blog.findMany({
    where: { id: parseInt(id) },
    select: {
      id: true,
      title: true,
      keywords: true,
      short_des: true,
      long_des: true,
      img: true,
      createAt: true,
      updateAt: true,
      comment: {
        where: {
          approve: true,
        },
      },
    },
  });
  blog_data = blog_data[0];
  return { blog_data };
}

export default async function Page(props) {
  let id = await props.searchParams["id"];
  const data = await getData(id);

  return (
    <main>
      <MasterLayout>
        <BlogDetailsComponent data={data} />
      </MasterLayout>
    </main>
  );
}
