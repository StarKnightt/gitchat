"use client"

import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Github } from 'lucide-react'

export function LoginButton() {
  return (
    <Button onClick={() => signIn("github", { callbackUrl: "/" })}>
      <Github className="mr-2 h-4 w-4" />
      Sign in with GitHub
    </Button>
  )
}

