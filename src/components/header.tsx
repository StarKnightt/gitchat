"use client"

import { useSession, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Header() {
  const { data: session } = useSession()

  return (
    <header className="border-b">
      <div className="flex items-center justify-between px-6 py-3">
        <h1 className="text-2xl font-bold">GitChat</h1>
        {session?.user && (
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={session.user.image || undefined} />
              <AvatarFallback>{session.user.name?.[0]}</AvatarFallback>
            </Avatar>
            <span>{session.user.name}</span>
            <Button 
              variant="outline" 
              onClick={() => signOut({ callbackUrl: "/login" })}
            >
              Sign out
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}

