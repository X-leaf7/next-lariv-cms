export const revalidate = 0; 
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export async function DELETE(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let ID = searchParams.get("id");

    let prisma = new PrismaClient();

    let result = await prisma.comment.delete({
      where: { id: parseInt(ID) },
    });

    return NextResponse.json({ status: true, data: result });
  } catch (e) {
    return NextResponse.json({ status: false, data: e.toString() });
  }
}
