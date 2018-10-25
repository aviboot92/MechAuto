import React from "react";


const Csin = (props) =>{
  return(
    <div>
      <h1>Service Location</h1>
      <form className="form">
          <input
            value={props.fNvalue}
            name="firstName"
            onChange={props.onChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={props.lNvalue}
            name="lastName"
            onChange={props.onChange}
            type="text"
            placeholder="Last Name"
          />
          <input
            value={props.advalue}
            name="address"
            onChange={props.onChange}
            type="text"
            placeholder="Address"
          />
          <input
            value={props.emvalue}
            name="email"
            onChange={props.onChange}
            type="email"
            placeholder="Email"
          />
          <button onClick={props.onClick}>Submit</button>
        </form>
    </div>
  )
}

export default Csin;

