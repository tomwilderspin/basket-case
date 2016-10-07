import React, { Component } from 'react';

export default class Basket extends Component {

  onClick() {
    return (e) => {
      this.props.clickAction()
    };
  }
  render() {
    return <div><h3>Basket</h3><ul>
    { this.props.products.map((name, index) => {return <li key={index}>{name}</li>;}) }
    </ul><button type="button" onClick={this.onClick()} className="btn btn-default">Checkout</button></div>
  }

}
