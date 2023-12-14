import './App.css'
import TwitterFollowCard from './TwitterFollowCard'

const users = [
  {
    userName: "alcaldeap95",
    name: "Jorge Alcalde Piñeiro",
    initialIsFollowing: false
  },
  {
    userName: "dokkan_global",
    name: "Dragon Ball Z Dokkan Battle",
    initialIsFollowing: false
  },
  {
    userName: "midudev",
    name: "Miguel Ángel Durán",
    initialIsFollowing: false
  },
]

function App() {

  return (

    <section className='App'>
      {
        users.map((user) => {
          const { userName, name, initialIsFollowing } = user

          return (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              initialIsFollowing={initialIsFollowing}
            >
              {name}
            </TwitterFollowCard>
          )
        }
        )
      }


    </section>

  )
}

export default App
