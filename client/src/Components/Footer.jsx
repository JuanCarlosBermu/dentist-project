import React from "react";

function Footer() {
    const year = new Date().getFullYear();

    return (
    
      <footer className="footer">
        <p>© {year} Dental Clinic</p>
      </footer>
    );
  }

  export default Footer;