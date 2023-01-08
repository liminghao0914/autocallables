import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid, partnerData } from '../data/dummy';
import { Header, Netcard, ConEx, Popup } from '../components';

const Dashboard = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  return (

    <div>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">

          <div>
          <div class="lsdiv">
            <iframe class="feargreedindex" src="http://www.coinglass.com/pro/i/FearGreedIndex" scrolling="no" title="dashboard instance">
            </iframe>
          </div>
        </div>





        <div>
          <div class="lsdiv">
            <iframe class="volitility" src="http://www.coinglass.com/pro/i/bl" scrolling="no" title="dashboard instance">
            </iframe>
          </div>
        </div>


        <div>
          <div class="lsdiv">
            <iframe class="lsposition" src="http://www.coinglass.com/position" scrolling="no" title="dashboard instance">
            </iframe>
          </div>
        </div>


        <div>
          <div class="lsdiv">
            <iframe class="avgbtc" src="https://www.coinglass.com/pro/AvgFunding/BTC" scrolling="no" title="dashboard instance">
            </iframe>
          </div>
        </div>



        <div class="iframediv">
          <iframe class="avgbtc" src="https://cryptoquant.com/asset/btc/summary/?" frameborder="0" title="dashboard instance">
          </iframe>
        </div>


        <div class="iframediv">
          <iframe class="nftscan" src="https://www.nftscan.com/" title="dashboard instance">
          </iframe>
        </div>

        <div class="iframediv">
          <iframe class="nftstats" src="https://www.nft-stats.com/" title="dashboard instance">
          </iframe>
        </div>





        <div class="longshortdiv">
          <iframe class="LongShortRatio" src="https://www.coinglass.com/LongShortRatio" scrolling="no" title="dashboard instance">
          </iframe>
        </div>

        <div class="trackerdiv">
          <iframe class="tracker" src="https://www.nftscan.com/analytics/tracker" scrolling="no" title="dashboard instance">
          </iframe>
        </div>



        <div>
          <div class="nftdiv">
            <iframe class="bayc" src="https://nftgo.io/collection/bored-ape-kennel-club/overview" scrolling="no" title="dashboard instance">
            </iframe>
          </div>
        </div>


        <div>
          <div class="nftdiv">
            <iframe class="punks" src="https://nftgo.io/collection/cryptopunks/overview" scrolling="no" title="dashboard instance">
            </iframe>
          </div>
        </div>

        


        <div class="defillamadiv">
          <iframe class="defillama" src="https://defillama.com/" scrolling="no" title="dashboard instance"></iframe>
        </div>

        <div class="iframediv">
          <iframe class="topgames" src="https://dappradar.com/topic/games" scrolling="no" title="dashboard instance"></iframe>
        </div>



        <div>
          <h1 style={{ "font-size": "40px", padding: "10px" }} > borrow and lending ratio: </h1>
          <div class="flex">

            <div class="borrowearndiv">
              <iframe class="borrowHist" src="https://linen.app/interest-rates/borrow/historical" scrolling="no" title="dashboard instance"></iframe>
            </div>

            <div class="borrowearndiv">
              <iframe class="earnHist" src="https://linen.app/interest-rates/earn/historical" scrolling="no" title="dashboard instance"></iframe>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
export default Dashboard;
