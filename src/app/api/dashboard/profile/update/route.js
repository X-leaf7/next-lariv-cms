export const revalidate = 0; 
let md5 = require('md5');
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export async function POST(req, res) {
  try {
    let reqBody = await req.json();
    let prisma = new PrismaClient();
    reqBody.password = md5(reqBody.password)
    let result = await prisma.profile.update({
      where: { id: 1 },
      data: reqBody,
    });

    return NextResponse.json({ status: true, data: result });
  } catch (e) {
    return NextResponse.json({ status: false, data: e.toString() });
  }
}