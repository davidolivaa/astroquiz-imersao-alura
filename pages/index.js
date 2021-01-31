import React from 'react';
import styled from 'styled-components'
import { motion } from 'framer-motion';
import {useRouter} from 'next/router'

import db from '../db.json'
import Widget from '../src/components/Widget'
//import Link from '../src/components/Link';
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
//import GithubCorner from '../src/components/GithubCorner'
import Head from 'next/head'
import Input from '../src/components/Input'
import Button from '../src/components/Button'

// const backgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;


export default function Home() {
  const router = useRouter()
  const [name, setName] = React.useState(''); 


  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz - {db.title}</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@1,700&display=swap" rel="stylesheet"></link>
      </Head>
      <QuizContainer>
      <QuizLogo />
        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>

            <form onSubmit={function(infosDoEvento) {
              infosDoEvento.preventDefault()// impede a pagina de recarregar quando o formulario é submetido
              
              //const name = 'David'
              
              //const router = useRouter() // useRouter do next faz toda a parte de enviar os dados pra outra pagina
              
              router.push(`/quiz?name=${name}`)
              console.log('Success')
            }}>
              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => {
                  //console.log(infosDoEvento.target.value);
                  setName(infosDoEvento.target.value);
                  // seta o novo valor do state
                  // quando ocorrer mudança no input a funçao é chamada e essa chama o consolelog e o setName
                  // State
                  // name = infosDoEvento.target.value;                  
                }}
                placeholder="nome" value={name}
                value={name}
              />
              <Button type="submit" disabled={name.length === 0 }> 
                {`Jogar ${name}`} 
              </Button>
            </form>
            
          </Widget.Content>
        </Widget>

        <Widget
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            
          </Widget.Content>
        </Widget>
        <Footer
          as={motion.footer}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>
      

    </QuizBackground>
  )
  
}