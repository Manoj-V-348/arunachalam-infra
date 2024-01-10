import { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import Logo from "../assets/ArunachalamInfraLogo.png";
import "./Navbar.css";

function Navbar(props) {
  const navRef = useRef();
  const [navbar, setNavbar] = useState(false);
  const [activeLink, setActiveLink] = useState("homepage"); // Track the active link

  const styles2 = navbar ? { display: "flex" } : { display: "none" };

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleToggle = (category) => {
    if (category === "logo") {
      setActiveLink("homepage"); // Reset active link to homepage when clicking the logo
      props.onToggle("architecture", false);
      props.onToggle("construction", false);
      props.onToggle("interior", false);
      props.onToggle("additional", false);
      props.onToggle("contact", false);
    } else {
      setActiveLink(category); // Set active link when clicking a navigation link
      props.onToggle(category, !props[category]);
    }
  };

  return (
    <>
      <header>
        <div className="logo--container" onClick={() => handleToggle("logo")}>
          <img src={Logo} alt="Logo" className="image--logo" />
        </div>

        <Icon
          icon="heroicons:bars-2"
          width="36"
          className="center--bars"
          onClick={() => setNavbar(!navbar)}
        />

        <nav className="desktop--nav" style={styles2}>
          <a
            href="/#"
            onClick={() => handleToggle("architecture")}
            className={activeLink === "architecture" ? "active" : ""}
          >
            ARCHITECTURE
          </a>

          <a
            href="/#"
            onClick={() => handleToggle("construction")}
            className={activeLink === "construction" ? "active" : ""}
          >
            CONSTRUCTION
          </a>

          <a
            href="/#"
            onClick={() => handleToggle("interior")}
            className={activeLink === "interior" ? "active" : ""}
          >
            INTERIOR
          </a>

          <a
            href="/#"
            onClick={() => handleToggle("additional")}
            className={activeLink === "additional" ? "active" : ""}
          >
            ADDITIONAL SERVICES
          </a>

          <a href="/#" onClick={() => setNavbar(false)}>
            <Icon icon="maki:cross" />
          </a>
        </nav>

        <nav ref={navRef} className="mobile--navbar">
          <a
            href="/#"
            onClick={() => handleToggle("architecture")}
            className={activeLink === "architecture" ? "active" : ""}
          >
            ARCHITECTURE
          </a>
          <a
            href="/#"
            onClick={() => handleToggle("construction")}
            className={activeLink === "construction" ? "active" : ""}
          >
            CONSTRUCTION
          </a>
          <a
            href="/#"
            onClick={() => handleToggle("interior")}
            className={activeLink === "interior" ? "active" : ""}
          >
            INTERIOR
          </a>
          <a
            href="/#"
            onClick={() => handleToggle("additional")}
            className={activeLink === "additional" ? "active" : ""}
          >
            ADDITIONAL SERVICES
          </a>
          <a href="/#" onClick={() => handleToggle("contact")}>
            CONTACT
          </a>

          <button onClick={showNavbar} className="nav-btn nav-close-btn">
            <Icon icon="maki:cross" />
          </button>
        </nav>
        <button onClick={showNavbar} className="nav-btn" id="bars--btn">
          <Icon icon="uim:bars" />
        </button>
        <a
          href="/#"
          className="contact"
          onClick={() => handleToggle("contact")}
        >
          <p>CONTACT</p>
          <Icon
            icon="tdesign:arrow-up"
            color="#262523"
            width="24"
            className="arrow"
          />
        </a>
      </header>
    </>
  );
}

export default Navbar;
