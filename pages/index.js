import React from 'react';
import styled from 'styled-components'
import {useRouter} from 'next/router'

import db from '../db.json'
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GithubCorner from '../src/components/GithubCorner'
import Head from 'next/head'

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
        <title>AstroQuiz - imersão alura</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@1,700&display=swap" rel="stylesheet"></link>
      </Head>
      <QuizContainer>
      <QuizLogo />
        <Widget>
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
              <input
                onChange={function (infosDoEvento) {
                  console.log(infosDoEvento.target.value);
                  // quando ocorrer mudança no input a funçao é chamada e essa chama o consolelog e o setName
                  // State
                  // name = infosDoEvento.target.value;

                  // seta o novo valor do state
                  setName(infosDoEvento.target.value);
                }}
                placeholder="nome"
              />
              <button type="submit" disabled={name.length === 0 }> 
                Jogar 
              </button>
            </form>
            
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
    </QuizBackground>
  )
  
}