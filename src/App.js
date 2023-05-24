import './App.css';
import Logo from './componentes/Logo/Logo';
import Container from './componentes/Layout/Container/Container';
import Input from './componentes/Forms/Input/Input';
import Select from './componentes/Forms/Select/Select';
import Button from './componentes/Forms/Button/Button';
import { useEffect, useState } from 'react';


function App() {
  const [key, setKey] = useState('')
  const [keyValida, setKeyValida] = useState(false)
  const [listaPaises, setListaPaises] = useState([])
  const [pais, setPais] = useState('')
  const [listaLigas, setListaLigas] = useState([])
  const [liga, setLiga] = useState([])

  useEffect(()=>{
    if (pais !== '' && pais !== undefined) {
      consultaLigas();
    }
  }, [pais])

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
          consultaPaises()
        }
        else {
          setKeyValida(false)
          alert("A Key digitada não é valída, por favor insira uma key válida ou adquira uma nova key")
        }
      })
    }
  }

  function consultaPaises() {
    fetch("https://v3.football.api-sports.io/countries", {
        method: 'GET',
        headers: {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-rapidapi-key": key
        }
      })
      .then((resposta) => resposta.json())
      .then((dados) => {
        setListaPaises(dados.response)
      })
  }

  function consultaLigas() {
    fetch(`https://v3.football.api-sports.io/leagues?country=${pais}`, {
        method: 'GET',
        headers: {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-rapidapi-key": key
        }
      })
      .then((resposta) => resposta.json())
      .then((dados) => {
        console.log(dados);
        setListaLigas(dados.response)
      })
  }

  function handleChangeKey(e) {
    setKey(e.target.value)
  }

  function handleOnChangePais(e){
    setPais(e.target.value)
  }

  function handleOnChangeLiga(e){
    setLiga(e.target.value)
  }

  return (
    <>
      <Container customClass='min-height'>
        <Logo />
        <Input
          type="text"
          text={"Key da API-Football"}
          placeholder="Insira sua Key"
          name="key"
          handleOnChange={handleChangeKey}
        />
        <Button text='Validar Key' onClick={validaKey}/>

        {
          keyValida && 
          
          <Select
            name="pais_id"
            text="Selecione um País" 
            options={listaPaises}
            handleOnChange={handleOnChangePais}
            value={pais}
            tipo="pais"
          />
        }

        {
          pais && 
          <Select
            name="liga_id"
            text="Selecione uma liga" 
            options={listaLigas}
            handleOnChange={handleOnChangeLiga}
            tipo="liga"
          />
        }
      </Container>
    </>
  );
}

export default App;
