import React from 'react';
import {  Header, AccountTab } from '../components';

const Accounts = () => {




  return (
    <div className=" account ">

<div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="" title="Vaults" />

      <p className="text-lg text-gray-400">Total Amount($): </p>
    <p className="text-3xl font-extrabold tracking-tight text-slate-900">$ 2,812,341</p>

{/*      <Tabs /> */}
<AccountTab></AccountTab>

    </div >
    </div>
  );
};
export default Accounts;
