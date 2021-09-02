import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import {  useTranslation } from 'react-i18next'
import './Login.css'
export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const {t} = useTranslation();
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

  return (
    <>
   <marquee><h1>{t('marq')}</h1></marquee>
   <div className='signup'>
      <div className="brand-intro">
      <div className="w-100" style={{ maxWidth: "400px" }}>
      <Card style={{ "padding" : "40px" }}>
         <h3>{t('Login to get full access')}</h3>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              {t('login')}
            </Button>
          </Form>
          <div className="w-100 text-center mt-3 signup">
            <Link to="/forgot-password">{t('Forgot Password?')}</Link>
          </div>
          </Card>
      </div>
      <div className="w-100 text-center mt-2">
        {t('need')} <Link to="/signup">{t('Sign Up')}</Link>
      </div>
              <h4 className="text-center">{t('Partner')}</h4>
              <img src= '../img/amd.png' alt="3d model"   className="brand-img"/>
              <img src= '../img/nvidia.png' alt="3d model"  className="brand-img"/>
              </div>
              <div className='brand-gif'>
              <img src= '../img/intro-bg.gif' alt="3d model" className="brand-gif-responsive"/>
              </div>
             </div>       
    </>
  )
}
