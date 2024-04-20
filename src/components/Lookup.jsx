import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
// import ShowDetails from './ShowDetails';

function Lookup({pincode , response }) {
  const [data, setData] = useState();

  useEffect(() =>{
    console.log(response.data[0].Message);
    setData(response.data[0].PostOffice);
    
  },[]);

  console.log(data);





  return (
  
  
   <div>
    <h1>Pincode: {pincode}</h1>
    <span><h2>Message:</h2><h5>{response.data[0].Message}</h5></span>
    <div className='search'><CiSearch /><input type="text" placeholder='Filter' /></div>
    {
      data && data.map((details , index) => {
        return(
          <div key={index}>
          <p>Name : {details.Name}</p>
          <p>Branch Type : {details.BranchType}</p>
          <p>Delivery Status : {details.DeliveryStatus}</p>
          <p>District : {details.District}</p>
          <p>Division : {details.Division}</p>
      </div>
        )
      })
    

    }
    
  </div>
 
   
    
  )
}

export default Lookup