import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { GridComponent, ColumnsDirective, ColumnDirective} from '@syncfusion/ej2-react-grids';
import { vaultData, exchangeData, FiatData, vaultGrid, exchangeGrid, fiatGrid, iconData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import { Ajax } from '@syncfusion/ej2-base';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

import binance from '../data/binance.png'
import bitstamp from '../data/bitstamp.png'
import deribit from '../data/deribit.png'
import Safeguard1 from '../data/Safeguard.png'

let datatmp = [
  { image: Safeguard1, name: "Quant Vault", amount: "1,000,000" },
  { image: Safeguard1, name: "Autocall Vault", amount: "560,010" },
  { image: Safeguard1, name: "Options Vault", amount: "790,000" },
  { image: Safeguard1, name: "Grid Vault", amount: "45,000" },
  { image: Safeguard1, name: "Dual currency Vault", amount: "120,000" },
  { image: Safeguard1, name: "Snowball Vault", amount: "103,000" },
  { image: Safeguard1, name: "Fix income Vault", amount: "100,001" },

];
let datatmp1 = [
  { image: deribit, name: "Deribit", amount: "560,010" },
  { image: binance, name: "Binance", amount: "790,000" },
  { image: bitstamp, name: "Bitstamp", amount: "145,000" },

];

const Tabs = () => {

  const [data1, setData1] = useState(datatmp1);
  const [data, setData] = useState(datatmp);

  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const [exchange, setExchange] = useState('');
  const [exbalance, setExbalance] = useState('');

  const [currentTab, setCurrentTab] = useState('1');

  const { currentColor } = useStateContext();

  const source = [datatmp, datatmp1, FiatData]
  const gridsource = [vaultGrid, exchangeGrid, fiatGrid]

  const toolbarOptions = ['Search'];

  const tabs = [
    {
      id: 0,
      tabTitle: 'My Vault',
      title: 'Title 1',
      content: 'Las tabs se generan automáticamente a partir de un array de objetos, el cual tiene las propiedades: id, tabTitle, title y content.'
    },
    {
      id: 1,
      tabTitle: 'Exchanges',
      title: 'Title 2',
      content: 'Contenido de tab 2.'
    },
    {
      id: 2,
      tabTitle: 'Fiat',
      title: 'Title 3',
      content: 'Contenido de tab 3.'
    }
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  }


  useEffect(() => {

    const ajax = new Ajax();
    ajax.send();
    ajax.onSuccess = (data: any) => {
      setData([]);
    }


    const ajax1 = new Ajax();
    ajax.send();
    ajax1.onSuccess = (data1: any) => {
      setData1([]);
    }
  }, []);



  const dataupdate = () => {


    datatmp = [...datatmp, {
      name: name,
      amount: amount,
    }];

    setData(datatmp);


    console.log("the data is:", vaultData)

    console.log("the data is:", data)
  };


  const dataupdate1 = () => {


    datatmp1 = [...datatmp1, {
      name: exchange,
      amount: exbalance,
    }];

    setData1(datatmp1);


    console.log("the data1 is:", exchangeData)

    console.log("the data1 is:", data1)
  };


  const handleChange = event => {
    setName(event.target.value);
  }

  const handleChange1 = event => {
    setAmount(event.target.value);
  }


  const handleChange2 = event => {
    setExchange(event.target.value);
  }

  const handleChange3 = event => {
    setExbalance(event.target.value);
  }


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };




  return (
    <div className='container' style={{ zIndex: 1 }} >

      <div className=''>
        {tabs.map((tab, i) =>
          <Button class="card " justify-self='center' key={i} id={tab.id} variant="outlined"
            startIcon={<img src={iconData[i].image} alt="" />}
            onClick={(handleTabClick)}
            style={{
              backgroundColor: currentColor,
            }}
          >
          </Button>
        )}
      </div>
      <div class="container" >

        {/*    <AddVault /> */}

        {tabs.map((tab, i) =>


          <div key={i} style={{ width: "95%" }}>


            {currentTab === `0` && `${tab.id}` === `0` &&
              <div style={{ display: "flex", justifyContent: "right", alignItems: "right", margin: "10px" }} >
                <Button variant="contained"  onClick={handleClickOpen}>
                  + Add Vault
                </Button>
                <Dialog open={open} onClose={handleClose} >
                  <DialogTitle sx={{ m: 0, p: 2 }} >Add Asset Wallet</DialogTitle>
                  <DialogContent dividers>
                    <DialogContentText>
                      Asset Name.
                    </DialogContentText>
                    <TextField id="name" label="Name" variant="outlined" type='text' onChange={handleChange} value={name} />
                    <TextField id="balance" label="USD Amount" variant="outlined" type="text" onChange={handleChange1} value={amount} />



                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={dataupdate}>Create</Button>
                  </DialogActions>
                </Dialog>
              </div>
            }


            {currentTab === `1` && `${tab.id}` === `1` &&
              <div style={{ display: "flex", justifyContent: "right", alignItems: "right", margin: "10px" }} >
                <Button variant="contained" onClick={handleClickOpen}>
                  + Exchange Account
                </Button>
                <Dialog open={open} onClose={handleClose} >
                  <DialogTitle sx={{ m: 0, p: 2 }} >Add Exchange</DialogTitle>
                  <DialogContent dividers>
                    <DialogContentText>
                      Exchange Name.
                    </DialogContentText>
                    <TextField id="exchange" label="exchange" variant="outlined" type='text' onChange={handleChange2} value={exchange} />
                    <TextField id="exbalance" label="USD Amount" variant="outlined" type="text" onChange={handleChange3} value={exbalance} />



                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={dataupdate1}>Create</Button>
                  </DialogActions>
                </Dialog>
              </div>
            }

            {currentTab === `${tab.id}` &&

              <GridComponent style={{ padding: "1%", width: "1000px" }} dataSource={source[`${tab.id}`]} pageSettings={{ pageCount: 5 }} toolbar={toolbarOptions}>
                <ColumnsDirective >
                  {gridsource[`${tab.id}`].map((item, index) => <ColumnDirective class='try' key={index} {...item} ></ColumnDirective>)}
                </ColumnsDirective>
              </GridComponent>}



          </div>
        )}
      </div>
    </div>
  );
}

export default Tabs;