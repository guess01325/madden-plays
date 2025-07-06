import React from "react";
import "../Assets/Layout.css";

import Footer from "./Footer";
import Header from "./Header";

export default function Layout(props) {
  return (
    <div className="layout">
      <Header />
      <main className="layout-main">
        {props.children}
      </main>
      <Footer className="footer" />
    </div>
  );
}