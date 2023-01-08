import React from 'react';
import { Slides, Header } from '../components';


const Assets = () => {
  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };


  const state = {
    seen: false
  };






  return (
<div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="" title="Asset" />
      <Slides>
      </Slides>
    </div >
  );
};
export default Assets;
