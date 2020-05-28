import React, { Component } from 'react';
// import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {

        price: '',
        make: '',
        model: '',
        year: '',
        description: ''
        }
    }

    handleChange = e => {
        let {value,name} = e.target
        this.setState ({
            [name] : value
        })
    }

    handleClick = () => {
        const {make, model, year, description, price} = this.state
        let newCar = {
            price,
            make,
            model,
            year,
            description
    }
    this.props.create(newCar)

}


    render() {
        return (
            <div className="searchBar">


                <div className="mmy"> 
                <input 
                    type='text'
                    name='price'
                    value={this.state.price}
                    placeholder='price'
                    onChange={this.handleChange} />
 

                
                
                <input
                    type='text'
                    name='make'
                    value={this.state.make}
                    placeholder='make'
                    onChange={this.handleChange} />


                <input
                    type='text'
                    name='model'
                    value={this.state.model}
                    placeholder='model'
                    onChange={this.handleChange} />

                <input
                    type='text'
                    name='year'
                    value={this.state.year}
                    placeholder='year'
                    onChange={this.handleChange} />
                    

                    
                
                    <input
                    type='text'
                    name='description'
                    value={this.state.description}
                    placeholder='description'
                    onChange={this.handleChange} />
                    <button onClick={this.handleClick}>Add</button>

                    </div>
        
                


            </div>
        )
    }
}



export default Form;