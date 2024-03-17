export const revalidate = 0; 
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    let prisma = new PrismaClient();
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    let result = await prisma.blog.findMany({
      where: { id: parseInt(id) },
      include: {
        comment: { where: { approve: true } },

        _count: {
          select: { comment: true },
        },
      },
    });

    return NextResponse.json({ status: true, data: result });
  } catch (e) {
    return NextResponse.json({ status: false, data: e.toString() });
  }
}
