
import React, { Component } from 'react';

//dropdown list lists out local auths
export default class CheckList extends Component {

  render() {

    let listItems = this.props.listItems.map((item, index) => {
      return <ListItem clickAction={this.props.clickAction}  key={index} item={item}/>
    });

    return <div><h3>{this.props.title}</h3><div className="btn-group btn-group-vertical" data-toggle="buttons">{listItems}</div></div>;
  }

}

class ListItem extends Component {

  constructor (props) {
    super(props);

    this.state = {
      checked: false
    };

    this.onChanged = this.onChanged.bind(this);
  }

  onClick(item) {
    return (e) => {

      this.props.clickAction(item)
    };
  }

  onChanged(e) {
    this.setState({
      checked: this.state.checked ? false : true
    });
  }

  render() {

    return <div><input type="radio" name={this.props.name} onChange={this.onChanged} onClick={this.onClick(this.props.item)} id={this.props.item.name} checked={this.state.checked}/><span> - {this.props.item.name}</span></div>
  }

}
