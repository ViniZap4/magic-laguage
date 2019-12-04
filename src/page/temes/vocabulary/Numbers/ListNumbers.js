import React from 'react'

import ItemVocabulary from '../../../../components/ItemVocabulary/ItemVocabulary'

export default function  ItemListNumbers(props) {
 

  return(
    <ItemVocabulary 
      id={props.number} 
      tocar={props.tocar}
      item={     
        <img className="decoration_day"  src={props.icon} alt="" ></img>
      }
      info={props.info}        
    />
  );
}