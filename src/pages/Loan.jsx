import React from 'react';
import { Slides, Header } from '../components';


import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import FormControl from '@mui/material/FormControl';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Loan = () => {
  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };


  const state = {
    seen: false
  };


  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };



  return (


    <>

      <Box sx={{ flexGrow: 1, padding: '3%', }} >
        <Grid container spacing={2}>
          <Grid container lg={12} spacing={4} style={{ "align-items": "center", }} >
            <Grid lg={3}>
              <Item>Email subscribe section</Item>
            </Grid>
            <Grid lg={3}>
              <div className="oan-container">
                <p style={{ "textAlign": "center", "font-size": '10px' }}>Total loan amount</p><p style={{ "textAlign": "center", "font-size": '18px', }}>0.00</p>
                <p style={{ "font-size": '10px', "textAlign": "center", }}>Total Collateral</p><p style={{ "textAlign": "center", "font-size": '18px', }}>0.00</p>
              </div>
            </Grid>
            <Grid lg={3}>
              <div className="oan-container">
                <p style={{ "textAlign": "center", "font-size": '10px' }}>Outstanding intrest</p><p style={{ "textAlign": "center", "font-size": '18px', }}>0.00</p>
                <p style={{ "font-size": '10px', "textAlign": "center", }}>Yesterday's interest</p><p style={{ "textAlign": "center", "font-size": '18px', }}>0.00</p>
              </div>
            </Grid>
            <Grid lg={3}>

              <div style={{ "padding": "10px", "textAlign": "center", "width": '350px', }}>
                <Button size="small" variant="contained">Topup Collateral</Button>
              </div>
              <div style={{ "padding": "10px", "textAlign": "center", "width": '350px', }}>
                <Button size="small" variant="contained">Redeem Collateral</Button>
              </div>


            </Grid>

          </Grid>
          <Grid lg={7} >

            <div style={{ backgroundColor: "", opacity: "90%"}}>
              <div>Get a loan</div>






              <Item className='flex' style={{ "align-items": "center", }}>
                <FormControl sx={{ m: 1, minWidth: 100 }} >

                  <div className='flex' style={{ "align-items": "center", }}>
                    <Button className='flex'><img src="/img/btc.png" width="20px" />BTC</Button>
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-3zewi2-8 MZuqQ"><path d="M0.97168 1L6.20532 6L11.439 1" stroke="#AEAEAE"></path></svg>
                  </div>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 400, }} size="small">

                  <TextField id="outlined-basic" label="Collateral" variant="filled"
                    InputProps={{
                      disableUnderline: true,
                    }} />
                </FormControl>

              </Item>


              <div style={{ padding: "30px", }} >
                <Divider flexItem>
                  VERTICAL
                </Divider>
              </div>

              <Item className='flex' style={{ "align-items": "center", }}>
                <FormControl sx={{ m: 1, minWidth: 100 }} >

                  <div className='flex' style={{ "align-items": "center", }}>
                    <Button className='flex'><img src="/img/dollar.png" width="20px" />USDⓢ</Button>
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-3zewi2-8 MZuqQ"><path d="M0.97168 1L6.20532 6L11.439 1" stroke="#AEAEAE"></path></svg>
                  </div>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 400, }} size="small">

                  <TextField id="outlined-basic" label="I want to borrow" variant="filled"
                    InputProps={{
                      disableUnderline: true,
                    }} />
                </FormControl>

              </Item>






              <div style={{ paddingTop: "5%", "align-items": "center", "height": "20%" }}>

                <Grid container lg={12} spacing={4} >
                  <Stack centered direction="row" spacing={5}>
                    <a>&nbsp;</a>
                    <div className='flex'><a>TVL ration:</a><a style={{ "color": "green" }}> 65%</a></div>
                    <div className='flex'><a>Margin call level:</a><a style={{ "color": "red" }}> 76.96%</a></div>
                    <div className='flex'> <a>Liquidation level:</a><a style={{ "color": "orange" }}> 90.90%</a></div>

                  </Stack>

                </Grid>
              </div>

              <div >

                <p>Duration:</p>
                <Grid container lg={12} spacing={4} >
                  <Grid lg={3}>
                    <Item>7d</Item>
                  </Grid>
                  <Grid lg={3}>
                    <Item>30dl</Item>
                  </Grid>
                  <Grid lg={3}>
                    <Item>90d</Item>
                  </Grid>
                  <Grid lg={3}>
                    <Item>long term</Item>
                  </Grid>
                </Grid>
              </div>

            </div>
          </Grid>

          <Grid lg={5}>

            <div >




              <section class="formula-wrapper">
                <div class="formula___1W5KK">
                  <div class="entry-panel___RxvD3">
                    <div class="iconCoin___377Bj"><img alt="BTC" src="/img/btc.png" width="56" />
                      <img alt="arrow" src="/img/arrow.png" width="56" />
                      <img alt="USD" src="/img/tether.png" width="56" /></div>
                    <div class="formula-item___-AVzv">
                      <div><span>Annualized interest rate </span></div>
                      <div class="value___3Degl"><span class="value-previously-rate___20-D_ ">0%</span></div>
                    </div>
                    <div class="formula-item___-AVzv">
                      <div>Daily interest rate</div>
                      <div class="value___3Degl">0%</div>
                    </div>
                    <div class="formula-item___-AVzv">
                      <div>Daily interest</div>
                      <div class="value___3Degl">0 USDⓢ </div>
                    </div>
                  </div>
                  <div class="formula-item___-AVzv output-panel___2Gkup">
                    <div class="formula-item___-AVzv">
                      <div>Total interest</div>
                      <div class="value___3Degl">0 USDⓢ </div>
                    </div>
                    <div class="formula-item___-AVzv">
                      <div>Total repayment</div>
                      <div class="value___3Degl">0 USDⓢ </div>
                    </div>

                  </div>
                  <div class="flex justify-center"><Button variant="contained"><span>Start Borrowing</span></Button></div>
                </div>
              </section>








            </div>

          </Grid>


        </Grid>
      </Box>

    </>

  );
};
export default Loan;
