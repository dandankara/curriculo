import React, { Component } from 'react';

import { Github } from '@styled-icons/boxicons-logos';
import { LinkedinSquare } from '@styled-icons/boxicons-logos/'

import { Info } from './styles'
import { Content } from './styles'
import { Footer } from './styles'
import './index.css'


class App extends Component {
  render() {
    return (
      <>
          <Info>
            <div>
              <img src="https://avatars.githubusercontent.com/u/65553049?s=460&u=7616301b1e4aad0c062411c373c9c42c7f2ec8ef&v=4" /> <br/>

              <small>Front-end Development</small> <br/>

              <a href="https://github.com/dandankara"> <Github size="40" /></a>
              <a href="https://www.linkedin.com/in/daniel-cunha001"> <LinkedinSquare size="43" /> </a>
            </div>
          </Info>

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
                <li>Python</li>
              </ul>

              <h3>Projetos.</h3>
              <ul>
                <li>Calculadora (Javascript - React Native)</li>
                <li>Currículo (JavaScript - React)</li>
                <li>Instagram Clone - Em desenvolvimento (JavaScript-React Native)</li>
                <li>Port-melhor - Em desenvolvimento (JavaScript-React Native)</li>
                <p> <b> Todos os projetos citados se encontra no Github!!! </b> </p>
              </ul>

              <h3>Experiência.</h3>
              <ul>
                <b> <li>Auxiliar de escritório.</li> </b> 
                <small> Cooper Rubi <br/> </small>
                <small> Fev. de 2018 - Jul. de 2018 </small> <br/> <br/>
                Responsável pelo suporte técnico da empresa; 
                Cadastro de funcionários no sistema da mesma e alteração no 
                banco de dados de funcionários em questão de cargo ou salário. <br/> <br/>

                <b> <li>Agente Fiscalizador.</li> </b> 
                <small>Prefeitura de Rubiataba <br/> </small>
                <small> Ago. de 2020 - Dez. de 2020 </small> <br/> <br/>
                Atuou na fiscalização e na orientação de empresas e pessoas
                sobre os mecanismos de prevenção a propagação do COVID-19,
                para atender as necessidades do Fundo Municipal de Saúde <br/> <br/>
                
              </ul>

              <h3>Cursos</h3>
              <ul>
                <li>React Native: Desenvolva APPs Nativos para Android e iOS (UDEMY)</li>
                <li>Curso React + Redux (UDEMY)</li>
              </ul>

            </div>
            
          </Content>

          <div>
          <Footer>
            Desenvolvido por Daniel Cunha 
          </Footer>
          </div>
      </>
    )
  }
}

export default App;
