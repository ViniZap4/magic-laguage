import React from 'react'

import Top from '../../../../components/top/Top'
import Interact from '../../../../components/Interact/Ineract'
import InfoItem from '../../../../components/InfoItem/InfoItem'


import '../../css/temes.css'
import './Simplepresent.css'


function ListBasic(props) {
  return(
    <li> <span className='seta_item_list'> -></span>
        {props.text}
    </li>
  );
}

function Nota(props) {
  return(<>
  <span  className="text_note">
    <span className="title_note">{props.title}</span>
    <p>{props.text}</p>
  </span>
  </>);
}


export default function Simplepresent() {
  return (
    <div id="page_Simplepresent" className="page_temes_content">
      <Top />

    <div className="simplepresent_content">
    
      <h1>Quando usar o Simple Present?</h1>
      <p>O Simple Present é um tempo verbal utilizado para indicar ações <bold>habituais</bold> que ocorrem no presente.Além disso, ele é usado para expressar verdades universais, sentimentos, desejos, opiniões e preferências.
         Por vezes, as frases no Simple Present apresentam expressões de tempo (advérbios).
      </p>

     <Nota title="Exemplos:" 
        text={<>

        <ListBasic text={<>
          He <b>plays</b> soccer very well. (Ele joga futebol muito bem.)
       </>}/>
         <ListBasic text={<>
          She <b>loves</b> chocolate. (Ela ama chocolate.)
        </>}/>
         <ListBasic text={<>
         They <b>go</b> to school in the afternoon. (Eles vão para a escola de tarde.)
        </>}/>
         <ListBasic text={<>
           I <b>always read</b> the newspaper in the morning. (Eu sempre leio o jornal de manhã.)       
       </>}/>
         <ListBasic text={<>
        We <b>generally travel</b> to Brazil in December. (Geralmente nós viajamos para o Brasil em dezembro.)
      </>}/>
     </>}/>
      

        <Nota title="Regras:" 
        text={<>
          <p> A conjugação do Simple Present varia de acordo com a pessoa verbal, com a terminação do verbo e com o tipo de frase (afirmativa, negativa e interrogativa.)</p>
        </>}/>


      <h1>Afirmativo</h1>
       <p>Como regra geral, pode-se dizer que para conjugar um verbo no Simple Present, basta usá-lo no infinitivo sem o to no caso dos pronomes I, you, we e they, e acrescentar -s, -es ou -ies no caso dos pronomes he, she e it.</p>
   
      <h1>Verbos terminados em -o, -z, -ss, -ch, -sh, -x</h1>
       <p>É preciso acrescentar -es no final do verbo.</p>

      <Nota title="Exemplos:" 
        text={<>

        <ListBasic text={<>
          to teach (ensinar) - teaches
        </>}/>
        <ListBasic text={<>
          to watch (assistir) - watches
        </>}/> 
        <ListBasic text={<>
          to push (empurrar) - pushes
        </>}/>
        <ListBasic text={<>
          to kiss (beijar) - kisses
        </>}/>
        <ListBasic text={<>
          to kiss (beijar) - kisses
        </>}/>
        <ListBasic text={<>
          to fix (consertar) - fixes
        </>}/>
      </>}/>

   



      <h1>Verbos terminados em “y” precedido de consoante</h1>
      <p>Retira-se o -y e acrescenta-se -ies</p>

      <Nota title="Exemplos:" 
        text={<>

       <ListBasic text={<>
      to try (fritar) - fries
       </>}/>
       <ListBasic text={<>
      to fly (voar) - flies
       </>}/>
       <ListBasic text={<>
      to study (estudar) - studies
       </>}/>
       <ListBasic text={<>
      to worry (preocupar-se) - worries
       </>}/>
      </>}/>
    
      <h1>Verbos terminados em “y” precedido de vogal</h1>
      <p>Acrescenta-se somante o s</p>

          <Nota title="Exemplos:" 
        text={<>
      <ListBasic text={<>
      to say (dizer) - says
      </>}/>
      <ListBasic text={<>
      to play (brincar; jogar) - plays
      </>}/>
    </>}/>

      <h1>Posição do verbo em frases afirmativas</h1>
      <p>Veja abaixo a estrutura de formação de frases afirmativas no Simple Present:</p>
    
      <h2>Sujeito + verbo principal + complemento</h2>

          <Nota title="Exemplos:" 
        text={<>
             <ListBasic text={<>
                 I <b>live</b> in Brazil. (Eu moro no Brasil). - verbo to live (morar, viver).
               </>}/>
               <ListBasic text={<>
                 He <b>>teaches</b> Spanish at the university. (Ele ensina espanhol na universidade.) - verbo to teach (ensinar).
               </>}/>
               <ListBasic text={<>
                  They <b>prefer</b> Italian food. (Eles preferem comida italiana.) - verbo to prefer (preferir).
               </>}/>
               <ListBasic text={<>
                  She <b>watches</b> TV every day. (Ela assiste TV todos os dias.) - verbo to wat<b>ch</b> (assistir).
               </>}/>
                  <ListBasic text={<>
                   We <b>like</b> to go to the beach during the week. (Nós gostamos de ir à praia durante a semana.) - verbo to like (gostar).
                  </>}/>
        </>}/>

      <h1>Negativo</h1>
      <p>A forma negativa do Simple Present é formada com o uso dos verbos auxiliares do e does.</p>
      <p>Do é usado com os pronomes I, you, we e they. Já o auxiliar does é usado com he, she, it.</p>
      <p>Veja abaixo a conjugação da forma negativa do verbo to work (trabalhar; funcionar) no Simple Present.</p>
      <p>Na forma negativa do Simple Present, <b>o verbo sempre é usado no infinitivo sem o to</b>, mesmo quando se trata da terceira pessoa do singular (he, she e it).</p>
      <p>As frases na negativa podem ser escritas de forma completa (do not ou does not) ou de forma contraída (don't ou doesn't):</p>
      <p>Do + not = don’t</p>
      <p>Does + not = doesn’t</p>

      <h1>Posição do verbo em frases negativas</h1>
      <p>Veja abaixo a estrutura de formação de frases negativas no Simple Present:</p>
     
      <h2>Sujeito + verbo auxiliar + not + verbo principal + complemento</h2>
      
      <Nota title="Exemplos:" 
        text={<>

        <ListBasic text={<>
          I <b>do not live</b> in Brazil. (Eu não moro no Brasil). - verbo to live (morar, viver).
        </>}/>
        <ListBasic text={<>
           He <b>does not teach</b> Spanish at the university. (Ele não ensina espanhol na universidade.) - verbo to teach (ensinar).
        </>}/>
        <ListBasic text={<>
           She <b>doesn't watch</b> TV every day. (Ela não assiste TV todos os dias.) - verbo to watch (assistir).
        </>}/>
        <ListBasic text={<>
           We <b>do not like</b> to go to the beach during the week. (Nós não gostamos de ir à praia durante a semana.) - verbo to like (gostar).
        </>}/>

      </>}/>

      <h1>Interrogativa</h1>
      <p>Assim como acontece nas frases negativas, os auxiliares do e does são utilizados para formar frases interrogativas no Simple Present.</p>
      <p>Do é usado com I, you, we e they, e does é usado com he, she e it.</p>
      <p>Veja abaixo a conjugação da forma interrogativa do verbo to work (trabalhar; funcionar) no Simple Present:</p>
      <p>Note que <b>verbo sempre é usado no infinitivo sem o to,</b> mesmo quando se trata da terceira pessoa do singular (he, she e it).</p>
      
      <h1>Posição do verbo em frases interrogativas</h1>
      <p>Veja abaixo a estrutura de formação de frases interrogativas no Simple Present.</p>
      
      <h2>Verbo auxiliar + sujeito + verbo principal + complemento</h2>
      
      <Nota title="Exemplos:" 
        text={<>

      <ListBasic text={<>
        <b>Do I own</b> you money? (Eu te devo dinheiro?). - verbo to own (dever).
      </>}/>
      <ListBasic text={<>
       <b>Does he teach</b> Spanish at the university? (Ele ensina espanhol na universidade?) - verbo to teach (ensinar).
      </>}/>
      <ListBasic text={<>
        <b>Do they prefer</b> Italian food? (Eles preferem comida italiana?) - verbo to prefer (preferir).
      </>}/>
      <ListBasic text={<>
        <b>Does she watch</b> TV every day? (Ela assiste TV todos os dias?) - verbo to watch (assistir).
      </>}/>
      <ListBasic text={<>
       <b>Do we have</b> classes on Saturdays? (Nós temos aulas aos sábados?) - verbo to have (ter).
      </>}/>
      <ListBasic text={<>
        <b>Does it push</b> the door when it wants to get in? (Ele/ela empurra a porta quanto quer entrar?) - verbo to push (empurrar).
      </>}/>
      <ListBasic text={<>
        <b>Do you arrive</b> late? (Você chega atrasado?) - verbo to arrive (chegar).
      </>}/>

      </>}/>

      <h1>IMPORTANTE</h1>
      <p>O verbo to do significa <b>fazer</b>. No entanto, no Simple Present ele é usado como verbo auxiliar que complementa a formação das frases negativas e interrogativas.</p>
      <p>Enquanto auxiliares, do e does não têm significado.</p>
      <p>Os auxiliares do e does também são usados em respostas curtas.</p>
      <p>Observe os exemplos abaixo:</p>
      
      <h1>Simple Present x Present Continuous</h1>
      <p>Tanto o Simple Present (presente simples) quanto o Present Continuous (presente contínuo) são tempos verbais da língua inglesa que indicam tempo presente.</p>
      <p>No entanto, é comum que ambos causem dúvidas àqueles que querem praticar e construir frases em inglês.</p>
      <p>O Simple Present indica <b>ações habituais</b> ocorridas no presente e também <b>verdades universais, sentimentos, desejos, opiniões</b> e <b>preferências.</b></p>
      <p>Já o Present Continuous indica ações que <b>estão ocorrendo no presente</b>, ou seja, no momento em que se fala. Equivale ao gerúndio da língua portuguesa. Regra geral, para conjugar o Present Continuous, é preciso acrescentar -ing no fim do verbo..</p>
      
        <Nota title="Exemplos:" 
        text={<>

        <ListBasic text={<>
           They are watch<b>ing</b> a movie. (Eles estão assistindo um filme.) - verbo to watch (assistir).
        </>}/>
        <ListBasic text={<>
           I am mak<b>ing</b> a phone call. (Estou fazendo uma chamada telefônica.) - verbo to make (fazer).
        </>}/>

          </>}/>

      <p>Veja abaixo algumas frases no Simple Present e no Present Continuous que ilustram a diferença entre os dois tempos verbais.</p>
     
        <Nota title="Exemplos:" 
        text={<>

        <ListBasic text={<>
           He is play<b>ing</b> baseball. (Ele está jogando basebol.) - PRESENT CONTINUOUS
        </>}/>

      </>}/>

      
      <Interact 
            question1={<>
              questão 1
              <InfoItem info="item 1 ;)" />
              </>}
            answer1="a"
            a1="item 1 question 1"
            b1="item 2 question 1"
            c1="item 3 question 1"
            d1="item 4 question 1"
            e1="item 5 question 1"
            f1="item 6 question 1"
            question2={<>
              questão 2 
              <InfoItem info="opa questão 2" />
              </>}
            answer2="b"
            a2="item 1 question 2"
            b2="item 2 question 2"
            c2="item 3 question 2"
            d2="item 4 question 2"
            e2="item 5 question 2"
            f2="item 6 question 2"
            question3={<>
              questão 3 
              <InfoItem info="opa questão 3" />
              </>}
            answer3="c"  
            a3="item 1 question 3"
            b3="item 2 question 3"
            c3="item 3 question 3"
            d3="item 4 question 3"
            e3="item 5 question 3"
            f3="item 6 question 3"
          />
    </div>
  </div>
  );
}