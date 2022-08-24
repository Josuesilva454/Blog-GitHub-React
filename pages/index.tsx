import axios from 'axios'
import { Stats } from 'fs'
import type { NextPage } from 'next'
import { Header } from '../src/components/Header'
import { UserCard } from '../src/components/UserCard'
const GITHUB_USERNAME = "Josuesilva454"

interface User {
  name: String,
  company: String,
  bio: String,
  follwers: number,
  url : String,
  login: String,
  avatar: String
}

interface HomeProps {
  user: User;
    
  }

export default function Home ({user }: HomeProps) {
  return (
    <div>
      <Header />
      <UserCard user ={user}/>
    </div>
  )
}

export async function getStaticProps () {
const {data} = await axios.get(`Https://api.github.com/users/${GITHUB_USERNAME}`)
    
  const user = {
    name: data.name,
    company: data.company,
    bio: data.bio,
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

