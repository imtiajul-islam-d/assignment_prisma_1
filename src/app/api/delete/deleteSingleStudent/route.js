import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function DELETE(req, res) {
  try {
    const prisma = new PrismaClient();
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get("id"));
    const result = await prisma.users.delete({
      where: { id: id },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "failed", data: [] });
  }
}
