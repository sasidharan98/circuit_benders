import React, {useState, useEffect} from "react"
import Signup from "./Signup"
import JsonData from "../data/data.json";
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import { About } from "../Pages/About";
import BootstrapNavbar from "./Navigation";
function App() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
   
      <div>
        <BootstrapNavbar />
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={About} data= {landingPageData} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>

  )
}

export default App
