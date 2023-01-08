import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from '@mui/material/Unstable_Grid2';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { maxHeight } from '@mui/system';



import { ProductCard } from '../components'
import { Stack } from '@mui/material';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('16% APR Fixed Earn', '10d', "6.0%"),
  createData('16% APR Fixed Earn', '10d', "9.0%"),
  createData('16% APR Fixed Earn', '10d', "16.0%"),
  createData('16% APR Fixed Earn', '10d', "3.7%"),
  createData('16% APR Fixed Earn', '90d', "16.0%"),
  createData('16% APR Fixed Earn', '10d', "6.0%"),
  createData('16% APR Fixed Earn', '10d', "9.0%"),
  createData('16% APR Fixed Earn', '10d', "16.0%"),
  createData('16% APR Fixed Earn', '10d', "3.7%"),
  createData('16% APR Fixed Earn', '90d', "16.0%"),

];



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


const Earn = () => {




  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };




  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <div className="grid-container" style={{paddingLeft: "3%"}}>

      <Grid container spacing={2}>
        <Grid container lg={8} spacing={4} >

          <TabContext value={value}>
            <Box sx={{ borderBottom: 'none', borderColor: 'black',  }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Fixed Tenor" value="1" />
                <Tab label="Customize" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1" padding="100px">



              <TableContainer component={Paper}  >
                <Table sx={{ "& td, &  th": { border: 0 } }} size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell align="left">Tenor</TableCell>
                      <TableCell align="left">APR</TableCell>
                      <TableCell align="left"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                      >
                        <TableCell style={{ width: '55%' }} component="th" scope="row" >

                          <div className="flex-container">
                            <img style={{ "width": "10%", "padding": "10px" }} src="/img/btc.png" />

                            
                            <a>{row.name}</a>
                            <img style={{ "width": "30%", "padding": "10px" }} src="/img/banner1.png" />
                          </div>

                        </TableCell>
                        <TableCell align="left">{row.calories}</TableCell>
                        <TableCell align="left">{row.fat}</TableCell>
                        <TableCell style={{ width: '20%' }} align="left"><Button variant="contained" color="secondary">Subscribe</Button></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
          </TabContext>

        </Grid>


        <Grid container lg={3} spacing={4}>


          <div style={{ "width": "100%", "height": "50px" }}></div>




          <div style={{ paddingLeft: "10%" }} >


            <Stack spacing={2}>
              <ProductCard title="24% APR Fixed Earn"
                subheader="December 14, 2022" mediatitle="Dual Currency"
                image="/img/btc.png" image1="/img/dualcurrency.png"
                intro="Dual Currency Product is a non-principal protected investment product with floating return."
                text1="What is Dual Currency?"
                text2="Dual Currency Product is a non-principal protected investment product with floating return. The yield of the product is secured at the time of purchase, while the currency in which the product will be settled changes depending on how the Settlement Price compares with the Linked Price.
              A short-term investment product, Dual Currency could potentially provide very high returns. We have also designed it with a selection of tenors, catering to your varying risk appetite.
              Dual Currency - BTC"
                text3="For BTC dual currency products, the Investment Currency is BTC - i.e. you purchase the product with BTC. The Settlement Currency could be either BTC or USDC, depending on how the Settlement Price (BTC’s price at the time of settlement; a detailed calculation method is provided below) compares with the Linked Price: if the Settlement Price is higher than the Linked Price, you will receive the return in BTC; if the Settlement Price is lower than the Linked Price, you will receive the return in USDC."
              >
              </ProductCard>

              <ProductCard title="20% APR Fixed Earn"
                subheader="December 14, 2022" mediatitle="Dual Currency"
                image="/img/btc.png" image1="/img/dualcurrency1.png"
                intro="Dual Currency Product is a non-principal protected investment product with floating return."
                text1="What is Dual Currency?"
                text2="Dual Currency Product is a non-principal protected investment product with floating return. The yield of the product is secured at the time of purchase, while the currency in which the product will be settled changes depending on how the Settlement Price compares with the Linked Price.
              A short-term investment product, Dual Currency could potentially provide very high returns. We have also designed it with a selection of tenors, catering to your varying risk appetite.
              Dual Currency - BTC"
                text3="For BTC dual currency products, the Investment Currency is BTC - i.e. you purchase the product with BTC. The Settlement Currency could be either BTC or USDC, depending on how the Settlement Price (BTC’s price at the time of settlement; a detailed calculation method is provided below) compares with the Linked Price: if the Settlement Price is higher than the Linked Price, you will receive the return in BTC; if the Settlement Price is lower than the Linked Price, you will receive the return in USDC."
              >
              </ProductCard>

              <ProductCard title="16% APR Fixed Earn"
                subheader="December 14, 2022" mediatitle="Dual Currency"
                image="/img/btc.png" image1="/img/dualcurrency.png"
                intro="Dual Currency Product is a non-principal protected investment product with floating return."
                text1="What is Dual Currency?"
                text2="Dual Currency Product is a non-principal protected investment product with floating return. The yield of the product is secured at the time of purchase, while the currency in which the product will be settled changes depending on how the Settlement Price compares with the Linked Price.
              A short-term investment product, Dual Currency could potentially provide very high returns. We have also designed it with a selection of tenors, catering to your varying risk appetite.
              Dual Currency - BTC"
                text3="For BTC dual currency products, the Investment Currency is BTC - i.e. you purchase the product with BTC. The Settlement Currency could be either BTC or USDC, depending on how the Settlement Price (BTC’s price at the time of settlement; a detailed calculation method is provided below) compares with the Linked Price: if the Settlement Price is higher than the Linked Price, you will receive the return in BTC; if the Settlement Price is lower than the Linked Price, you will receive the return in USDC."
              >
              </ProductCard>

              <ProductCard title="12% APR Fixed Earn"
                subheader="December 14, 2022" mediatitle="Dual Currency"
                image="/img/btc.png" image1="/img/dualcurrency.png"
                intro="Dual Currency Product is a non-principal protected investment product with floating return."
                text1="What is Dual Currency?"
                text2="Dual Currency Product is a non-principal protected investment product with floating return. The yield of the product is secured at the time of purchase, while the currency in which the product will be settled changes depending on how the Settlement Price compares with the Linked Price.
              A short-term investment product, Dual Currency could potentially provide very high returns. We have also designed it with a selection of tenors, catering to your varying risk appetite.
              Dual Currency - BTC"
                text3="For BTC dual currency products, the Investment Currency is BTC - i.e. you purchase the product with BTC. The Settlement Currency could be either BTC or USDC, depending on how the Settlement Price (BTC’s price at the time of settlement; a detailed calculation method is provided below) compares with the Linked Price: if the Settlement Price is higher than the Linked Price, you will receive the return in BTC; if the Settlement Price is lower than the Linked Price, you will receive the return in USDC."
              >
              </ProductCard>


            </Stack>



          </div>




        </Grid>
      </Grid>
    </div>
  );

};
export default Earn;
