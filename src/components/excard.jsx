import React from 'react';
import Popinfo from './Popinfo'
import connect from "../data/connect.png"
const excard = (props) => (



  <div>
    <div class="excard">
      <div class="app1"><button ><img width='30%' src={props.image} /></button>
      <button><Popinfo   title="connect"></Popinfo></button></div>
    </div>
  </div>
);


export default excard