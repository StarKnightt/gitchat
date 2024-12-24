import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { LoginButton } from "@/components/login-button"

export default async function LoginPage() {
  const session = await getServerSession()

  if (session) {
    redirect("/")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to GitChat</h1>
        <p className="text-xl mb-8">Connect with GitHub users and chat in real-time</p>
        <LoginButton />
      </div>
    </div>
  )
}

