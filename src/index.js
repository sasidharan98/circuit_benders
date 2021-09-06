import React, { Suspense } from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import { I18nextProvider } from "react-i18next";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import i18n from "./i18n";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback = {<div style={{'textAlign' : 'center'}}> Loading... </div>}>
    <I18nextProvider i18n={i18n}>
    <App />
    </I18nextProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
)
