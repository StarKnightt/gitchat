export const mockUsers = [
    {
      id: '1',
      name: 'Dan Abramov',
      email: 'dan@example.com',
      image: 'https://avatars.githubusercontent.com/u/810438?v=4',
      username: 'gaearon',
      bio: 'Working on React',
      createdAt: new Date(),
    },
    {
      id: '2',
      name: 'Ryan Florence',
      email: 'ryan@example.com',
      image: 'https://avatars.githubusercontent.com/u/100200?v=4',
      username: 'ryanflorence',
      bio: 'Making React accessible',
      createdAt: new Date(),
    },
    {
      id: '3',
      name: 'Kent C. Dodds',
      email: 'kent@example.com',
      image: 'https://avatars.githubusercontent.com/u/1500684?v=4',
      username: 'kentcdodds',
      bio: 'Teaching React',
      createdAt: new Date(),
    },
  ] as const
  
  type FriendRequest = {
    id: string;
    fromUserId: string;
    toUserId: string;
    status: 'pending' | 'accepted' | 'rejected';
    createdAt: Date;
  };
  
  export const mockFriendRequests: FriendRequest[] = []
  
  