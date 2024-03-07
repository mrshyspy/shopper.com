import React from "react";

export default function Map() {

  return (
    <div className="map">
      <iframe
        title="Shoppers.com"
        src="https://www.google.com/maps/place/JECRC+University/@26.7755388,75.8749111,17z/data=!4m6!3m5!1s0x396dc892b8f05399:0x43fbca7105eca800!8m2!3d26.775534!4d75.877486!16s%2Fm%2F0j9pz8_?entry=ttu"
        width={600}
        height={450}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}


// Coming This Error: [Violation] Added non-passive event listener to a scroll-blocking <some> event. Consider marking event handler as 'passive' to make the page more responsive. See <URL>