import React, {useState} from 'react'


import Top from '../../components/top/Top'
import Interact from '../../components/Interact/Ineract'

import './Exercicios.css'
import Plus from '../../imagens/icons/general/plus.png'


function Interact1() {
 return(
  <Interact 
  question1={<>
    Como se escreve 1 em inglês
    </>}
  answer1="d"
  a1="Two"
  b1="On"
  c1="Five"
  d1="One"
  e1="Ten"
  f1="Blue"
  question2="como se escreve 10 em ingles"
  answer2="e"
  a2="Nine"
  b2="live"
  c2="Big"
  d2="Two"
  e2="Ten"
  f2="Tin"
  question3="O que é um Cricket"
  answer3="b"  
  a3="Cricket è um gato"
  b3="Cricket è um Grilo"
  c3="Cricket è a cor violeta"
  d3="Cricket è o numero 1000"
  e3="Cricket è um cino"
  f3="Cricket è a cor amarelo"
/>);}

function Interact2() {
  return(
   <Interact 
   question1="sign the option that means sexta-feira?"
   answer1="a"
   a1="Friday"
   b1="Tuesday"
   c1="Saturday"
   d1="Sunday"
   e1="Thursday"
   f1="Monday"
   question2="which one is the correct word for Domingo in English?"
   answer2="c"
   a2="Thursday"
   b2="Monday"
   c2="Sunday"
   d2="tuesday"
   e2="Friday"
   f2="wdnesday"
   question3="which one is the last day of the week?"
   answer3="d"  
   a3="Wednesday"
   b3="Tuesday"
   c3="Friday"
   d3="Saturday"
   e3="Monday"
   f3="Sunday"
 />);}

 function Interact3() {
  return(
   <Interact 
   question1="Which number is the correct to describe 501 from the following options? "
   answer1="f"
   a1="five hundred and six"
   b1="five hundred and two"
   c1="one hundred"
   d1="ten"
   e1="Thursday"
   f1="five hundred and one"
   question2="Which number is the grammatical form for three thousand?"
   answer2="a"
   a2="3000"
   b2="20"
   c2="468"
   d2="7299"
   e2="1000"
   f2="300"
   question3="Sign the sequence according to the right way to read the numbers 3,13,30"
   answer3="d"  
   a3="thirty,three,two"
   b3=" three,two,one"
   c3=" thirteen,three,thirty"
   d3="three,thirteen,thirty"
   e3="thirteen,fourteen,thirty"
   f3="one,three,five"
 />);}

 function Interact4() {
  return(
   <Interact 
   question1="which one of the colors bellow is a primary one?"
   answer1="b"
   a1="orange"
   b1="blue"
   c1="green"
   d1="black"
   e1="grey"
   f1="salmon"
   question2="which word in Portuguese is the correct translation for the color purple?"
   answer2="d"
   a2="vermelho"
   b2="rosa"
   c2="verde"
   d2="roxo"
   e2="laranja"
   f2="marrom"
   question3="which color we get by mixing all colors set?"
   answer3="b"  
   a3="black"
   b3="white"
   c3="nude"
   d3="grey"
   e3="blue"
   f3="purple"
 />);}

 function Interact5() {
  return(
   <Interact 
   question1="which one of the following animals is marine?"
   answer1="c"
   a1="Cricket"
   b1="Lizard"
   c1="dolphin"
   d1="snake"
   e1="Lion"
   f1="Cockroach"
   question2="which one of the following animals is a reptile?"
   answer2="d"
   a2="Whale"
   b2="ant"
   c2="cat"
   d2="cricket"
   e2="lizard"
   f2="cockroach"
   question3="which one of the following words is the translation of cockroach?"
   answer3="d"  
   a3="Peixe"
   b3="grilo"
   c3="lagarto"
   d3="barata"
   e3="gato"
   f3="pucachorrorple"
 />);}


export default function Exercicios() {

  const [ questionsView,setquestionsView ] = useState()
  const [ nunsort, setnunsort ] = useState(Math.floor(Math.random() * 2))
  
  function gerar() {    
    setnunsort(Math.floor(Math.random() * 5))

    if (nunsort === 0 ){
      setquestionsView(<><Interact1 />{questionsView} </> ) 
    }
    if (nunsort === 1){
      setquestionsView(<><Interact2 />{questionsView}</>) 
    }
    if (nunsort === 2){
      setquestionsView(<><Interact3 />{questionsView} </>) 
    }
    if (nunsort === 3){
      setquestionsView(<><Interact4 />{questionsView} </>) 
    }
    if (nunsort === 5){
      setquestionsView(<><Interact5 />{questionsView} </>) 
    }
  }
  



  return(<>
    <div className="page_exercios">
      <Top />
      <div className="content_exercios">
        <div onClick={gerar} className="gerar">
          <img src={Plus} alt="" className="gerar_interact_icon" />
          gerar 
        </div>
        <div className="questions_content_exercicios">
          {questionsView}
        </div>
      </div>
    </div>
  </>);
  
}