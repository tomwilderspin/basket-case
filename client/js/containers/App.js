import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './../components/Header';

import CheckList from './../components/CheckList';
import Basket from './../components/Basket';

//actions
import { fetchCustomerDetails, selectProduct, checkout } from './../actions/actions';

//app is a container  (its redux aware) includes click actions for dumb child
//components

class App extends Component {

  componentDidMount() {
    //fire fetch for product list
    this.props.getCustomerDetails();
  }

  render() {
    return <div className="container">
                <Header title={this.props.pageTitle} />
                <div className="row">
                <div className="col-md-4"><CheckList key={'list1'} clickAction={this.props.productClickAction} title={'Sports'} listItems={this.props.sports} /></div>
                <div className="col-md-4"><CheckList key={'list2'} clickAction={this.props.productClickAction} title={'News'} listItems={this.props.news} /></div>
                <div className="col-md-4"><Basket clickAction={this.props.checkoutClickAction} products={this.props.basket} /></div>
                </div>
            </div>
  }
}

//wire redux state items to class props
const mapStateToProps = (state) => {
    const { pageTitle, products, basket } = state;

    return products.reduce((groups, product) => {
      switch(product.category) {
        case 'Sports' : groups.sports = [product, ...groups.sports];
        break;
        case 'News'   : groups.news = [product, ...groups.news];
      }
      return groups;
    }, {
      sports:[],
      news:[],
      pageTitle: pageTitle,
      basket: basket
    });
}

//add dispatch actions to events
const mapDispatchToProps = (dispatch) => {
    return {

        getCustomerDetails: () => {
          dispatch(fetchCustomerDetails())
        },
        productClickAction: (product) => {
          dispatch(selectProduct(product))
        },
        checkoutClickAction: () => {
          dispatch(checkout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
