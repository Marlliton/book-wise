import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import { NextApiRequest, NextApiResponse } from "next/types";

import { prisma } from "@/lib/prisma";

export function buildNextAuth(
  req?: NextApiRequest,
  res?: NextApiResponse,
): NextAuthOptions {
  return {
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXT_AUTH_SECRET,
    providers: [
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
    },
  };
}

async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, buildNextAuth());
}

export { auth as GET, auth as POST };
