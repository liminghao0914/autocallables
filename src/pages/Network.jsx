import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid, partnerData } from '../data/dummy';
import { Header, Netcard, ConEx, Popup } from '../components';

const Network = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  return (
<div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="" title="Network" />
    <div class="nethead"><Popup title='+ Network Connection' firstTitle="Add Network Connection" dataSource={partnerData}></Popup></div>


<div class="parent">

<div class="div1"> <Netcard  dataSource={partnerData} image={partnerData[0].image} name={partnerData[0].label}  connect="MetaHarvest valut-Options" ></Netcard></div>
<div class="div2"> <Netcard image={partnerData[1].image} name={partnerData[1].label}  connect="MetaHarvest valut-Spot"></Netcard></div>
<div class="div3"><Netcard image={partnerData[2].image} name={partnerData[2].label}  connect="MetaHarvest valut-Futures"></Netcard> </div>
<div class="div4"><Netcard image={partnerData[3].image} name={partnerData[3].label}  connect="MetaHarvest valut-Futures"></Netcard> </div>
<div class="div5"> <Netcard image={partnerData[4].image} name={partnerData[4].label}  connect="MetaHarvest valut-Spot"></Netcard></div>
<div class="div6"> <Netcard image={partnerData[5].image} name={partnerData[5].label}  connect="MetaHarvest valut-Future"></Netcard></div>
</div>

</div>
  );
};
export default Network;
