import React from 'react'
import logo from "../../assets/Logo/withBg.png";
import { Container } from './styles';

export const NotFound = () => {
  return (
    <Container>
      <img src={logo}/>
      <h1>Nenhum Produto Encontrado</h1>
    </Container>
  )
}
