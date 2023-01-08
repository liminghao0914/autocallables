import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import Tabs from '@mui/material/Tabs';

import TabPanel from '@mui/lab/TabPanel';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import SellIcon from '@mui/icons-material/Sell';
import PhoneIcon from '@mui/icons-material/Phone';
import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';


import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import Divider from '@mui/material/Divider';


import MenuItem from '@mui/material/MenuItem';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('16% APR Fixed Earn', '10d', "6.0%", 24, 4.0),
  createData('16% APR Fixed Earn', '10d', "9.0%", 37, 4.3),
  createData('16% APR Fixed Earn', '10d', "16.0%", 24, 6.0),
  createData('16% APR Fixed Earn', '10d', "3.7%", 67, 4.3),
  createData('16% APR Fixed Earn', '90d', "16.0%", 49, 3.9),
];



const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];


const Triditional = () => {


  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const [value1, setValue1] = React.useState('1');
  const handleChange1 = (event, newValue1) => {
    setValue1(newValue1);
  };

  const [value2, setValue2] = React.useState('1');
  const handleChange2 = (event, newValue2) => {
    setValue2(newValue2);
  };

  return (

    <div className="grid-container">

      <Grid container spacing={2}>
        <Grid container lg={7} spacing={4} >




          <div className='spot-container' style={{ "padding": "1px", "backgroundColor": "white", "opacity": "40%", "height": "80px" }}>
            <p>BTC/USDT@</p>
            <p>&emsp;&emsp;&emsp;</p>
            <p>16,678</p>
            <p>&emsp;&emsp;&emsp;</p>
            <p><ul class="no-bullets">24h Change</ul><ul class="no-bullets">5%</ul></p>
            <p>&emsp;&emsp;&emsp;</p>
            <p><ul class="no-bullets">24h High</ul><ul class="no-bullets">16,789</ul></p>
            <p>&emsp;&emsp;&emsp;</p>

            <p><ul class="no-bullets">24h Low</ul><ul class="no-bullets">16,660</ul></p>

          </div>

          <iframe src="https://bitcoinwisdom.io/markets/binance/btcusdt" position="absolute" height="600vh" width="1000vh" title="Iframe Example"></iframe>


        </Grid>


        <Grid container lg={4.9} spacing={4}>



          <Tabs value={value2} onChange={handleChange2} style={{ "padding-top": "150px", "width": "100%", "height": "200px" }} >
            <Tab label="Limit" />
            <Tab label="Market" />
            <Tab label="Stop-limit" />
          </Tabs>




          <Grid container lg={5.5} spacing={8} >



            <div className=''>

              <Item className='flex' style={{ "align-items": "center", }}>
                <FormControl sx={{ m: 0, minWidth: 100 }} >

                  <div className='flex' style={{ "align-items": "center", }}>
                    <Button className='flex'><img src="/img/btc.png" width="20px" />BTC</Button>
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-3zewi2-8 MZuqQ"><path d="M0.97168 1L6.20532 6L11.439 1" stroke="#AEAEAE"></path></svg>
                  </div>
                </FormControl>
                <FormControl sx={{ m: 0, minWidth: 250, }} size="small">

                  <TextField id="outlined-basic" label="Amount" variant="filled"
                    InputProps={{
                      disableUnderline: true,
                    }} />
                </FormControl>

              </Item>


              <div style={{ padding: "10px", }} >
                <Divider flexItem>
                  OR
                </Divider>
              </div>

              <Item className='flex' style={{ "align-items": "center", }}>
                <FormControl sx={{ m: 0, minWidth: 100 }} >

                  <div className='flex' style={{ "align-items": "center", }}>
                    <Button className='flex'><img src="/img/dollar.png" width="20px" />USDⓢ</Button>
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-3zewi2-8 MZuqQ"><path d="M0.97168 1L6.20532 6L11.439 1" stroke="#AEAEAE"></path></svg>
                  </div>
                </FormControl>
                <FormControl sx={{ m: 0, minWidth: 250, }} size="small">

                  <TextField id="outlined-basic" label="total" variant="filled"
                    InputProps={{
                      disableUnderline: true,
                    }} />
                </FormControl>

              </Item>

            </div>

            <Stack direction="row" spacing={0.6} >

              <li className='ratio-li'>10%</li>
              <li className='ratio-li'>25%</li>
              <li className='ratio-li'>50%</li>
              <li className='ratio-li'>75%</li>
              <li className='ratio-li'>100%</li>

            </Stack>
            <Button variant="contained" style={{ backgroundColor: "green", height: "40px", width: "80%", "padding": "10px" }} > BUY</Button>
          </Grid>




          <Grid container lg={5.5} spacing={8} >
            <div className=''>
              <Item className='flex' style={{ "align-items": "center", }}>
                <FormControl sx={{ m: 0, minWidth: 100 }} >

                  <div className='flex' style={{ "align-items": "center", }}>
                    <Button className='flex'><img src="/img/btc.png" width="20px" />BTC</Button>
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-3zewi2-8 MZuqQ"><path d="M0.97168 1L6.20532 6L11.439 1" stroke="#AEAEAE"></path></svg>
                  </div>
                </FormControl>
                <FormControl sx={{ m: 0, minWidth: 250, }} size="small">

                  <TextField id="outlined-basic" label="Amount" variant="filled"
                    InputProps={{
                      disableUnderline: true,
                    }} />
                </FormControl>

              </Item>


              <div style={{ padding: "10px", }} >
                <Divider flexItem>
                  OR
                </Divider>
              </div>

              <Item className='flex' style={{ "align-items": "center", }}>
                <FormControl sx={{ m: 0, minWidth: 100 }} >

                  <div className='flex' style={{ "align-items": "center", }}>
                    <Button className='flex'><img src="/img/dollar.png" width="20px" />USDⓢ</Button>
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-3zewi2-8 MZuqQ"><path d="M0.97168 1L6.20532 6L11.439 1" stroke="#AEAEAE"></path></svg>
                  </div>
                </FormControl>
                <FormControl sx={{ m: 0, minWidth: 250, }} size="small">

                  <TextField id="outlined-basic" label="total" variant="filled"
                    InputProps={{
                      disableUnderline: true,
                    }} />
                </FormControl>
              </Item>
            </div>

            <Stack direction="row" spacing={0.6} >
              <li className='ratio-li'>10%</li>
              <li className='ratio-li'>25%</li>
              <li className='ratio-li'>50%</li>
              <li className='ratio-li'>75%</li>
              <li className='ratio-li'>100%</li>
            </Stack>
            <Button variant="contained" style={{ backgroundColor: "red", height: "40px", width: "80%", "padding": "10px" }} > sell</Button>
          </Grid>

          <div>
            <span class="" style={{ "color": "gray", fontSize: "14" }}><br />Trading fee rate:&nbsp; 0.05%</span>
          </div>

          <div class="flex" style={{ "width": "100%", "justify-content": "center", }} >
            <a>&emsp;&emsp;</a>

          </div>
        </Grid>
      </Grid>
    </div>
  );

};
export default Triditional;
