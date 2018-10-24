import React from "react";


const Service = (props) =>{
    let carSer = props.serviceCar[0].service;
    let serPrice = props.serviceCar[0].price;
    console.log(`Service: ${carSer} Price: ${serPrice}`);

          return(
            <div>
            <h1>Please choose your <b>Service</b> from the list below </h1>
            <ul>
         
          </ul>

          </div>
  );
}

export default Service;

// {this.state.listOf.map(item =>{
//     return <li>{item.service}</li>
//  }) 
//  }