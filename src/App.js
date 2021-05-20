import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";

import firebase from "firebase/app";
import "firebase/auth";

import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import PageNotFound from "./Pages/PageNotFound";

import { UserContext } from "./Context/UserContext";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

//Firebase init
import firebaseConfig from "./config/firebaseconfig";
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div className='App'>
      <Router>
        <ToastContainer />
        <UserContext.Provider value={{ user, setUser }}>
          <Router>
            <Header></Header>
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route path='/Signin' component={SignIn}></Route>
              <Route path='/Signup' component={SignUp}></Route>
              <Route component={PageNotFound}></Route>
            </Switch>
            <Footer></Footer>
          </Router>
        </UserContext.Provider>
      </Router>
    </div>
  );
};

export default App;
