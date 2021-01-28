# Next.js

### criaçao do projeto
- começar com o comando `npx create-next-app --example with-styled-components` no terminal para criar a pasta do projeto
- em seguida, o terminal vai pedir o nome do projeto
- para iniciar o projeto se usa `npm run dev`
- depois de instalar, ao lado de **ready** vai ter o link pra pagina do projeto `http://localhost:3000`


### db.json
- sera o "banco de dados do projeto"


**codigo do inicio do projeto**
```
//index.js

// com react criamos nossas proprias tags

import styled from 'styled-components'

// forma de criar components estilizados com styled-components
// o styled-components cria css de forma escopada, ao inves de adicionar class e estiliza-las, se estiliza a tag/component diretamente
const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.secondary};
`

// function Title(props){
//   // por convençao se usa parenteses no return
//   return (
//     <h1>{props.children}</h1>
//   ) 
// }

export default function Home() {
  return <Title>My page</Title>
  // o texto dentro da tag é ignorado se na funçao que ela foi criada tem outro texto, o ideal é passar por props
  // colocando parametro prop a funçao Title recebe o 'My page'
}
```

Google fontes https://fonts.google.com/

