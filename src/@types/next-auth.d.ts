import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface User {
    id: string;
    name: string;
    email: string;
    avatar_url: string;
  }
}
