import { Team } from "../components/Team";
import './About.css'
import React from "react";
import { Contact } from "../components/contact";
export const About = (props) => {
  return (
 
    <div id="about">
      <div className="container">
        <div className="row">

          <div className="col-xs-12 col-md-6">
            <div className="about-text ">
              <h2>About Us</h2>
              <p>{props.About ? props.About.paragraph : "loading..."}</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.About
                      ? props.About.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
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
