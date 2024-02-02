import React from "react";

import "./notFound.css";


export default function NotFound() {
  return (
    <div className='errorPage'>
      <h1 className='topText'>Opaa, onde cê pensa que tá indo?</h1>
      <img src="./404.svg" alt="" />
      <div>404</div>
    </div>
  );
}
