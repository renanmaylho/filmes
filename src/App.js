import { Container,Lista, Filme } from './styles';
import { useState,useEffect } from 'react';

function App() {

  const [filmes, setFilmes] = useState([])

  useEffect(() =>{

    fetch("https://api-filmes-ds.herokuapp.com/filmes")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setFilmes(data)

    })
    

  },[])

  return (
    <Container >
      <h1> Filmes</h1>
      <Lista>

        {filmes.map(Nfilme => {
          return(
            <Filme key={Nfilme.id}>
                <a href='#'><img  src={Nfilme.foto} alt={Nfilme.nome}/></a>
                <span>{Nfilme.nome}</span>
            </Filme>
          )
        })}
        </Lista>
    </Container>
  )
}

export default App;
