import React, {useState, useEffect} from 'react'
import { Alert, Button } from 'react-bootstrap';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import { Link } from 'react-router-dom';
import "./Home.css"
import TextArea from 'antd/lib/input/TextArea';
const Home = (props) => {
    const [show, setShow] = useState(false);
    {console.log(show)}
    {console.log(props.location.state)}
    if (props.location.state != undefined) {
        return (
            <>
          <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Oh snap! You forget to Login!</Alert.Heading>
            <p>
              Kindly login to continue Shopping
            </p>
            <p>
                Click here to <Link to="/login"> Login</Link>
            </p>
          </Alert>
         
          </>
        );
      }
      else{
          return( <>
          <h3 style={{backgroundColor:"rgb(59, 58, 58)", margin: '0px', color: '#fff', textAlign: 'center'}}>Welcome to Circuitbenders
         <br /> India's best PCB shell corporation</h3>
          <ImageSlider slides={SliderData} />
          </>)
      }
      return <></>
}

export default Home
