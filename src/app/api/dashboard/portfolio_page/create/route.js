export const revalidate = 0; 
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export async function POST(req, res) {
  try {

    let prisma = new PrismaClient();
    let result = await prisma.portfolio_page.create({
      data: { id: 1 },
    });
    return NextResponse.json({ status: true, data: result });
  } catch (e) {
    return NextResponse.json({ status: false, data: e.toString() });
  }
}