import { useState } from 'react';

function BusinessCard({ name, education, jobTitle, company, email }) {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <div className="businessCard">
      <h2>{name}</h2>
      <p className="bc">{jobTitle}</p>
      <p>{company}</p>
      <p>{education}</p>
      
      <button onClick={() => setShowEmail(!showEmail)}>
        {showEmail ? 'Hide Contact' : 'Show Contact'}
      </button>
      
      {showEmail && (
        <p>Email: {email}</p>
      )}
    </div>
  );
}

export default BusinessCard; 