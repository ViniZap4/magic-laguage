import React from 'react'

import ItemVocabulary from '../../../../components/ItemVocabulary/ItemVocabulary'

export default function  ItemListNumbers(props) {
 

  return(
    <ItemVocabulary 
      id={<><div className="number-span">{props.num}</div> </>} 
      tocar={props.tocar}
      item={     
        <div className="decoration_num">{props.icon}</div>
      }
      info={props.info}
    />
  );
}