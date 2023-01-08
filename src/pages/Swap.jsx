import React from 'react';
import { Slides, Header, Button } from '../components';
import Divider from '@mui/material/Divider';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import Tabs from '@mui/material/Tabs';

import TabPanel from '@mui/lab/TabPanel';


const Swap = () => {
  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };


  const state = {
    seen: false
  };



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


    <div className=" center  rounded-3xl">





      <TabContext value={value}>
        <Box sx={{ borderBottom: 'none', padding: '2%' }}>

          <Tabs onChange={handleChange} aria-label="Tabs">
            <Tab label="uniswap" value="1" />
            <Tab label="quickswap" value="2" />
          </Tabs>
          <TabPanel value="1">


            <div>
              <div class="uniswapdiv">
                <iframe class="ifuniswap" src="https://app.uniswap.org/#/swap" scrolling="no" title="uniswap" frameBorder="0">
                </iframe>
              </div>
            </div>



          </TabPanel>
          <TabPanel value="2">

            <div>
              <div class="quickswapdiv">
                <iframe class="ifquickswap" src="https://quickswap.exchange/#/swap?swapIndex=0&currency0=ETH" scrolling="no" title="uniswap" frameBorder="0">
                </iframe>
              </div>
            </div>
          </TabPanel>

        </Box>
      </TabContext>


    </div>




  );
};
export default Swap;
