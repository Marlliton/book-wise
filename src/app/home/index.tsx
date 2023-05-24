"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { parseCookies } from "nookies";

export function Home() {
  const session = useSession();
  const { "bookwise:visitor": bookVisitor } = parseCookies();
  const router = useRouter();
  if (session.status === "unauthenticated" && !bookVisitor) {
    router.push("/auth");
  }

  return <div>home</div>;
}
