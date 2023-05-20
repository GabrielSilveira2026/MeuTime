import './App.css';
import Logo from './componentes/Logo/Logo';
import Container from './componentes/Layout/Container/Container';
import Input from './componentes/Forms/Input/Input';
import { useState } from 'react';
import Button from './componentes/Forms/Button/Button';

function App() {

  return (
    <>
      <Container customClass='min-height'>
        <Logo/>
        <Input
          type="text"
          text={"Key da API-Football"}
          placeholder="Insira sua Key"
          name="nome"
        />
        <Button text='Validar Key'/>
      </Container>
    </>
  );
}

export default App;
