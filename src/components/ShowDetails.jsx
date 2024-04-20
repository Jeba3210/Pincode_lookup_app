import React from 'react'
import "./ShowDetails.css"

function ShowDetails({name, branchType, deliveryStatus, district,division}) {
    return(
            <div id='details'>
            <div>Name : {name}</div>
            <div>Branch Type : {branchType}</div>
            <div>Delivery Status : {deliveryStatus}</div>
            <div>District : {district}</div>
            <div>Division : {division}</div>
        </div>
          )
}

export default ShowDetails