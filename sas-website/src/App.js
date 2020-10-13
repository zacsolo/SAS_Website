import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import SignUp from './components/pages/SignUp/SignUp';
import Footer from './components/pages/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/services'>
          <Services />
        </Route>
        <Route path='/products'>
          <Products />
        </Route>
        <Route path='/sign-up'>
          <SignUp />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
