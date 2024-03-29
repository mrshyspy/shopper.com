import React from "react";

export default function Details() {
  return (
    <div className="details">
      <span>GET IN TOUCH</span>
      <h2>Visit one of our company's locations or contact us today</h2>
      <h3>Head Office</h3>
      <div>
        <li>
          <i className="fa-regular fa-map" />
          <p>Alwar, Rajasthan, India</p>
        </li>
        <li>
          <i className="fa-solid fa-phone" />
          <p>+917665373702</p>
        </li>
        <li>
          <i className="fa-regular fa-envelope" />
          <p>sohil.khan.eng@gmail.com</p>
        </li>
        <li>
          <i className="fa-regular fa-clock" />
          <p>10:00 - 18:00(Monday - Sunday)</p>
        </li>
      </div>
    </div>
  );
}
