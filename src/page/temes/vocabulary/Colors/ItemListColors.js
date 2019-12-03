import React from 'react'

import ItemVocabulary from '../../../../components/ItemVocabulary/ItemVocabulary'

export default function  ItemListCorlos(props) {
 

  return(
    <ItemVocabulary 
      id={props.color} 
      tocar={props.tocar}
      item={     
        <div className="decoration_color" id={props.color}></div>
      }
      info={props.info_color}        
    />
  );
}