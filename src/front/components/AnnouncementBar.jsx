import React from "react";
import "./../styles/announcement-bar.css";

export default function AnnouncementBar({
  phone = "+34 600 123 456",
  promo = "Book here and enjoy an exclusive 10% off all our pet funeral services!",
}) {
  return (
    <div className="announcement-bar">
      <div className="announcement-inner">
        <div className="announcement-line phone">
          <span className="label">CONTACT NUMBER</span>
          <a href={`tel:${phone}`} className="value">{phone}</a>
        </div>

        {/*<div className="announcement-line promo">
          Book here and enjoy an exclusive <strong>10% off</strong> all our pet funeral services!
        </div>*/}
      </div>
    </div>
  );
}