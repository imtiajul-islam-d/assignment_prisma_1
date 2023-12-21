import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const prisma = new PrismaClient();
    const bodyContent = await req.json();
    const student = {
      first_name: bodyContent?.first_name,
      last_name: bodyContent?.last_name,
      age: bodyContent?.age,
      grade: bodyContent?.grade,
    };
    const result = await prisma.users.create({
      data: student,
    });
    return NextResponse.json({ msg: "success", data: result });
  } catch (error) {
    return NextResponse.json({ msg: "failed", data: error });
  }
}
