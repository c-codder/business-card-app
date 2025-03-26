import { useState } from 'react';
import BusinessCard from './components/BusinessCard.jsx';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const businessCards = [
    {
      logo: '/src/logo-iso-768x428.webp',
      name: 'Stanislav',
      education: 'Bachelor of Science in Computer Science',
      jobTitle: 'Developer',
      company: 'Lemonsoft',
      email: 'staswork@edu.vamk.fi',
      phone: '+3583256458',
      address: 'Kauppakatu 58, Vaasa, Finland',

    },
    {
      logo: '/src/logo-iso-768x428.webp',
      name: 'Yevheniii',
      education: 'Master of Science in Computer Science',
      jobTitle: 'Main Developer',
      company: 'Lemonsoft',
      email: 'jekawork@edu.vamk.fi',
      phone: '+3583256458',
      address: 'Kauppakatu 58, Vaasa, Finland',
    },
    {
      logo: '/src/logo-iso-768x428.webp',
      name: 'Artem',
      education: 'Bachelor of Science in Computer Science',
      jobTitle: 'Developer',
      company: 'Lemonsoft',
      email: 'artemwork@edu.vamk.fi',
      phone: '+3583256458',
      address: 'Kauppakatu 58, Vaasa, Finland',
    }
  ];

  const filteredCards = businessCards.filter(card => 
    card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Business Card Directory</h1>
      
      <input
        type="text"
        placeholder="Search by name, company, or title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ margin: '20px', padding: '10px', width: '300px', borderRadius: '4px' }}
      />

      <div className="cards-container">
        {filteredCards.map((card, index) => (
          <BusinessCard
            key={index}
            name={card.name}
            education={card.education}
            jobTitle={card.jobTitle}
            company={card.company}
            email={card.email}
            phone={card.phone}
            address={card.address}
            logo={card.logo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;