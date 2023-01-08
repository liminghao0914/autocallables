import React, { useState } from "react";
import { AppBar, Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import { Link } from 'react-router-dom';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { links, iconData } from '../data/dummy';


const Navibar = () => {


  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };



  return (
    <>

      <div className="divnavibar flex" style={{ "align-items": "center"}}>

        <Link to="/"  className="items-center gap-3  flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900" style={{"padding": "10px"}}>
          <img className="rounded-lg h-14 w-18"  src={iconData[4].image} alt="" /> <span>Metaharvest</span>
        </Link>

        <div class="dropdown">
          <div class="flex"><a class="dropbtn flex"><p>Trade</p><ArrowDropDownIcon /></a></div>
          <div class="dropdown-content">
            <Link to="/swap"  href="/swap"><button className="flex" style={{"align-items": "center", "padding": "5px"}} > <img src="/img/swap.png"  width="20%" /><p>&nbsp;&nbsp;Swap</p></button></Link>
            <Link to="/spot"  href="/spot"><button className="flex" style={{"align-items": "center", "padding": "5px"}} > <img src="/img/spot.png"  width="20%" /><p>&nbsp;&nbsp;Spot</p></button></Link>
            <Link to="/margin"  href="/spot"><button className="flex" style={{"align-items": "center", "padding": "5px"}} > <img src="/img/margin.png"  width="20%" /><p>&nbsp;&nbsp;Margin</p></button></Link>
            <Link to="/triditional"  href="/spot"><button className="flex" style={{"align-items": "center", "padding": "5px"}} > <img src="/img/traditional.png"  width="20%" /><p>&nbsp;&nbsp;Triditional</p></button></Link>
          </div>
        </div>

        <div class="dropdown">
          <button class="dropbtn" > <a href="/earn">Earn</a></button>
        </div>

        <div class="dropdown">
          <button class="dropbtn" > <a href="/dashboard">Dashboard</a></button>
        </div>

        <div class="dropdown">
          <button class="dropbtn flex"><p>Invest</p><ArrowDropDownIcon /></button>
          <div class="dropdown-content">
          <Link to="/dualcurrency"  href="/dualcurrency"><button className="flex" style={{"align-items": "center", "padding": "5px"}} > <img src="/img/dualcurrency.png"  width="20%" /><p>&nbsp;&nbsp;DualCurrency</p></button></Link>
          <Link to="/staking"  href="/staking"><button className="flex" style={{"align-items": "center", "padding": "5px"}} > <img src="/img/staking.png"  width="20%" /><p>&nbsp;&nbsp;Staking</p></button></Link>
          </div>
        </div>



        <div class="dropdown">
          <button class="dropbtn" > <a href="/loan">Loan</a></button>
        </div>



        <div class="dropdown">
          <button class="dropbtn" > <a href="/club">Club</a></button>
        </div>
      </div>

    </>
  );
}

export default Navibar;



