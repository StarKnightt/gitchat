import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"

export default async function RootPage() {
  const session = await getServerSession()

  if (!session) {
    redirect("/login")
  }
  redirect("/home")
}