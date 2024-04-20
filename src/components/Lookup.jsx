import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";

function Lookup({pincode , response , isApiLoaded}) {
console.log(response.data.data[0].Message);
console.log(response);


  return (
  
    isApiLoaded &&  <div>
    <h1>Pincode: {pincode}</h1>
    <span><h2>Message:</h2><h5>{response.data.data[0].Message}</h5></span>
    <CiSearch />
    <input type="text" placeholder='Filter' />
  </div>
 
   
    
  )
}

export default Lookup