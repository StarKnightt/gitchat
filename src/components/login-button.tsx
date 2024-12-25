"use client"

import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Github } from 'lucide-react'

export function LoginButton() {
  return (
    <Button 
      onClick={() => signIn("github", { callbackUrl: "/" })}
      size="lg"
      className="w-full relative group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary opacity-0 group-hover:opacity-10 transition-opacity" />
      <Github className="mr-2 h-5 w-5" />
      Sign in with GitHub
    </Button>
  )
}

