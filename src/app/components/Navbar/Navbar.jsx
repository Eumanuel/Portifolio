import { Link } from "react-router-dom";

import { LinkedinLogo, GithubLogo, InstagramLogo, WhatsappLogo,Envelope } from "phosphor-react";

import React, { useState } from "react";

// Tippy.JS
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import "tippy.js/themes/translucent.css";
import "tippy.js/animations/shift-away.css";

import "./navbar.css";

import useWindowSize from "../../hooks/useWindowSize";

export default function Navbar() {
  const windowWidth = useWindowSize();

  const [mailText,setMailText] = useState("E-Mail");

  const copyMail = async(e) => {
    e.preventDefault();
    navigator.clipboard.writeText("contato@eumanuel.dev");
    setMailText("Copiado!");
    await new Promise(r => setTimeout(r, 2500));
    setMailText("E-Mail");
  };

  return (
    <div className="navbar">
      <Link to="/" className='navbarLeft'>
        Eumanuel .Dev
      </Link>
      <div className="navbarCenter">
        <Tippy
          content="Linkedin"
          placement={`${windowWidth <= 768 ? "top" : "top"}`}
          arrow={false}
          theme="translucent"
        >
          <a href='https://www.linkedin.com/in/emanuel-ribeiro-8705611b9/' target="_blank" rel="noreferrer">
            <LinkedinLogo size={32} weight="light"/>
          </a>
        </Tippy>
        <Tippy
          content="GitHub"
          placement={`${windowWidth <= 768 ? "top" : "top"}`}
          arrow={false}
          theme="translucent"
        >
          <a href='https://github.com/Eumanuel/' target="_blank" rel="noreferrer">
            <GithubLogo size={32} weight="light"/>
          </a>
        </Tippy>
        <Tippy
          content="Instagram"
          placement={`${windowWidth <= 768 ? "top" : "top"}`}
          arrow={false}
          theme="translucent"
        >
          <a href='https://www.instagram.com/eumanuelllll/' target="_blank" rel="noreferrer">
            <InstagramLogo size={32} weight="light"/>
          </a>
        </Tippy>
        <Tippy
          content="WhatsApp"
          placement={`${windowWidth <= 768 ? "top" : "top"}`}
          arrow={false}
          theme="translucent"
        >
          <a href='https://contate.me/eumanuel' target="_blank" rel="noreferrer">
            <WhatsappLogo size={32} weight="light"/>
          </a>
        </Tippy>
        <Tippy
          content={mailText}
          placement={`${windowWidth <= 768 ? "top" : "top"}`}
          arrow={false}
          theme="translucent"
        >
          <a onClick={copyMail}>
            <Envelope size={32} weight="light"/>
          </a>
        </Tippy>
      </div>
      <div className="navbarRight"><h3>Página em construção! Veja o progresso no GitHub!</h3></div>
    </div>
  );
}
