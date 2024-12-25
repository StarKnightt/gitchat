import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { LoginButton } from "@/components/login-button"
import { authOptions } from "../api/auth/[...nextauth]/route"

export default async function LoginPage() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect("/home")
  }

  return (
    <div className="flex min-h-screen bg-background overflow-hidden">
      {/* Left Section */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        {/* Animated dots background */}
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:16px_16px] [mask-image:radial-gradient(white,transparent_85%)]" />
        
        {/* Gradient orb effect */}
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/30 blur-[100px]" />
        <div className="absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-primary/30 blur-[100px]" />
        
        <div className="relative z-10 p-12 text-foreground flex flex-col justify-center w-full max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Connect & Chat with Developers
          </h2>
          <ul className="space-y-6 text-lg">
            <li className="flex items-center space-x-4 bg-primary/5 p-4 rounded-lg backdrop-blur-sm border border-primary/10">
              <span className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                ✓
              </span>
              <span>Real-time chat with GitHub users</span>
            </li>
            <li className="flex items-center space-x-4 bg-primary/5 p-4 rounded-lg backdrop-blur-sm border border-primary/10">
              <span className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                ✓
              </span>
              <span>Build your developer network</span>
            </li>
            <li className="flex items-center space-x-4 bg-primary/5 p-4 rounded-lg backdrop-blur-sm border border-primary/10">
              <span className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                ✓
              </span>
              <span>Share code snippets and ideas</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 relative">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-grid-black/[0.1] bg-[length:16px_16px] dark:bg-grid-white/[0.05]" />
        <div className="absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(transparent_30%,black)]" />
        
        <div className="relative flex items-center justify-center min-h-screen p-8">
          <div className="w-full max-w-md space-y-8 bg-background/50 p-8 rounded-2xl backdrop-blur-xl border border-border">
            <div className="text-center space-y-2">
              <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                Welcome to GitChat
              </h1>
              <p className="text-muted-foreground text-lg">
                Connect with GitHub users and chat in real-time
              </p>
            </div>

            <div className="space-y-4">
              <LoginButton />
              <p className="text-sm text-center text-muted-foreground">
                By signing in, you agree to our{" "}
                <a href="#" className="underline underline-offset-4 hover:text-primary">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="underline underline-offset-4 hover:text-primary">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

