import React, {useState, useEffect} from "react"
import Signup from "./Signup"
import JsonData from "../data/data.json";
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Reducer from '../_reducers';
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
import Product from "./product";
import { ThemeProvider } from 'styled-components';
function App() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);
  const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#EF6C00',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#EF6C00',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };
  return (
   
      <div>
        <ThemeProvider theme={theme}>
          <Provider
    store={createStoreWithMiddleware(
      Reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
        <BootstrapNavbar />
        </Provider>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={About} data= {landingPageData} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />  
              <Route path="/product" component={Product} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route exact path="/status/:orderId" component={PaymentStatus} />
            </Switch>
          </AuthProvider>
        </Router>
        </ThemeProvider>
      </div>

  )
}

export default App
