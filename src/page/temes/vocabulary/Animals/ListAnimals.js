import React from 'react'

import ItemVocabulary from '../../../../components/ItemVocabulary/ItemVocabulary'

export default function  ItemListAnimals(props) {
 

  return(
    <ItemVocabulary 
      id={props.animal} 
      tocar={props.tocar}
      item={     
        <img className="decoration_animals"  src={props.icon} alt="" ></img>
      }
      info={props.info}        
    />
  );
}