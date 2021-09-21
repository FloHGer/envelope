import React from 'react'
import Address from './Address.jsx'
import Stamp from './Stamp.jsx';

export default function Envelope(){
  return(
    <div className='envelope'>

      <div className='sender'>
        <Address></Address>
      </div>

      <div className='recipient'>
        <Address></Address>
      </div>

      <div className='stamp'>
        <Stamp></Stamp>
      </div>
    </div>
  );
}