import React, { useState, useEffect, useRef } from 'react';
import {
    GridComponent,
    ColumnDirective,
    ColumnsDirective,
    Page,
    Inject
} from '@syncfusion/ej2-react-grids';
import { Ajax } from '@syncfusion/ej2-base';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

import avatar3 from '../data/Safeguard1.jpg'
//import axios from 'axios';

        let datatmp = [];

const App = () => {
    const [data, setData] = useState([]);
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [country, setCountry] = useState('');
    const [report, setReport] = useState('');



    useEffect(() => {

        const ajax = new Ajax();
                ajax.send();

        ajax.onSuccess = (data: any) => {
          setData([]);
        }

    }, []);


  const dataupdate = () => {


    datatmp = [...datatmp, {
          EmployeeID: message , 
          Name: name,
          Title: title,
          HireDate: date,
          Country: country,
          ReportsTo: report,
          EmployeeImage:
          avatar3,
      }];

setData(datatmp);

  };




  const [modal] = useState(false);


  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };




 const handleChange  = event =>{
  setMessage(event.target.value);
 }

 const handleChange1  = event =>{
  setName(event.target.value);
 }

 const handleChange2  = event =>{
  setTitle(event.target.value);
 }

 const handleChange3  = event =>{
  setDate(event.target.value);
 }

 const handleChange4  = event =>{
  setCountry(event.target.value);
 }

 const handleChange5  = event =>{
  setReport(event.target.value);
 }





    return (
        <div style={{ margin: '10%', marginTop: '5%' }}>
            <h1>add more data</h1>


            <div style={{ display: "flex", justifyContent: "right", alignItems: "right", margin: "10px" }} >
      <Button variant="outlined" onClick={handleClickOpen}>
        + Add Wallet
      </Button>
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle sx={{ m: 0, p: 2 }} >Add Asset Wallet</DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
            Asset Name.
          </DialogContentText>
          <TextField id="EmployeeID" label="EmployeeID" variant="outlined" type='number' onChange={handleChange} value={message} />
          <TextField id="Name" label="Name" variant="outlined" type="text" onChange={handleChange1} value={name} />
          <TextField id="Title" label="Title" variant="outlined" type="text" onChange={handleChange2} value={title}/>
          <TextField id="HireDate" label="HireDate" variant="outlined" type='text' onChange={handleChange3} value={date}/>
          <TextField id="Country" label="Country" variant="outlined" type='text' onChange={handleChange4} value={country}/>
          <TextField id="ReportsTo" label="ReportsTo" variant="outlined" type='text' onChange={handleChange5} value={report}/>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={dataupdate}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>


            <Button onClick={dataupdate}>Insert entry</Button>
            <GridComponent dataSource={data}
                allowPaging={true}
                pageSettings={{ pageSize: 6 }}
            >
                <ColumnsDirective>
                    <ColumnDirective field='EmployeeID' headerText='EmployeeID' textAlign='Right' width='100' />
                    <ColumnDirective field='Name' headerText='Name' width='150' />
                    <ColumnDirective field='Title' headerText='Title' />
                    <ColumnDirective field='HireDate' headerText='HireDate' />
                    <ColumnDirective field='Country' textAlign='Right' format='C2' width='100' />
                    <ColumnDirective field='ReportsTo' textAlign='Right' format='C2' width='100' />
                </ColumnsDirective>
                <Inject services={[Page]} />
            </GridComponent>
        </div>
    );
}

export default App;