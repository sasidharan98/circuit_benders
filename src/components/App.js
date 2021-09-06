import React, {useState, useEffect} from "react"
import Signup from "./Signup"
// import JsonData from "../data/data.json";
import { AuthProvider } from "../contexts/AuthContext"
import ReactGA from 'react-ga'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Reducer from '../redux/reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import { About } from "../Pages/About";
import BootstrapNavbar from "./Navigation";
import PaymentStatus from "./PaymentStatus";
import Donate from "./donate";
import {  useTranslation } from 'react-i18next'
import Translatedpage from './translatedpage';
import Product from "./Product"
import Cart from './Cart';
import DetailedProduct from './DetailedProduct';
import Footer from "./Footer"
import Home from "./Home"

function App() {
  const {t} = useTranslation();
  const [landingPageData, setLandingPageData] = useState({});
  const d = t('JsonData', { returnObjects: true})
  useEffect(() => {
    setLandingPageData(d);
    ReactGA.pageview(window.location.pathname);
  }, []);
 
const cartItemsInLocalStorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

const INITIAL_STATE = {
cart: {
  cartItems: cartItemsInLocalStorage,
},
}
ReactGA.initialize('UA-181567210-2')
  const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);

  if (landingPageData!== undefined){
  return (

      <div>
         
          <Provider store={createStoreWithMiddleware(Reducer,INITIAL_STATE, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
            <AuthProvider>
        <BootstrapNavbar />
        <Router>

            <Switch>     
              <Route exact path="/" component={Home} />
              <PrivateRoute exact path="/about" component={About} data= {landingPageData} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />  
              <Route path="/donate" component={Donate} />
              <Route path='/home' component={Home} />
              <PrivateRoute path="/product/:id" component={DetailedProduct} />
              <PrivateRoute path="/product" component={Product} />
              <PrivateRoute path="/cart" component={Cart} />
              <Route path="/translate" component={Translatedpage} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <PrivateRoute exact path="/status/:orderId" component={PaymentStatus} />
            </Switch>
        
        </Router>
        <Footer data={landingPageData.Contact}/>
        </AuthProvider>
        </Provider>
      </div>

  )
    }
    else{
      return (
        <div></div>
      )
    }
}

export default App
