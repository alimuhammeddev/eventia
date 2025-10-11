import { NextRequest, NextResponse } from "next/server";
// Import your database client here, e.g., Prisma
import { prisma } from "@/lib/prisma"; // adjust path

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    // Example using Prisma
    await prisma.event.delete({
      where: { id: Number(id) }, // adjust if id is string
    });

    return NextResponse.json({ message: "Event deleted" }, { status: 200 });
  } catch (error) {
    console.error("Delete event error:", error);
    return NextResponse.json({ error: "Failed to delete event" }, { status: 500 });
  }
}