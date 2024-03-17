export const revalidate = 0; 
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export async function GET(req, res) {
  try {
    let prisma = new PrismaClient();

    let result = await prisma.blog.findMany({

      select: {
        id: true,
        title: true,
        keywords: true,
        short_des: true,
        img: true,
        createAt: true,
        updateAt: true,
        comment: {
          select: {
            id: true
          }
        },
      }
    });

    return NextResponse.json({ status: true, data: result });
  } catch (e) {
    return NextResponse.json({ status: false, data: e.toString() });
  }
}


