export const revalidate = 0; 
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    let prisma = new PrismaClient();
    const url = new URL(req.url);

    let page = url.searchParams.get("page");

    const pageSize = 6; // Number of posts per page
    // let page = 1; // Current page (you can get this dynamically from the request)
    const skip = (page - 1) * pageSize;

    let blog = await prisma.blog.findMany({
      take: pageSize,
      skip,
      select: {
        id: true,
        title: true,
        keywords: true,
        short_des: true,
        img: true,
        createAt: true,
        updateAt: true,
        comment: {
          where: {
            approve: true,
          },
        },
      },
      orderBy: { createAt: "desc" }
    });

    // Get total count of blog posts
    let totalBlogCount = await prisma.blog.count();

    return NextResponse.json({ status: true, data: { blog, totalBlogCount } });
  } catch (e) {
    return NextResponse.json({ status: false, data: e.toString() });
  }
}
