import React, { Component } from 'react';
import '../Home.css';
import axios from 'axios';
import Header from '../Header/Header';
// import Footer from './Footer/Footer';
import Form from '../Form';
import List from '../List';

class Inventory extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inventory: [],
      price: ""
    }
  }

  componentDidMount() {

    this.getCars()

  }
  
  getCars = () => {
    axios.get('/api/inventory').then(res=>{
      console.log('response from get cars',res.data);
      this.setState({
        inventory: res.data
      })
    })
  }

  soldCars = (id) => {
    // console.log("soldCars", id);
    axios.delete(`/api/sold/${id}`).then(res =>{
      // console.log('inventory after delete', res.data);
      this.setState({
        inventory: res.data
      })
    })
  }

  createVehicle = inventory => {
    axios.post(`/api/createVehicle`, inventory).then(res =>{
      this.setState({
        inventory: res.data
      })
    })
  }

  updatePrice = (id, price) => {
    axios.put(`/api/updatePrice/${id}`, {price: price.toString()}).then(res =>{
      
      this.setState({
        inventory: res.data
      })
    })
}

handleChange = e => {
  let price = e.target.value;
  this.setState ({
      price : price
  })
}


editCar = (e) => {
  // console.log(e.target.value)
  let indexValue = e.target.value

  console.log(indexValue)

  this.updatePrice(indexValue, this.state.price)
  this.setState({
    price: ""
  })
}

  render() {
    const mappedInventory = this.state.inventory.map((car, index) => {
      return (

        
        <div>
          <List price={this.state.inventory[index].price} inventory={car} handleChange={this.handleChange}
          key={car.id} />
          <button value={car.id} onClick={this.editCar}>Edit</button>
          <button value={car.id} onClick={e => this.soldCars(e.target.value)}>Delete</button>
        </div>

      )
    })
    
    return (
        <div className="home-base">
                
        <Header/>
      <div className='main-div'>
        {/* <div className="header">
          <h1 className="Textheader">The Art of Cars</h1>
        </div> */}
        <div className="word-container">
        
        {/* <Form create={this.createVehicle}/> */}
        </div>
        <div>{mappedInventory}</div>
        
      </div>
      </div>
    )
  }
}





export default Inventory;