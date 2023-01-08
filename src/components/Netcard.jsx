import React from 'react';
import Popinfo from './Popinfo.jsx'
const Netcard = (props) => (



  <div>
    <div class="netcard">
      <div class="net1">
        <button onClick={() => { console.log("it is a test") }
        }> <Popinfo dataSource={props.dataSource} image={props.image}></Popinfo>

        </button>
      </div>
      <p> </p>

      <div class="net2">{props.name}</div>
      <p fontSize="12px" fontWeight="normal">Connected with</p>

      <div class="net2">{props.connect}</div>
    </div>
  </div>
);


export default Netcard