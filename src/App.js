import React, { Component } from 'react';

import { Github } from '@styled-icons/boxicons-logos';
import { LinkedinSquare } from '@styled-icons/boxicons-logos/'

import { Info } from './styles'
import { Content } from './styles'

class App extends Component {
  render() {
    return (
      <>

        {/* <div alt="Info" > */}
          <Info>
            <div>
              <img src="https://avatars.githubusercontent.com/u/65553049?s=460&u=7616301b1e4aad0c062411c373c9c42c7f2ec8ef&v=4" /> <br />
              <span>Daniel Cunha</span> <br />
              <a href="https://github.com/dandankarai"> <Github size="40" /></a>
              <a href="https://www.linkedin.com/in/daniel-cunha001"> <LinkedinSquare size="43" /> </a>
            </div>
          </Info>
        {/* </div> */}

          <Content>
            <div className="Conteudo" >
              <span> Daniel Cunha Barbosa </span> <br />
              <p>
                Formado em técnico em Informática integrado ao Ensino Médio,
                pelo Instituto Federal Goiano Campus Ceres, atuou na área
                administrativa na empresa Cooper Rubi Açucar e Álcool na cidade
                de Rubiataba, atuando na área por volta de 5 meses, desde então
                dedica seu tempo a cursos para encontrar um emprego na área de Ti.
              </p>

            <h3>Conhecimentos</h3>
              <ul>
                <li>Html/Css</li>
                <li>Javascript</li>
                <li>React/React Native</li>
                <li>NodeJs</li>
              </ul>

              <h3>Projetos</h3>
              <ul>
                <li>Calculadora (Seguindo o padrão da calculadora do IOs/Mac feita com React Native)</li>
              </ul>
            </div>
            
          </Content>
      </>
    )
  }
}

export default App;