import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async session({ session, token }: { session: any, token: any }) {
      return session
    },
    async jwt({ token, user, account, profile, trigger, isNewUser, session }: { token: any, user: any, account: any, profile?: any, trigger?: string, isNewUser?: boolean, session?: any }) {
      return token
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

