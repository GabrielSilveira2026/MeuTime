import './App.css';
import Logo from './componentes/Logo/Logo';
import Container from './componentes/Layout/Container/Container';
import Input from './componentes/Forms/Input/Input';
import { useState } from 'react';
import Button from './componentes/Forms/Button/Button';

function App() {
  const [key, setKey] = useState('')
  const [keyValida, setKeyValida] = useState(false)

  function handleChangeKey(e) {
    setKey(e.target.value)
  }

  function validaKey() {
    if (key !== '') {
      fetch("https://v3.football.api-sports.io/status",{
        method: 'GET',
        headers: {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-rapidapi-key": key
        }
      })
      .then((resposta)=>resposta.json())
      .then((dados) =>{
        if (dados?.response?.subscription?.active) {
          setKeyValida(dados?.response?.subscription?.active)
        }
        else {
          setKeyValida(false)
          alert("A Key digitada não é valída", "Por favor insira uma key válida")
        }
      })
    }
  }

  return (
    <>
      <Container customClass='min-height'>
        <Logo />
        <Input
          type="text"
          text={"Key da API-Football"}
          placeholder="Insira sua Key"
          name="nome"
          handleOnChange={handleChangeKey}
        />
        <Button text='Validar Key' onClick={validaKey}/>

        {
          keyValida && 
            
          <h1>Chave válida</h1>
        }
      </Container>
    </>
  );
}

export default App;
