export const revalidate = 0; 
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export async function POST(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let serviceID = searchParams.get("id");

    let reqBody = await req.json();
    let prisma = new PrismaClient();

    let result = await prisma.portfolio.update({
      where: { id: parseInt(serviceID) },
      data: reqBody,
    });


    return NextResponse.json({ status: true, data: result });
  } catch (e) {
    return NextResponse.json({ status: false, data: e.toString() });
  }
}