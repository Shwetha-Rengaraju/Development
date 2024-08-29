import React from "react";
import "./contact.css"; 

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <p className="contact-paragraph">
        You can contact us using the following information:
      </p>
      <ul className="contact-list">
        <li className="contact-list-item">
          <strong>Email ID:</strong> sample@123.com
        </li>
        <li className="contact-list-item">
          <strong>Phone Number:</strong> +91 8796054327
        </li>
      </ul>
    </div>
  );
};

export default Contact;

