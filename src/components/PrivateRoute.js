import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function PrivateRoute({ component: Component, data, ...rest }) {
  const { currentUser } = useAuth()

  return (
    <Route
      {...rest}
      render={props => {
        console.log(data)
        return currentUser ? <Component {...props} {...data} /> :  <Redirect to={{pathname: "/home",  state: { reason: 'User is not active' }}} />
      }}
    ></Route>
  )
}
