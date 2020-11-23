import React from "react";
import {BrowserRouter as Router, Switch , Route} from "react-router-dom";
import Home from './containers/home'
import Item from './containers/item'
import Cart from './containers/cart'
import NavBar from './components/navbar'
import ProductPage from './containers/product'


function Routers(){
    return(
        <Router>
            <NavBar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/product' component={ProductPage} />
                <Route path='/item/:slug' component={Item} />
                <Route path='/cart' component={Cart } />

                
            </Switch>
        </Router>
    )

}
export default Routers;