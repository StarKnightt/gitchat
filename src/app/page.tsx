import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"

export default async function Home() {
  const session = await getServerSession()

  if (!session) {
    redirect("/login")
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome to GitChat</h1>
      <p>Start chatting with your GitHub friends!</p>
    </div>
  )
}

