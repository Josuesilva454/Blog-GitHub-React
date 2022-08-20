import { FaGithub,FaBuilding, FaExternalLinkAlt, FaUserFriends } from 'react-icons/fa';
import { Layout } from "./Layout";
import { UserCardContainer, UserCardContent, UserCardInfo, UserCardNameContainer } from "./style";


export function UserCard () {

    return(
        <UserCardContainer>
       <Layout>
         
         <img src="https://github.com/Josuesilva454.png"  alt="Josue Silva" />
        <UserCardContent>
            <UserCardNameContainer>
                <h3>Josué Silva</h3>

                <a href="http://github.com/Josuesilva454" target="_blank" rel="noopener noreferrer">GitHub
                <FaExternalLinkAlt color='#3294F8' size= "12px"/></a>
            </UserCardNameContainer>
            <p>Meu nome e Josué tenho 25 anos estou em busca de novos desafio, tenho conhecimento lógica de programação, SCRUM, DEVOPS, 
                java Script, php, java, python, c#, html, Css, github, excel, word, Introdução de rede, mysql, sqlserver, modelagem UML, metodologias ágeis.</p>

                <UserCardInfo>
                    <span>
                        <FaGithub size= "18px" color="#3A536B"></FaGithub>

                        Josué Silva Rosa
                    </span>
                </UserCardInfo>
        </UserCardContent>
        </Layout>
        </UserCardContainer>
 

    )
}