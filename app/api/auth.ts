import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";
import type { NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth";

// import NextAuth from "next-auth";
import Email from "next-auth/providers/email";
import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// import this into `NextAuth` in 
// `app/api/auth/[...nextauth]/route.ts
export const authOptions: NextAuthOptions = {
  // TODO replace token in db with prisma on each successful sign in
  // TODO set lifetime for token
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: "Username", type: "text", placeholder: 'jDoe' },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials:any, req) {
        console.log(credentials);
        console.log(req);

        return null;
      }
    }),
    Email({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM
    }),
    // GoogleProvider({
    //   clientId: 'testing',
    //   clientSecret: '1234'
    // })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log('user => ', user);
      console.log('account => ', account);
      console.log('profile => ', profile);
      console.log('email => ', email);
      console.log('credentials => ', credentials);
      
      const foundUser = await prisma.user.findUnique({
        where: {
          email: `${user.email}`
        }
      })
      console.log('foundUser => ', foundUser);  
      if (foundUser) {
        return true;
      } else {
        return "/register";
      }
    },
    async jwt({ token, account }) {
      console.log('token => ', token);
      console.log('account => ', account);

      if (account) {
        token.accessToken = account.access_token
      }
      return token;
    },
    async session({ session, token, user }) {
      console.log('user => ', user);
      console.log('token => ', token);
      console.log('session => ', session);

      // session.accessToken = token.accessToken;
      // session.user.id = token.id;

      return session;
    }
  },
  events: {
    async signIn(message:any) { console.log(message) }
  },
  debug: true,
  theme: {
    buttonText: '#FFCC00',
    
  }
} satisfies NextAuthOptions

export function auth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
  return getServerSession(...args, authOptions) 
}