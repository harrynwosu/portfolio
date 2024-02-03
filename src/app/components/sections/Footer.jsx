import React from "react";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span
          className="text-4xl md:text-5xl text-white font-semibold"
          style={{ fontFamily: "Brush Script MT, cursive" }}
        >
          Harold
        </span>
        <p className="text-slate-600">All Rights reserved. 2024.</p>
      </div>
    </footer>
  );
};

export default Footer;
