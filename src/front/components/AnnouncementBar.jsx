import React from "react";
import "../styles/announcement-bar.css";

export default function AnnouncementBar({
  phone = "+34 600 123 456",
  promo = "Book here and enjoy an exclusive 10% off all our pet funeral services!"
}) {
  return (
    <div className="announcement-bar">
      <div className="container d-flex flex-column flex-md-row justify-content-center align-items-center gap-2">
        <div className="announcement-phone">
          <span className="me-2">CONTACT NUMBER</span>
          <a href={`tel:${phone}`} className="fw-semibold">{phone}</a>
        </div>

        
      </div>
      <div className="announcement-promo text-center">
          Book here and enjoy an exclusive <strong>10% off</strong> all our pet funeral services!
        </div>
    </div>
  );
}
