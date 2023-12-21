import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function PATCH(req, res) {
  try {
    const prisma = new PrismaClient();
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get("id"));
    const reqBody = await req.json();
    const result = await prisma.users.update({
      where: { id: id },
      data: reqBody,
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "failed", data: [] });
  }
}
