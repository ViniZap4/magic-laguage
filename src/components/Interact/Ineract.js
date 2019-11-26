import React, {useState} from 'react'

import './Interact.css'


export default function Interact(props) {
  function  ItemQuestions(props){

    return(<>   
      <span className="item_answer" onClick={() => valanswer(props.val)}>
        {props.answer}
      </span>
          
    </>); 
  }

  const [numquestion, setnumquestion] = useState(1)
  const[question, setquestion]= useState(props.question1)
  const [answers, setanswers] = useState(<>
    <ItemQuestions answer={props.a1} val="a"/>
    <ItemQuestions answer={props.b1} val="b"/>
    <ItemQuestions answer={props.c1} val="c"/>
    <ItemQuestions answer={props.d1} val="d"/>
    <ItemQuestions answer={props.e1} val="e"/>
    <ItemQuestions answer={props.f1} val="f"/>
  </>);

  function valanswer(val) {
    if (val === props.answer1 && numquestion === 1){
      setquestion(props.question2)
      setanswers(<>
        <ItemQuestions answer={props.a2} val="a"/>
        <ItemQuestions answer={props.b2} val="b"/>
        <ItemQuestions answer={props.c2} val="c"/>
        <ItemQuestions answer={props.d2} val="d"/>
        <ItemQuestions answer={props.e2} val="e"/>
        <ItemQuestions answer={props.f2} val="f"/>
      </>)
      setnumquestion(2)
    }else if (val === props.answer2 && numquestion === 2){
      setquestion(props.question3)
      setanswers(<>
        <ItemQuestions answer={props.a3} val="a"/>
        <ItemQuestions answer={props.b3} val="b"/>
        <ItemQuestions answer={props.c3} val="c"/>
        <ItemQuestions answer={props.d3} val="d"/>
        <ItemQuestions answer={props.e3} val="e"/>
        <ItemQuestions answer={props.f3} val="f"/>
      </>)
      setnumquestion(3)      
    }
  }


  return(<>
      <div id="content_interact">
        <div className="question">
          {question} 
        </div><hr />
        <div div className="answer">
          {answers}
        </div>
      </div>
  </>);  
}