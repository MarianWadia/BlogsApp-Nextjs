import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import prisma from "./db";


// console.log(process.env.GOOGLE_ID, process.env.GOOGLE_SECRET)
export const authOptions = {
    adapter: PrismaAdapter(prisma), 
    providers: [
        GoogleProvider({
        clientId: process.env.GOOGLE_ID!,
        clientSecret: process.env.GOOGLE_SECRET!,
      }),
      // ...add more providers here
    ],
    jwt: {
      secret: process.env.NEXTAUTH_SECRET!,
    }
  }
  