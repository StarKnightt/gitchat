import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "./api/auth/[...nextauth]/route"

export default async function RootPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  redirect("/home")
}

