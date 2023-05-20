import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import { NextApiRequest, NextApiResponse } from "next/types";

export function buildNextAuth(
  req?: NextApiRequest,
  res?: NextApiResponse,
): NextAuthOptions {
  return {
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
            avatar_url: profile.picture,
            email: profile.email,
            name: profile.name,
            username: "",
          };
        },
      }),
    ],

    callbacks: {
      async signIn({ user }) {
        if (!user?.email) {
          return "/?error:login_error";
        }
        return true;
      },

      async session({ session, user }) {
        return { ...session, user };
      },
    },
  };
}

async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, buildNextAuth());
}

export { auth as GET, auth as POST };
