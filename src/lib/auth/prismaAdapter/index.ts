import { Adapter, AdapterUser } from "next-auth/adapters";

import { prisma } from "@/lib/prisma";

export default function MyAdapter(): Adapter {
  return {
    async createUser(user): Promise<AdapterUser> {
      const prismaUser = await prisma.user.create({
        data: {
          name: user.name,
          email: user.email,
          avatar_url: user.avatar_url,
        },
      });

      const adaptedUser: AdapterUser = {
        id: prismaUser.id,
        name: prismaUser.name!,
        avatar_url: prismaUser.avatar_url!,
        email: prismaUser.email!,
        emailVerified: null,
      };

      return adaptedUser;
    },

    async getUser(id): Promise<AdapterUser | null> {
      const prismaUser = await prisma.user.findUnique({
        where: {
          id,
        },
      });

      if (!prismaUser) return null;

      const adaptedUser: AdapterUser = {
        id: prismaUser.id,
        name: prismaUser.name!,
        avatar_url: prismaUser.avatar_url!,
        email: prismaUser.email!,
        emailVerified: null,
      };

      return adaptedUser;
    },

    async getUserByEmail(email): Promise<AdapterUser | null> {
      const prismaUser = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (!prismaUser) return null;

      const adaptedUser: AdapterUser = {
        id: prismaUser.id,
        name: prismaUser.name!,
        avatar_url: prismaUser.avatar_url!,
        email: prismaUser.email!,
        emailVerified: null,
      };

      return adaptedUser;
    },

    async getUserByAccount({ providerAccountId, provider }): Promise<AdapterUser | null> {
      const account = await prisma.account.findUnique({
        where: {
          provider_provider_account_id: {
            provider,
            provider_account_id: providerAccountId,
          },
        },
        include: { user: true },
      });

      if (!account) return null;

      const adaptedUser: AdapterUser = {
        id: account.user.id,
        name: account.user.name!,
        avatar_url: account.user.avatar_url!,
        email: account.user.email!,
        emailVerified: null,
      };

      return adaptedUser;
    },

    async updateUser(user) {},

    async deleteUser(userId) {},

    async linkAccount(account) {},

    async unlinkAccount({ providerAccountId, provider }) {},

    async createSession({ sessionToken, userId, expires }) {},

    async getSessionAndUser(sessionToken) {},

    async updateSession({ sessionToken }) {},

    async deleteSession(sessionToken) {},

    async createVerificationToken({ identifier, expires, token }) {},

    async useVerificationToken({ identifier, token }) {},
  };
}
