"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { Skeleton } from "@/components/Skeleton";
import { parseCookies } from "nookies";

export default function App() {
  const session = useSession();
  const { "bookwise:visitor": bookVisitor } = parseCookies();
  const router = useRouter();

  useEffect(() => {
    if (session.status === "unauthenticated" && !bookVisitor) {
      router.push("/auth");
    } else {
      router.push("/home");
    }
  }, [bookVisitor, router, session]);

  return <Skeleton />;
}
