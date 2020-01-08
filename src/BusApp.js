import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './BusComponent/Navbar';
import Cart from './BusComponent/Cart/Cart';
import Details from './BusComponent/Details';
import ProductList from './BusComponent/ProductList';
import PageDefault from './BusComponent/PageDefault';
import Modal from './BusComponent/Modal';
import MainToDo from './BusComponent/MainToDo';
class BusApp extends Component {
   
    render() { 
        return (
            <React.Fragment>
             <Navbar />
             <Switch>
                 <Route exact path = "/" component={ProductList} />
                 <Route path = "/detail" component={Details} />
                 <Route path = "/cart" component={Cart} />
                 <Route path ="/example" component={MainToDo} />
                 <Route  component={PageDefault} />
             </Switch>
             <Modal />
            </React.Fragment> );
    }
}
 
export default BusApp;