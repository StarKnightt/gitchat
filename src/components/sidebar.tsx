export function Sidebar() {
    return (
      <aside className="w-64 border-r bg-muted p-4">
        <nav>
          <ul className="space-y-2">
            <li>
              <a href="/" className="block p-2 rounded hover:bg-accent">Home</a>
            </li>
            <li>
              <a href="/chat" className="block p-2 rounded hover:bg-accent">Chat</a>
            </li>
            <li>
              <a href="/friends" className="block p-2 rounded hover:bg-accent">Friends</a>
            </li>
          </ul>
        </nav>
      </aside>
    )
  }
  
  