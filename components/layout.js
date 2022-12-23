import Head from "next/head";
import Link from "next/link";

import React, { useState } from "react";
import Image from "next/image";

const Layout = ({ children, pageId }) => {
  return (
    <div className="fondo">
    <center>
        <div className="container">

        <Image
                src="/images/astronomia.png"
                height={80} // Desired size with correct aspect ratio
                width={80} // Desired size with correct aspect ratio
                alt="ojo"/>
              <h1 className="title5">ORION</h1>
        </div>
    </center>
        <a className="btn-neon3" href="/" rel="noopener noreferrer">
          <span id="spanss1"></span>
          <span id="spanss2"></span>
          <span id="spanss3"></span>
          <span id="spanss4"></span>
          IR A INICIO
        </a>
  </div>
  );
};
export default Layout;
