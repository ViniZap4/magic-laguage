import React, {useState} from 'react'

import './Interact.css'


export default function Interact(props) {
  
  const [ interactOpa , setinteractOpa  ] = useState(1)
  const [ closeinteract, setcloseinteract] = useState("none")
  const [close, setclose ] =useState("flex")
  // style de interact
  const bestbox = {
   opacity : interactOpa, 
    animation: closeinteract,
    display:close
  }









  //  as opções de resposta
  const [option1, setoption1] = useState(props.a1)
  const [option2, setoption2] = useState(props.b1)
  const [option3, setoption3] = useState(props.c1)
  const [option4, setoption4] = useState(props.d1)
  const [option5, setoption5] = useState(props.e1)
  const [option6, setoption6] = useState(props.f1)



  // variaveis para o estilo
  const [itemoptionOpac, setitemoptionOpac ] =useState(1)
  const [itemoptionvisi, setitemoptionvisi ] =useState("visible")

  const itemoption ={// dando  estilização as opsões
    opacity:itemoptionOpac,
    visibility:itemoptionvisi,
    transition:"0.6s"
    
  }

  function  ItemQuestions(props){// criando o corpo
    
    return(<>   
      <span className="item_answer"  onClick={() => valanswer("a")}>
        {option1}
      </span>
      <span className="item_answer"    onClick={() => valanswer("b")}>
        {option2}
      </span>
      <span className="item_answer"  onClick={() => valanswer("c")}>
        {option3}
      </span>
      <span className="item_answer"  onClick={() => valanswer("d")}>
        {option4}
      </span>
      <span className="item_answer"  onClick={() => valanswer("e")}>
        {option5}
      </span>
      <span className="item_answer"  onClick={() => valanswer("f")}>
        {option6}
      </span>

          
    </>) 
  }





  // variaveis para o estilo
  const [notaopac,setnotaopac  ] =useState(0)
  const [notaanime,setnotaanime  ] =useState("none")
  const NotaQuestionStyle ={ // estilização a notas
    opacity: notaopac,
    animation:notaanime
  }
  //  troca dinamica de  conteudo
  const [ notacontent, setnotacontent ]= useState(<></>)
  // interação notas respostas 

    function NotaQuestion(props) {
      return(<>
        <div className="nota_question_box" style={NotaQuestionStyle}>
          <span>{props.content}</span>
        </div>
      </>);
    }







    // controlando as questões
  const [numquestion, setnumquestion] = useState(1)
  const[question, setquestion]= useState(props.question1)


  function valanswer(val) {// função ao enviar uma resposta 
    if (val === props.answer1 && numquestion === 1){ // questão 1
            
      setitemoptionOpac(0)
      setTimeout(() => {
        setitemoptionOpac(1)
        setquestion(props.question2)
        setoption1(props.a2)
        setoption2(props.b2)
        setoption3(props.c2)
        setoption4(props.d2)
        setoption5(props.e2)
        setoption6(props.f2)
      }, 409);
      setnumquestion(2)
    }else if (numquestion === 1){
      setitemoptionOpac(0)
      setitemoptionvisi("hidden")
      setnotaopac(1)
      setTimeout(() => {
        setnotaanime("init_notas_content 0.6s linear")
        setnotacontent(<>
           Ops essa não é a resposta correta :( 
        </>)
      }, 0);

      setTimeout(() => {
        setnotaanime("")
        setnotaopac(0)
      }, 2000);

      setTimeout(() => {
        setnotaanime("init_notas_content 0.6s linear")
        setnotaopac(1)
        setnotacontent(<>
           Vamos tente outra vez!!
        </>)
      }, 2600);

      setTimeout(() => {
        setnotaopac(0)
        setnotaanime("")
        setitemoptionOpac(1)
        setnotaopac(0)
        setitemoptionvisi("visible")
        setnotacontent()

        setitemoptionOpac(1)
        setquestion(props.question1)
        setoption1(props.a1)
        setoption2(props.b1)
        setoption3(props.c1)
        setoption4(props.d1)
        setoption5(props.e1)
        setoption6(props.f1)
      }, 6000);
 
    } 


    if (val === props.answer2 && numquestion === 2){ // questão 2
               
      setitemoptionOpac(0)
      setTimeout(() => {
        setitemoptionOpac(1)          
        setquestion(props.question3)
        setoption1(props.a3)
        setoption2(props.b3)
        setoption3(props.c3)
        setoption4(props.d3)
        setoption5(props.e3)
        setoption6(props.f3)
      }, 409);
      setnumquestion(3)
    }else if (numquestion === 2){
      setitemoptionOpac(0)
      setitemoptionvisi("hidden")
      setnotaopac(1)
      setTimeout(() => {
        setnotaanime("init_notas_content 0.6s linear")
        setnotacontent(<>
           Ops essa não é a resposta correta :( 
        </>)
      }, 0);

      setTimeout(() => {
        setnotaanime("")
        setnotaopac(0)
      }, 2000);

      setTimeout(() => {
        setnotaanime("init_notas_content 0.6s linear")
        setnotaopac(1)
        setnotacontent(<>
           Vamos tente outra vez!!
        </>)
      }, 2600);

      setTimeout(() => {
        setnotaopac(0)
        setnotaanime("")
        setitemoptionOpac(1)
        setnotaopac(0)
        setitemoptionvisi("visible")
        setnotacontent()

        setitemoptionOpac(1)
        setquestion(props.question2)
        setoption1(props.a2)
        setoption2(props.b2)
        setoption3(props.c2)
        setoption4(props.d2)
        setoption5(props.e2)
        setoption6(props.f2)
      }, 6000);
 
    } 

    if (val === props.answer3 && numquestion === 3){ // questão 3
               
      setitemoptionOpac(0)
      setTimeout(() => {
        setitemoptionOpac(0)
        setitemoptionvisi("hidden")
        setnotaopac(1)
        setTimeout(() => {
          setnotaanime("init_notas_content 0.6s linear")
          setnotacontent(<>
             Incrivel!!   
          </>)
        }, 0);

        setTimeout(() => {
          setnotaanime("")
          setnotaopac(0)
        }, 2000);
  

  
        setTimeout(() => {
          setnotaanime("init_notas_content 0.6s linear")
          setnotaopac(1)
          setnotacontent(<>
             very good!!
          </>)
        }, 2100);

        setTimeout(() => {
          setnotaanime("")
          setnotaopac(0)
        }, 3000);


        setTimeout(() => {
          setcloseinteract("close_interact 2s linear")
        }, 3100);


        setTimeout(() => {
          setinteractOpa(0)
          setclose("none")
        }, 5100);




        
        
        


      }, 409);
      setnumquestion(2)
    }else if (numquestion === 3){
      setitemoptionOpac(0)
      setitemoptionvisi("hidden")
      setnotaopac(1)
      setTimeout(() => {
        setnotaanime("init_notas_content 0.6s linear")
        setnotacontent(<>
           Ops essa não é a resposta correta :( 
        </>)
      }, 0);

      setTimeout(() => {
        setnotaanime("")
        setnotaopac(0)
      }, 2000);

      setTimeout(() => {
        setnotaanime("init_notas_content 0.6s linear")
        setnotaopac(1)
        setnotacontent(<>
           Vamos tente outra vez!!
        </>)
      }, 2600);

      setTimeout(() => {
        setnotaopac(0)
        setnotaanime("")
        setitemoptionOpac(1)
        setnotaopac(0)
        setitemoptionvisi("visible")
        setnotacontent()

        setitemoptionOpac(1)
        setquestion(props.question3)
        setoption1(props.a3)
        setoption2(props.b3)
        setoption3(props.c3)
        setoption4(props.d3)
        setoption5(props.e3)
        setoption6(props.f3)
      }, 6000);
 
    } 

  }


  

  // o que será renderizado
  return(<> 
      <div id="content_interact" style={bestbox}>
        <div className="question" style={itemoption}>
          {question} 
        </div><hr style={itemoption}/>
        <div div className="answer" style={itemoption}>
          <ItemQuestions />

        </div>
        <NotaQuestion 
            content={notacontent}
        />
      </div>

  </>)  
}