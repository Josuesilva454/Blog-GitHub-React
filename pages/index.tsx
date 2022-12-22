import axios from 'axios'
import { Stats } from 'fs'
import type { NextPage } from 'next'
import { Header } from '../src/components/Header'
import { UserCard } from '../src/components/UserCard'
const GITHUB_USERNAME = "Josuesilva454"

interface User {
  name: string,
  company: string,
  bio: string,
  follwers: number,
  url : string,
  login: string,
  avatar: string
}

interface HomeProps {
  user: User;
    
  }

export default function Home ({user }: HomeProps) {
  return (
    <div>
      <Header />
      <UserCard user = {user}/>
    </div>
  )
}

export async function getStaticProps () {
const {data} = await axios.get(`Https://api.github.com/users/${GITHUB_USERNAME}`)
    
  const user = {
    name: data.name,
    bio: data.bio,
    company: data.company,
    follwers: data.followers,
    url : data.html_url,
    avatar: data.avatar_url,
    login: data.login,
   
  }
  return {
    props: {
      user

    }
  }
}

