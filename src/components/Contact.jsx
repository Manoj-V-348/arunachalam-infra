import React, { useEffect } from "react";

import aos from "aos";
import "aos/dist/aos.css";

import "./Contact.css";
import { Icon } from "@iconify/react";

import company from "../images/contact/companyHeadquarters.png";

function Contact() {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="contact--container">
      <h1 data-aos="fade-right">
        Contact Us and Start your Dream Construction
      </h1>
      <div className="company--headquarters">
        <img src={company} alt="headOffice" data-aos="fade-up" />
        <p data-aos="fade-up">
          No.8, First Floor, Main Road, Karaima Nagar, Kundrathur, Chennai -
          600069
        </p>
      </div>

      <div className="map--container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15550.691202296355!2d80.0924359275306!3d12.992767355694973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528aa64f1f758b%3A0xbfca0f9632a31459!2sKundrathur%2C%20Chennai%2C%20Tamil%20Nadu%20600069!5e0!3m2!1sen!2sin!4v1714387483223!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="location--map"
        ></iframe>
      </div>

      <div className="our--social--media" data-aos="fade">
        <p className="social--media--heading">Social Media</p>
        <div className="social--media--container">
          <a
            className="instagram--account social--media--box"
            href="https://www.instagram.com/arunachalaminfra/"
          >
            <Icon icon="skill-icons:instagram" color="#b3b2ae" />
            <p>@Arunachalam_Infra</p>
          </a>
          <a
            className="facebook--account social--media--box"
            href="https://www.facebook.com/profile.php?id=61559151146055"
          >
            <Icon icon="logos:facebook" color="#b3b2ae" />
            <p>Arunachalam Infra</p>
          </a>
          <a
            className="whatsapp--account social--media--box"
            href="https://www.whatsapp.com"
          >
            <Icon icon="gg:phone" color="#b3b2ae" />
            <p>7338809994</p>
          </a>
          <a
            className="gmail--account social--media--box"
            href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvmZDxdJthjMrFpRScPGMnZqpLDrtzGxPmWWJhZTGKHvpfSJzgjwrcmNSJvtvCrJjMNtkg"
          >
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
