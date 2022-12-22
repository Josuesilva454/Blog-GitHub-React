import { FaGithub,FaBuilding, FaExternalLinkAlt, FaUserFriends } from 'react-icons/fa';
import { Layout } from "./Layout";
import { UserCardContainer, UserCardContent, UserCardInfo, UserCardNameContainer } from "./style";

interface User {
    name: string,
    company: string,
    bio: string,
    follwers: number,
    url : string,
    login: String,
    avatar: string,
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
                        <FaUserFriends size= "18px" color="#3A536B"/>

                        {user.follwers}
                    </span>
                   
                </UserCardInfo>
                <div className='container'> 
                <span>
                        <FaBuilding size= "18px" height= "150" color="#3A536B"/>
                        {user.company}
                       <a> Meu nome e Josué tenho 25 anos, só uma pessoal comunicativa, calmo, tranquilo, amo trabalhar em equipe, sou apaixonado com a tecnologia. Também gosto de passa meus conhecimento e ensinar, não trabalho na área, estou em busca de uma oportunidade pode ser a função desenvolvimento ou suporte, possui conhecimento laravel, spring boot, java script, c#, java, python, Reactjs, kanban, docker, git, Jira, mvc, um pouco de conhecimento Redes e linux. </a>                    </span>
                       </div>
                      
                      
        </UserCardContent>
        
        </UserCardContainer>
        </Layout>
       
 

    )
}