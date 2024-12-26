import { mockUsers } from "@/lib/data"
import { UserCard } from "@/components/user-card"

export default function HomePage() {
  return (
    <div className="container py-6">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Welcome to GitChat</h1>
          <p className="text-muted-foreground">
            Connect with developers and start chatting!
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Recommended Friends</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

