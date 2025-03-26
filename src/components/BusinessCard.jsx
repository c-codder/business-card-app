import { useState } from 'react';

function BusinessCard({ name, education, jobTitle, company, email, phone, address, logo }) {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="businessCard">
      <img src={logo} alt={`${name}'s logo`} className="logo" />
      <h2>{name}</h2>
      <p className="bc">{jobTitle}</p>
      <p>{company}</p>
      <p>{education}</p>
      
      <button onClick={() => setShowContact(!showContact)}>
        {showContact ? 'Hide Contact' : 'Show Contact'}
      </button>
      
      {showContact && (
        <div className="contact-details">
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <p>Address: {address}</p>
        </div>
      )}
    </div>
  );
}

export default BusinessCard;