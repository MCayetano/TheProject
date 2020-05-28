import React, { Component } from "react";

class List extends Component {
    constructor(props) {
        super(props)
        this.state ={
            userInput: ""
        }
    }

    handleChange = e => {
        let userInput = e.target.value;
        this.setState ({
            userInput : userInput
        })
      }

  render() {
    const { inventory } = this.props;
    return (
      <div className="Boarder">
        <div className="Text">
        <p>{inventory.id}</p>
        <p>{inventory.make}</p>
        <p>{inventory.model}</p>
        <p>{inventory.year}</p>
        <p>{inventory.price}</p>
        <p>{inventory.description}</p>
        <input
          placeholder="Price"
          value={this.props.price}
          onChange={this.props.handleChange}
        ></input>
        </div>
        <div className="ImageDiv">
        <img src={inventory.image} className="Image" alt="Vehicle"/>
        </div>
      </div>
    );
  }
}

export default List;