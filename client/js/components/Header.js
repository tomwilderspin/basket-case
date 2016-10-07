
import React, { Component } from 'react';

//simple page header component 
export default class Header extends Component {
  render() {
    return <div className= "page-header page-title">
                    <h1>{this.props.title}</h1>
              </div>
  }
}
