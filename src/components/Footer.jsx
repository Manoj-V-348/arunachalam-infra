import React from "react";
import { Icon } from "@iconify/react";

import "./Footer.css";

function Footer() {
  return (
    <footer id="footer">
      <h1>// Contact</h1>
      <div className="contact--details">
        <div className="social--media">
          <p className="heading--text">Social Media</p>
          <a
            className="insta"
            href="https://www.instagram.com/arunachalaminfra/"
          >
            <Icon icon="skill-icons:instagram" color="#b3b2ae" />
            <p>@Arunachalam_Infra</p>
          </a>
          <a
            className="facebook"
            href="https://www.facebook.com/profile.php?id=61559151146055"
          >
            <Icon icon="logos:facebook" color="#b3b2ae" />
            <p>Arunachalam Infra</p>
          </a>
        </div>

        <div className="other--contact" id="other--details">
          <p className="heading--text">Other</p>
          <a className="phone" href="https://www.whatsapp.com">
            <Icon icon="gg:phone" color="#b3b2ae" />
            <p>7338809994</p>
          </a>
          <a
            className="mail"
            href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvmZDxdJthjMrFpRScPGMnZqpLDrtzGxPmWWJhZTGKHvpfSJzgjwrcmNSJvtvCrJjMNtkg"
          >
            <Icon icon="ri:mail-line" color="#b3b2ae" />
            <p>arunachalaminfra@gmail.com</p>
          </a>
        </div>

        <div className="real--details">
          <p className="heading--text">Location</p>
          <div className="location">
            <Icon icon="mdi:location" color="#b3b2ae" />
            <p>No.8, First Floor, Main Road</p>
          </div>
          <p>Karaima Nagar, Kundrathur</p>
          <div className="branches">
            <Icon icon="et:map" color="#b3b2ae" />
            <p>Chennai - 600069</p>
          </div>
        </div>
      </div>
      <div className="copyright">
        <Icon icon="ph:copyright-light" color="#b3b2ae" />
        <p>2023. Arunachalam Infra. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
