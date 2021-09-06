import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import {  useTranslation } from 'react-i18next'
import './Login.css'
import ReCAPTCHA from "react-google-recaptcha"
export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const {t} = useTranslation();
  const [verify, setVerify] = useState(false)
  console.log(verify)
  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }
async function onChangeRecaptcha(value){
  console.log("Captcha value", value)
  if(value){
    const response = await fetch("https://e267-183-82-204-235.ngrok.io/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        captcha: value
      })
    }).then((res) => res.json())
    .then((google_response) => {
      console.log(google_response)
      // google_response is the object return by
      // google as a response 
      if (google_response.response === "Successful") {
        setVerify(true)
      }
        else {
          setVerify(false)
          console.log("fail")
        }
      })
    .catch(setVerify(false))

  }
  else{
    setVerify(false)
  }
}
  return (
    <>
    <div className="banner">
       <img src="../img/banner.jpg"  alt="banner" className="banner-img"/>
       </div>
   <div className='signup' >

      <div className="brand-intro">
      <div className="w-100" style={{ maxWidth: "400px" }}>
      <Card className="card-box">
         <h4>{t('Login to get full access')}</h4>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form class="form-css" onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <ReCAPTCHA sitekey="6LcUw0McAAAAAFGex7s_92JjF5qHqUhwk5YF7NO3"onChange={onChangeRecaptcha} />
            <Button  disabled ={!(verify)} className="w-100" type="submit"  style={{marginTop : "10px"}}>
              {t('login')}
            </Button>
          </Form>
          <div className="w-100 text-center mt-3 ">
            <Link to="/forgot-password">{t('Forgot Password?')}</Link>
          </div>
          </Card>
      </div>
      <div className="w-100 text-center mt-2" style={{marginBottom:"10px"}}>
        {t('need')} <Link to="/signup" style={{color: "#007bff"}}>{t('Sign Up')}</Link>
      </div>
              <h4 className="text-center">{t('Partner')}</h4>
              <img src= '../img/amd.png' alt="3d amd"   className="brand-img"/>
              <img src= '../img/nvidia.png' alt="3d nvidia"  className="brand-img"/>
              </div>
              <div className='brand-gif'>
              <img src= '../img/intro-bg.gif' alt="3d model" className="brand-gif-responsive"/>
              </div>
             </div>       
    </>
  )
}
