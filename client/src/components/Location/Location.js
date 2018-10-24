import React, { Component } from "react";
import API from "../../utils/API";
import LocForm from "../LocForm"
import Nav from "../Nav";
import Service from "../Service";


class Location extends Component {
  state = {
    zipcode: "",
    isZipValid: false,
    databaseZip:[],
    carMake:"",
    databaseAllServices :[],
    databaseCarMake:[],
    iscarButtonClicked: false
  };

  componentDidMount() {
    this.getDataBaseZip();
    this.getDataBaseCarMake();
  }
//  Car based function
  handleCarChange = (e) =>{
    this.setState({carMake: e.target.value});
  }

  getDataBaseCarMake = () =>{
    API.getCarMake()
      .then(res =>{
        this.setState({databaseCarMake:res.data});
      })
      .catch(err=> console.log(err));      
  };
  getDataBaseZip = () =>{
    API.getZipCode()
      .then(res =>{
        this.setState({databaseZip:res.data});
        // console.log(`State of databaseZip[] is ${this.state.databaseZip}`);
      })
      .catch(err=> console.log(err));      
  };
  
  handleCarSubmit = event => {
    event.preventDefault();
    let car = this.state.carMake.toLowerCase();
    const carId = this.validateCarmakeId(car)[0].id;
    console.log(carId);
    this.getDataBaseServices(carId);
  };

  validateCarmakeId = (car) => {
   return this.state.databaseCarMake.filter((cars) => {
            const {make} = cars;
            const makeLower = make.toLowerCase();
            return (makeLower === car);
          });
  };

  getDataBaseServices = (carMakeId) =>{
    API.getAllServices(carMakeId)
      .then(res =>{
        this.setState({databaseAllServices:res.data , iscarButtonClicked: true}, () =>{
          for(let i = 0 ; i<this.state.databaseAllServices.length; i++){
            console.log(`databaseAllServices ${this.state.databaseAllServices[i]}`);
          }
          
        });
      })
      .catch(err=> console.log(err));      
  };
  

  // Location Related Functions
  handleLocSubmit = event => {
    event.preventDefault();
    this.searchZipCode(this.state.zipcode);
    this.setState({
      zipcode : ""
    });
  };

  searchZipCode = query => {
          query = parseInt(query,10);
          let valid = false;
          this.state.databaseZip.forEach(value=>{
            if(value === query){
              valid = true;
            }
          });
          // console.log(`Valid is ${valid}`);
          if(valid){
            this.setState({isZipValid : true}, ()=>{
              // console.log(`Now state is uptodate ${this.state.isZipValid}`);
            });
          } else{
            this.setState((prevState,props) =>{
              return{
                isZipValid : false
              }
            }, ()=>{
              // console.log(`Now state is uptodate ${this.state.isZipValid}`);
            });
          }     
};

handleLocChange = event => {
  // Getting the value and name of the input which triggered the change
  let value = event.target.value;
  const name = event.target.name;

  // Updating the input's state
  this.setState({
    [name]: value
  });
};

getDataBaseZip = () =>{
  API.getZipCode()
    .then(res =>{
      this.setState({databaseZip:res.data});
      // console.log(`State of databaseZip[] is ${this.state.databaseZip}`);
    })
    .catch(err=> console.log(err));      
};



 

  render(){
    return(
      <div>
          <Nav 
          handleCarChange={this.handleCarChange} 
          handleCarSubmit ={this.handleCarSubmit} 
          value={this.state.carMake}
          carB = {this.state.iscarButtonClicked}/>

          <LocForm 
            name ="zipcode" 
            placeholder ="ZIPCODE" 
            value={this.state.zipcode} 
            handleLocChange={this.handleLocChange}
            handleLocSubmit={this.handleLocSubmit}/>

         {this.state.isZipValid ? (<Service serviceCar = {this.state.databaseAllServices}/>) : (<h2 className="text-center"> Please enter a valid ZipCode</h2>)}
    </div>

    ); 
  }

 
}

export default Location;
