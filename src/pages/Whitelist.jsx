import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { contextMenuItems, WhitelistGrid, userData, assetsData } from '../data/dummy';
import { Header, Addlist } from '../components';
import Button from '@mui/material/Button';
 

const Whitelist = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">

<Button style={{positon: "relative", left: "90%",}}  variant="outlined"><Addlist dataSource={assetsData} display={assetsData[4].image} image={assetsData[4].image} title="great" ></Addlist></Button>


      <Header category="" title="Whitelist" />
      <GridComponent
        id="gridcomp"
        dataSource={userData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {WhitelistGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  );
};
export default Whitelist;
