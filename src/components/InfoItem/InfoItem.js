import React, {useState} from 'react'



export default function InfoItem(props) {
  const [info_item, setinfo_item] =  useState(<>?</>)
  const [info_box, setinfo_box] =  useState(<></>)  
  const [openclose, setopenclose] = useState(1)

  const style_info = {
    cursor: "pointer"
  }

  const close_info ={
    // fontSize :"0vw",
    transform:"scale(0)",
    opacity:0,

  }
  
  function click_info() {
    if (openclose === 1){
      setinfo_item(<>x</>)
    setinfo_box( <div className="info_box">{props.info}</div>)
    setopenclose(0)} 
    else if(openclose === 0){
      setinfo_item(<>?</>)

      setinfo_box( <div style={close_info} className="info_box">{props.info}</div>)

      setTimeout(() => {
        setinfo_box(<></>)
      }, 600);
      
    setopenclose(1)}
    
    
  }

  return(<>
    <span className="info_item" onClick={click_info} style={style_info}>{info_item}</span>
    {info_box}
  </>);
}