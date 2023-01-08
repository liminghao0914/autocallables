import React, { useState } from 'react';
import { GridComponent,  ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';
import { assetData1, assetData2, assetData3, assetGrid, assetsData} from '../data/dummy';
import Button from '@mui/material/Button';
import "swiper/css";
import "swiper/css/navigation";
import { useStateContext } from '../contexts/ContextProvider';


// import required modules


const Slides = () => {

    const [currentTab, setCurrentTab] = useState('1');

    const source = [assetData1, assetData2, assetData3, assetData1, assetData2, assetData3, assetData1, assetData2, assetData3, assetData1, assetData2]

    const { currentColor } = useStateContext();

    const toolbarOptions = ['Search'];

    const tabs = [
        {
            id: 0,
            tabTitle: 'BTC',
            title: 'Title 1',
            content: ''
        },
        {
            id: 1,
            tabTitle: 'ETH',
            title: 'Title 2',
            content: 'Contenido de tab 2.'
        },
        {
            id: 2,
            tabTitle: 'USDT',
            title: 'Title 3',
            content: 'Contenido de tab 3.'
        },
        {
            id: 3,
            tabTitle: 'USDC',
            title: 'Title 1',
            content: 'Las tabs se generan automáticamente a partir de un array de objetos, el cual tiene las propiedades: id, tabTitle, title y content.'
        },
        {
            id: 4,
            tabTitle: 'XRP',
            title: 'Title 2',
            content: 'Contenido de tab 2.'
        },
        {
            id: 5,
            tabTitle: 'BNB',
            title: 'Title 2',
            content: 'Contenido de tab 2.'
        },
        {
            id: 6,
            tabTitle: 'ADA',
            title: 'Title 2',
            content: 'Contenido de tab 2.'
        },
        {
            id: 7,
            tabTitle: 'SOL',
            title: 'Title 2',
            content: 'Contenido de tab 2.'
        },
        {
            id: 8,
            tabTitle: 'DOGE',
            title: 'Title 2',
            content: 'Contenido de tab 2.'
        },
        {
            id: 9,
            tabTitle: 'DAI',
            title: 'Title 2',
            content: 'Contenido de tab 2.'
        },
        {
            id: 10,
            tabTitle: 'LTC',
            title: 'Title 2',
            content: 'Contenido de tab 2.'
        }
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (

        <div className='container' style={{ zIndex: 1 }} >

            <div class="" >
                <>
                    <div class="scrolling-wrapper">

                        {tabs.map((tab, i) =>

                                
                                <Button class="card1" justify-self='center' key={i} id={tab.id}  
                                variant="outlined" startIcon={<img src={assetsData[i].image} alt="" />} 
                                onClick={(handleTabClick)}
                                style={{
                                    backgroundColor:  currentColor ,
                                }}
                                >
                              <p></p> <p></p>
      </Button>                                
                        )}
                    </div>
                </>
            </div>


            <div class="container" >
                {tabs.map((tab, i) =>
                    <div key={i}>

                        {currentTab === `${tab.id}` &&
                            <GridComponent dataSource={source[`${tab.id}`]} pageSettings={{ pageCount: 5 }} toolbar={toolbarOptions}>
                                <ColumnsDirective >
                                    {assetGrid.map((item, index) => <ColumnDirective class='' key={index} {...item} />)}
                                </ColumnsDirective>
                            </GridComponent>}



                    </div>
                )}
            </div>
        </div>
    );
}

export default Slides;