import Head from "next/head";
import Link from "next/link";
import ViewCount from "../components/viewCount";
import React, { useState } from "react";
import Image from "next/image";

const Layout = ({ children, pageId }) => {
  return (
  <div>
  <center>
      <div className="container">
        <h1 className="title5">ORION</h1>
      </div>
    </center>
        <a className="btn-neon2" href="/form">
          <span id="spans1"></span>
          <span id="spans2"></span>
          <span id="spans3"></span>
          <span id="spans4"></span>
          SUBIR MATERIAL
        </a>
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
