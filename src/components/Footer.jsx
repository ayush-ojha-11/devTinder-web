import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-2 fixed bottom-0">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Finest
          Platforms
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
