"use client"
import { Toaster } from "@/components/ui/toaster"
import { useState } from "react"
import { User } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { UserPlus, Check } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"

interface UserCardProps {
  user: User
}

export function UserCard({ user }: UserCardProps) {
  const [requestSent, setRequestSent] = useState(false)
  const { toast } = useToast()

  const handleSendRequest = () => {
    setRequestSent(true)
    toast({
      title: "Friend request sent!",
      description: `A friend request has been sent to ${user.name}`,
    })
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="h-32 bg-gradient-to-r from-primary/10 via-primary/5 to-background" />
      </CardHeader>
      <CardContent className="p-6 -mt-12">
        <div className="flex flex-col items-center text-center space-y-3">
          <Avatar className="h-20 w-20 border-4 border-background">
            <AvatarImage src={user.image} alt={user.name} />
            <AvatarFallback>{user.name[0]}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h3 className="font-semibold text-lg">{user.name}</h3>
            <div className="flex items-center justify-center gap-2">
              <Badge variant="secondary" className="text-xs">
                @{user.username}
              </Badge>
            </div>
          </div>
          {user.bio && (
            <p className="text-sm text-muted-foreground">{user.bio}</p>
          )}
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Button
          className="w-full"
          variant={requestSent ? "secondary" : "default"}
          onClick={handleSendRequest}
          disabled={requestSent}
        >
          {requestSent ? (
            <>
              <Check className="h-4 w-4 mr-2" />
              Request Sent
            </>
          ) : (
            <>
              <UserPlus className="h-4 w-4 mr-2" />
              Add Friend
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}

