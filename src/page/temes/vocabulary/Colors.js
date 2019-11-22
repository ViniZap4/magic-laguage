import React,{useState} from 'react'

import Top from '../../../components/top/Top'

import '../css/temes.css'


export default function Colors() {
  const [title_primary_colors, settitle_primary_colors ] = useState(<h2 className="title_box_colors">Primary Colors</h2>)
  const [title_primary_combinations, settitle_primary_combinations] = useState( <h2 className="title_box_colors">Primary Combinations</h2>)











  return (
    <div id="page_Colors" className="page_temes_content">
      <Top />
      <div id="colors_content">
        <div id="primary_colors" className="box_colors">
          {title_primary_colors}
          <ul className="list_box_colors">
            <li className="item_list_box_colors"></li>
          </ul>

        </div>
        <div id="primary_combinations" className="box_colors">
         {title_primary_combinations}
          <ul className="list_box_colors">
            <li className="item_list_box_colors"></li>
          </ul>

        </div>
        <div id="black_white" className="box_colors">
          <h2 className="title_box_colors">Black or White?</h2>
          <ul className="list_box_colors">
            <li className="item_list_box_colors"></li>
          </ul>

        </div>
        <div id="others" className="box_colors">
          <h2 className="title_box_colors">Others</h2>
          <ul className="list_box_colors">
            <li className="item_list_box_colors"></li>
          </ul>

        </div>
        
      </div>
    </div>
  );
}