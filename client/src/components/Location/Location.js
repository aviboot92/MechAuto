import React, { Component } from "react";
import API from "../../utils/API";
import LocForm from "../LocForm"


class Location extends Component {
  state = {
    zipcode: "",
    isZipValid: false,
    databaseZip:[]
  };

  componentDidMount() {
    this.getDataBaseZip();
  }

  
  getDataBaseZip = () =>{
    API.getZipCode()
      .then(res =>{
        this.setState({databaseZip:res.data});
        console.log(`State of databaseZip[] is ${this.state.databaseZip}`);
      })
      .catch(err=> console.log(err));      
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchZipCode(this.state.zipcode);
    this.setState({
      zipcode : ""
    });
  };

  searchZipCode = query => {
      query = parseInt(query,10);
      console.log(`I am query for searchZipCode() ${query}`);
      let valid = false;
      const validity = this.state.databaseZip.forEach(value=>{
        if(value === query){
          console.log("I am there");
          valid = true;
        }
      });
      console.log(`Valid is ${valid}`);
      if(valid){
        this.setState({isZipValid : true}, ()=>{
          console.log(`Now state is uptodate ${this.state.isZipValid}`);
        });
      } else{
        this.setState((prevState,props) =>{
          return{
            isZipValid : false
          }
        }, ()=>{
          console.log(`Now state is uptodate ${this.state.isZipValid}`);
        });
      }
        
  };

  render(){
    return(
      <LocForm 
        name ="zipcode" 
        placeholder ="ZIPCODE" 
        value={this.state.zipcode} 
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}
    />
    ); 
  }

 
}

export default Location;
