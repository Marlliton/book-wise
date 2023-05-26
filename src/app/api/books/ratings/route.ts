import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

async function ratings() {
  const ratings = await prisma.rating.findMany({ include: { user: true, book: true } });

  return NextResponse.json(ratings);
}

export { ratings as GET };
