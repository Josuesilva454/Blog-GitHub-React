import type { NextPage } from 'next'
import { Header } from '../src/components/Header'
import { UserCard } from '../src/components/UserCard'


const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <UserCard/>
    </div>
  )
}

export default Home
