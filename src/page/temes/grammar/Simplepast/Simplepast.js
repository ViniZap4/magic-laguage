import React from 'react'

import Top from '../../../../components/top/Top'

import '../../css/temes.css'
import './Simplepast.css'


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

export default function Simplepast() {
  return (
    <div id="page_simplepast" className="page_temes_content">
      <Top />
      <div className="simplepast_content">
        <h1> Modulo 1: Simple Past </h1>

        <p>
          Utiliza para indicar uma <b>ação concluída </b> 
          em um período de tempo <b>anterior ao atual</b>.
        </p>
        <ul>
          <ListBasic text={<>
            I sometimes <b>walked</b> home at lunchtime.
          </>}/>

          <ListBasic text={<>
            I often <b>brought</b>  my lunch to school.
          </>}/>

          <ListBasic text={<>
            We <b>saw</b> a good film last week.
          </>}/>

          <ListBasic text={<>
            Yesterday, I <b>arrived</b> in Geneva.
          </>}/>

          <ListBasic text={<>
            She <b>finished</b> her work atseven o'clock
          </>}/>

          <ListBasic text={<>
            I <b>went</b> to the theatre last night.
          </>}/>

          <ListBasic text={<>
            People <b>lived</b> in caves a long time ago. 
          </>}/>

          <ListBasic text={<>
            She <b>played</b> the piano when she was a child. 
          </>}/>

        </ul>

        <Nota title="Nota:" 
        text={<>
        O termo <i>"ago"</i> representa uma forma útil para expressar a distância 
        de tempo no passado. Ele é inserido <b>após</b> o período temporal: <i>"a week ago, 
        three years ago, a minute ago."</i>
        </>}/>

        <h2> Simple Past Formation </h2>
        <div className="tables_row">
          <table  className="table_row">
            <tr>
              <th colSpan="3"><h3>Afirmativa</h3></th>
            </tr>
            <tr>
              <td>Sugeito</td>
              <td>+verbo+<i>"ed"</i></td>
            </tr>
            <tr>
              <td>I</td>
              <td>skipped.</td>
            </tr>
          </table>
          <table  className="table_row">
              <tr>  
                <th colSpan="3"><h3>Negativa</h3></th>
              </tr>
              <tr>
                <td>Sugeito</td>
                <td>+did not</td>
                <td>+infinitivo sem <i>"to"</i></td>
              </tr>
              <tr>
                <td>they</td>
                <td>didn't</td>
                <td>go.</td>
              </tr>
            </table>
            <table  className="table_row">
              <tr>
                <th colSpan="3"><h3>Interrogativa</h3></th>
              </tr>
              <tr>
                <td>Did</td>
                <td>+Sugeito</td>
                <td>+infinitivo sem <i>"to"</i></td>
              </tr>
              <tr>
                <td>Did</td>
                <td>she</td>
                <td>arrive?</td>
              </tr>
            </table>
            <table  className="table_row">
            <tr>
              <th colSpan="3"><h3>Interrogativa Negativa</h3></th>
            </tr>
            <tr>
              <td>Did not</td>
              <td>+Sugeito</td>
              <td>+infinitivo sem <i>"to"</i></td>            
            </tr>
            <tr>
              <td>Didn't</td>
              <td>you</td>
              <td>play?</td>
            </tr>
          </table>
        </div>{/* end tables div*/}

        <h2>
          Simple Past for verbs <i>"To Be"</i>, 
          <i>"To Have"</i> and <i>"To Do"</i>: 
        </h2>   

        <table className="table_row">
          <tr>
            <th colSpan="1" ><h3>Sugeito</h3></th>
            <th colSpan="3"> <h3>Verbo</h3></th>
          </tr>
          <tr>
            <th></th>
            <th><h4>Be</h4></th>
            <th><h4>Have</h4></th>
            <th><h4>Do</h4></th>
          </tr>
          <tr>
            <td>I</td>
            <td>was</td>
            <td>Had</td>
            <td>Did</td>
          </tr>
          <tr>
            <td>You</td>
            <td>ware</td>
            <td>Had</td>
            <td>Did</td>
          </tr>
          <tr>
            <td>He/She/It</td>
            <td>was</td>
            <td>Had</td>
            <td>Did</td>
          </tr>
          <tr>
            <td>We</td>
            <td>ware</td>
            <td>Had</td>
            <td>Did</td>
          </tr>
          <tr>
            <td>you</td>
            <td>ware</td>
            <td>Had</td>
            <td>Did</td>
          </tr>
          <tr>
            <td>they</td>
            <td>ware</td>
            <td>Had</td>
            <td>Did</td>
          </tr>
        </table>

        <h1>
            As Formas Afirmativa, negativa & Interrogativa 
        </h1>  

        <h2>Afirmativa:</h2>
        <p>A forma afirmativa do <i>"simple past"</i> é simples. </p>
        <ListBasic text={<>
          I <b>was</b> in Japan last year. 
        </>}/>
        <ListBasic text={<>
          She <b>had</b> a headache yesterday.  
        </>}/>
        <ListBasic text={<>
          We <b>did</b> our homework last night.  
        </>}/>        
        
        <h2>Negativa e Interrogativa </h2>
        
        <p>
        Para as formas interrogativa e negativa do <i>"simple past"</i> do verbo <i>"do"</i> como 
        verbo ordinário, utilize como auxiliar o próprio <i>"do"</i>.
        </p>
        <Nota title="Ex:" 
          text={<> We <b>didn't</b> do our homework last night.</>} 
        /> 
        <p>
          A forma negativa do verbo <i>"have"</i> no <i>"simple past"</i> é normalmente formada 
          com o uso do verbo auxiliar <i>"do"</i>, ainda que, em alguns casos, basta adicionar 
          <i>"not"</i> ou a contração <i>"n't"</i>.
        </p>
        <p>
          A forma interrogativa do verbo <i>"have"</i> no <i>"simple past"</i> geralmente utiliza o auxiliar <i>"do"</i>.  
        </p>
        <Nota title="Nota:"
          text={<>
            <span>
              Para as formas negativa e interrogativa de <b>todos</b> os verbos no <i>"simple past"</i>
              , sempre utilize o auxiliar <b><i>"did"</i></b>.
            </span>
            <ListBasic 
              text={<>We <b>didn't</b> do our exercises this morning. </>}
            />
        </>}/>
        <h1>
          Simple Past: <h2>VERBOS IRREGULARES</h2>           
        </h1>
        <p>Alguns verbos são irregulares no "simple past". Confira abaixo os mais comuns. </p>

        <h2> To Go </h2>
          <ListBasic text={<>
            He <b>went</b> to a club last night. 
          </>}/>
          <ListBasic text={<>
            <b>Did he go</b> to the cinema last night?  
          </>}/>
          <ListBasic text={<>
            He <b>didn't</b> go to bed early last night. 
          </>}/>
        <h2> To Give  </h2>
          <ListBasic text={<>
            We <b>gave</b> her a doll for her birthday. 
          </>}/>
          <ListBasic text={<>
            They <b>didn't give</b> John their new address.  
          </>}/>
          <ListBasic text={<>
            <b>Did Barry give</b> you my passport? 
          </>}/>
        <h2> To Come </h2>
          <ListBasic text={<>
            My parents <b>came</b> to visit me last July. 
          </>}/>
          <ListBasic text={<>
            We <b>didn't come</b> because it was raining.  
          </>}/>
          <ListBasic text={<>
            <b>Did he come</b> to your party last week?  
          </>}/>
      </div>
    </div>
  );
}