import NextAuth, { NextAuthOptions } from "next-auth";
import GitHubProvider, { GithubProfile } from "next-auth/providers/github";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import { NextApiRequest, NextApiResponse } from "next/types";

import { PrismaAdapter } from "@/lib/auth/prismaAdapter";

export function buildNextAuth(
  req?: NextApiRequest,
  res?: NextApiResponse,
): NextAuthOptions {
  return {
    adapter: PrismaAdapter(),
    secret: process.env.NEXT_AUTH_SECRET,
    providers: [
      GitHubProvider({
        clientId: process.env.CLIENT_ID ?? "",
        clientSecret: process.env.CLIENT_SECRET ?? "",
        profile(profile: GithubProfile) {
          console.log("🚀 ~ file: route.ts:20 ~ profile ~ profile:", profile);
          return {
            id: String(profile.id),
            name: profile.name!,
            email: profile?.email ?? profile.blog,
            avatar_url: profile.avatar_url,
          };
        },
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID ?? "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET_KEY ?? "",
        authorization: {
          params: {
            prompt: "consent",
            access_type: "offline",
            response_type: "code",
          },
        },
        profile(profile: GoogleProfile) {
          return {
            id: profile.sub,
            email: profile.email,
            name: profile.name,
            avatar_url: profile.picture,
          };
        },
      }),
    ],

    callbacks: {
      session({ session, user }) {
        return { ...session, user };
      },
      async redirect({ url, baseUrl }) {
        return baseUrl;
      },
    },
  };
}

async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, buildNextAuth());
}

export { auth as GET, auth as POST };
