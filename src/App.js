import React, { useState } from "react";
import  { useEffect } from "react";
import './App.css';
import Header from "./Header";
import { auth } from "./firebase";
import Home from "./Home";
import Checkout from "./checkout"
import Payment from "./payment"
import Login from "./login";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import CheckoutProduct from "./checkoutproduct";
import {useStateValue} from './StateProvider'
import {loadStripe} from  "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import  Chat from "./chat"
import Orders from "./orders"
import Imgslide from "./imgslide";
import Homeimage from "./homeimages";
import ImageSlider from "react-auto-image-slider";
import Buyers from "./Buyers"
const promise=loadStripe("pk_test_51M4xOpSAaDoP6rqlM7EwS3ijqW6TYaxfBbCSFNrpLb8gifjvhthOsqda2AqZkfw8f75ZXkGIWSEwcxulnbEluhTR00FLXz7sSw");
function App(){
  
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
   <Router>
      <div className="App">
     <Switch>
     <Route path="/Imgslide">
           
           <Imgslide/>
           
         </Route>
     <Route path="/Checkout">
           
            <Checkout/>
            
          </Route>
          <Route path="/orders">
             <Header />
            <Orders/>
            
          </Route>   
     <Route path="/CheckoutProducts">
             <Header />
            <CheckoutProduct/>
            
          </Route>
     <Route path="/login">
             
            <Login/>
            
          </Route>
          <Route path="/buyers">
            <Buyers/>
            
          </Route>
     <Route path="/checkout">
             <Header />
            <Checkout/>
            
          </Route>
          <Route path="/payment">
             <Header />
             <Elements stripe={promise}>
             <Payment/>
             </Elements>
          
            
          </Route>
          <Route path="/homeimages">
            <Homeimage/>
          </Route>
     <Route path="/">
     
            <Header />
            <Home />
          </Route>
        
        </Switch>
        </div>
    </Router>
    )
}
export default App;
