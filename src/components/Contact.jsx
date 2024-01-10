import React from "react";

import "./Contact.css";
import { Icon } from "@iconify/react";

import company from "../images/contact/companyHeadquarters.png";

function Contact() {
  return (
    <div className="contact--container">
      <h1>Contact Us and Start your Dream Construction</h1>
      <div className="company--headquarters">
        <img src={company} alt="headOffice" />
        <p>
          No.8, First Floor, Main Road, Karaima Nagar, Kundrathur, Chennai -
          600069
        </p>
      </div>
      <div className="our--social--media">
        <p className="social--media--heading">Social Media</p>
        <div className="social--media--container">
          <a
            className="instagram--account social--media"
            href="www.instagram.com"
          >
            <Icon icon="skill-icons:instagram" color="#b3b2ae" />
            <p>@Arunachalam_Infra</p>
          </a>
          <a
            className="facebook--account social--media"
            href="www.facebook.com"
          >
            <Icon icon="logos:facebook" color="#b3b2ae" />
            <p>Arunachalam Infra</p>
          </a>
          <a
            className="whatsapp--account social--media"
            href="www.whatsapp.com"
          >
            <Icon icon="gg:phone" color="#b3b2ae" />
            <p>7338809994</p>
          </a>
          <a className="gmail--account social--media" href="www.gmail.com">
            <Icon icon="ri:mail-line" color="#b3b2ae" />
            <p>arunachalaminfra@gmail.com</p>
          </a>
        </div>
      </div>
      <p className="contact--footer">
        Join with us in your Journey of bringing your architectural dreams to
        life.
        <br />
      </p>
    </div>
  );
}

export default Contact;
