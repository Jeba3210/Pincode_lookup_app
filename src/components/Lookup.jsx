import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import "./Lookup.css"
// import Showdetails from".ShowDetails.jsx"

import ShowDetails from './ShowDetails';

function Lookup({pincode , response }) {
  const [data, setData] = useState([]);
  const [filter , SetFilter] = useState();

  useEffect(() =>{
    console.log(response.data[0].Message);
    setData(response.data[0].PostOffice);
    
  },[]);

  console.log(data);





  return (
  
  
   <div>
    <div id="header">
        <h1>Pincode: {pincode}</h1>
        <span className='span'><h2>Message:</h2><p>{response.data[0].Message}</p></span>
        <div className='search'><FaSearch /><input id='input' type="text" placeholder='Filter' /></div>
    </div>
   
    <div id='div_container'>
    {
      data && data.map((details , index) => <ShowDetails key={index} name={details.Name} branchType={details.BranchType} deliveryStatus={details.DeliveryStatus} district={details.District} division={details.Division}/>)
    

    }
    </div>
    
  </div>
 
    
  )
}

export default Lookup