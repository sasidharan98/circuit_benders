import { useState } from 'react'
import emailjs from 'emailjs-com'
import "./Login.css"
import "../Pages/About.css"
import React from 'react'
const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  console.log(props)
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    emailjs
      .sendForm(
        'service_circuitBenders', 'template_8zxtn9q', e.target, 'user_pGiiyOVX9fML61oXRAxAM'
      )
      .then(
        (result) => {
          console.log(result.text)
          console.log(result)
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div>
      <div id='contact'>
        <div className='container  '>
        <div className="form-css">
          <div>
            <div className='row  getintouch'>
              <div>
                <h1>Get In Touch</h1>
                <p>
                  Please fill out the form below to send us an email and we will get back to you as soon as possible
                </p>
              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row '>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Name'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>

                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                </div>
             
                    <div className='form-group'>
                      <input
                        type='numeric'
                        id='number'
                        name='number'
                        className='form-control'
                        placeholder='Mobile Number'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
            
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='6'
                    placeholder='Message'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className='col-smcontact-info contacted'>
            <div className='contact-item'>
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7775.558354022977!2d80.209887!3d12.985971!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1f246cb3fc1a16a7!2sCircuit%20Benders!5e0!3m2!1sen!2sus!4v1629718497105!5m2!1sen!2sus"></iframe>
            </div>
          </div>
          <footer>
           <div className='col-md-12 '>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
