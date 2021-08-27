import { Team } from "../components/Team";
import './About.css'
import React from "react";
import { Contact } from "../components/contact";
export const About = (props) => {
  return (
 
    <div id="about">
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <div className="about-text">
              <h2>About Us</h2>
              <p className=" text-left ">{props.About ? props.About.paragraph : "loading..."}</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className=" col-">
                  <ul>
                    {props.About
                      ? props.About.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col">
                  <ul >
                    {props.About
                      ? props.About.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Team data={props.Team}/>
      <Contact data={props.Contact} />
    </div>
  );
};
