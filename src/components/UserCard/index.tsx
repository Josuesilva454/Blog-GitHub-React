import { FaGithub,FaBuilding, FaExternalLinkAlt, FaUserFriends } from 'react-icons/fa';
import { Layout } from "./Layout";
import { UserCardContainer, UserCardContent, UserCardInfo, UserCardNameContainer } from "./style";

interface User {
    name: String,
    company: String,
    bio: String,
    follwers: number,
    url : String,
    login: String,
    avatar: String,
  }
  
  interface UserCardProps {
    user: User;
      
    }
export function UserCard ({user}: UserCardProps) {
   console.log(user);
    return(
        
       <Layout>
         <UserCardContainer>
         <img src= {user.avatar}  alt={user.name} />
        <UserCardContent>
            <UserCardNameContainer>
                <h3>{user.name}</h3>

                <a href={user.url} target="_blank" rel="noopener noreferrer">GitHub
                <FaExternalLinkAlt color='#3294F8' size= "12px"/></a>
            </UserCardNameContainer>
            <p>{user.bio}</p>

                <UserCardInfo>
                    <span>
                        <FaGithub size= "18px" color="#3A536B"></FaGithub>

                       {user.login}
                    </span>
                    <span>
                        <FaBuilding size= "18px" color="#3A536B"/>

                        {user.company}
                    </span>
                    <span>
                        <FaUserFriends size= "18px" color="#3A536B"/>

                        {user.follwers}
                    </span>
                </UserCardInfo>
        </UserCardContent>
        </UserCardContainer>
        </Layout>
       
 

    )
}