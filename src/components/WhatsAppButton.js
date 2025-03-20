import React from 'react';

const WhatsAppButton = ({ phoneNumber, message }) => {
  // Ensure default values are used if props are undefined
  const finalPhoneNumber = phoneNumber || '918667853720';
  const finalMessage = message || 'Hello, I am interested in your services/courses.';

  const whatsappUrl = `https://wa.me/${finalPhoneNumber}?text=${encodeURIComponent(finalMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

WhatsAppButton.defaultProps = {
  phoneNumber: '918667853720', // Default WhatsApp number
  message: 'Hello, I am interested in your services/courses.', // Default message
};

export default WhatsAppButton;