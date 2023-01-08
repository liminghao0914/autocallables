import {React, useState} from 'react';

import { defiData } from '../data/dummy';
import {  Deficard } from '../components';

const Defi = () => {


  const [link, setLink] = useState('');



  return (

    <div className=" m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div class="defihead">

        <iframe src={link} height="100%" width="100%" title="Iframe Example"></iframe>

      </div>

      <div class="defi">
        <div class="defi1"><button onClick={() => { setLink("https://app.uniswap.org/") }}>
          <Deficard image={defiData[0].image} name="Uniswap"  ></Deficard></button> </div>
        <div class="defi2"><button onClick={() => { setLink("https://app.aave.com/markets/") }}>
          <Deficard image={defiData[1].image} name="AVAE"  ></Deficard></button> </div>
        <div class="defi3"><button onClick={() => { setLink("https://app.1inch.io/#/1/classic/swap/ETH/USDC") }}>
          <Deficard image={defiData[2].image} name="1 Inch"  ></Deficard></button>   </div>
        <div class="defi4"><button onClick={() => { setLink("https://app.uniswap.org/") }}>
          <Deficard image={defiData[3].image} name="Synthetix"  ></Deficard></button>   </div>
        <div class="defi5"><button onClick={() => { setLink("https://staking.synthetix.io/") }}>
          <Deficard image={defiData[4].image} name="Maker Dao"  ></Deficard></button>   </div>
        <div class="defi6"><button onClick={() => { setLink("https://app.compound.finance/") }}>
          <Deficard image={defiData[5].image} name="Compond"  ></Deficard></button>   </div>
        <div class="defi7"><button onClick={() => { setLink("https://polygon.technology/ecosystem/") }}>
          <Deficard image={defiData[6].image} name="Polygon"  ></Deficard></button>   </div>
        <div class="defi8"><button onClick={() => { setLink("https://yearn.finance/vaults") }}>
          <Deficard image={defiData[7].image} name="Yearn Fiannce"  ></Deficard></button>  </div>
        <div class="defi9"><button onClick={() => { setLink("https://curve.fi/") }}>
          <Deficard image={defiData[8].image} name="Curve"  ></Deficard></button>   </div>
        <div class="defi10"><button onClick={() => { setLink("https://app.optimism.io/bridge/deposit") }}>
          <Deficard image={defiData[9].image} name="Optimism"  ></Deficard></button>   </div>
      </div>
    </div>
  );
};
export default Defi;
