export interface User {
    id: string
    name: string
    email: string
    image: string
    username: string
    bio?: string
    createdAt: Date
  }
  
  export interface FriendRequest {
    id: string
    senderId: string
    receiverId: string
    status: 'pending' | 'accepted' | 'rejected'
    createdAt: Date
  }
  
  