let md5 = require("md5");
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

import { CreateToken } from "@/utility/JWTTokenHelper";

export async function POST(req, res) {
  try {
    let reqBody = await req.json();
    let prisma = new PrismaClient();
    reqBody.password = md5(reqBody.password);

    let result = await prisma.profile.findMany({
      where: reqBody,
    });

    if (result.length === 0) {
      return NextResponse.json({ status: false, data: result });
    } else {
      let token = await CreateToken(result[0]["email"], result[0]["id"]);
      const expirationDate = new Date(Date.now() + 24 * 60 * 60 * 1000);
      const cookieString = `token=${token}; expires=${expirationDate.toUTCString()}; path=/`;
      return NextResponse.json(
        { status: true, data: token },
        { status: 200, headers: { "set-cookie": cookieString } }
      );
    }
  } catch (e) {
    return NextResponse.json({ status: false, data: e.toString() });
  }
}
