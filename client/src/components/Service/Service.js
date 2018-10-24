import React from "react";


const Service = (props) =>{
    const services = props.serviceCar;
    let carSer = services[0].service;
    let serPrice = services[0].price;
    console.log(`Service: ${carSer} Price: ${serPrice}`);

          return(
            <div>
            <h1>Please choose your <b>Service</b> from the list below </h1>
            <ul>
                {services.map(service =>{
                    return (<li>
                        <input type="checkbox" name={service.service} value={service.price}/> <span>{service.service.toUpperCase()} 
                        </span>: <span> {service.price}</span><br/>
                          </li>)    
                }) 
                }
          </ul>

          </div>
  );
}

export default Service;

