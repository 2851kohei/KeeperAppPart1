//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
import React from "react";

function Footer() {
  // get a year data
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <footer>
      <p>Copy right {year}</p>
    </footer>
  );
}

export default Footer;
