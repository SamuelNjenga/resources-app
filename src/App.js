import React from 'react';
import './App.css';
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom';
import Expenses from './Expenses';
import Category from './Category';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/layouts/Footer';
import NotFoundPage from './Components/NotFoundPage';
import HomeOne from './HomeOne';
import Details from './Details';
import Reviews from './Reviews';
import News from './News';
import Contacts from './Contacts';

function App() {
  return (
  <div>
    <Router>
        <Switch>
             <Route path = '/' exact={true} component={Home}/>
             <Route path = '/categories' exact={true} component={Category} />
             <Route path = '/expenses' exact={true} component={HomeOne} />
             <Route path = '/details' exact={true} component={Details} />
             <Route path = '/reviews' exact={true} component={Reviews} />
             <Route path = '/news' exact={true} component={News} />
             <Route path = '/contacts' exact={true} component={Contacts} />
             <Route  exact = {true} component={NotFoundPage}/>
        </Switch>
    </Router>
    <Footer></Footer>
  </div>
  );
}

export default App;
