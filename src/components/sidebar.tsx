"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, Users, MessageCircle } from 'lucide-react'

export function Sidebar() {
  const pathname = usePathname()
  
  const routes = [
    {
      href: "/home",
      label: "Home",
      icon: Home
    },
    {
      href: "/chat",
      label: "Chat",
      icon: MessageCircle
    },
    {
      href: "/friends",
      label: "Friends",
      icon: Users
    }
  ]

  return (
    <aside className="w-64 border-r bg-muted p-4">
      <nav className="space-y-2">
        {routes.map((route) => {
          const Icon = route.icon
          return (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center gap-x-2 px-3 py-2 text-sm rounded-lg hover:bg-accent",
                pathname === route.href && "bg-accent"
              )}
            >
              <Icon className="h-4 w-4" />
              {route.label}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}

