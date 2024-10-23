import React from 'react';
import './App.css'; // Importa o arquivo CSS
import { HouseIcon, MessageCircleHeart, MessageCircle, Settings, User, Star } from 'lucide-react';

const MenuItem = ({ imageSrc, label }) => (
  <div className="menu-item">
    <img src={imageSrc} alt={label} className="menu-icon" />
    <span>{label}</span>
  </div>
);

const ProfilePage = () => {

  const favoriteCommunities = [
    { id: 1, name: 'Casa Da Mulher', imageSrc: 'casadamulher.jpg' },
    { id: 2, name: 'Mulheres na Tecnologia', imageSrc: 'tecm.png' },
    { id: 3, name: 'Mãezinhas', imageSrc: 'mulheres.jpg' },
  ];

  return (
    <div className="profile-page">
      {/* Left Menu */}
      
      <div className="menu">
  <div className="logo-aelin">
    <img src='logoaelin.png' style={{ width: '70px', height: '70px' }} />
  </div>

  <div className='menu-icon'>
    <div className="menu-item">
      <HouseIcon color='#6b46c1' label="Home" />
      <span className="menu-label" />
    </div>
    <div className="menu-item">
      <MessageCircleHeart color='#6b46c1' label="Comunidades" />
      <span className="menu-label"/>
    </div>
    <div className="menu-item">
      <MessageCircle color='#6b46c1' label="Psicólogo" />
      <span className="menu-label"/>
    </div>
    <div className="menu-item">
      <Settings color='#6b46c1' label="Configurações" />
      <span className="menu-label"/>
    </div>
  </div>
</div>

      {/* Main Content */}
      <div className="content">
        <div className="profile-card">
          <div className="profile-info">
            <img src="abraxos.png" alt="Profile" className="profile-avatar" />
            <div>
              <h1 className="profile-name">Ana Sophia Batista</h1>
              <p className="profile-date">Desde 2019</p>
              <div className='card-description-stats'>
              <p className="stats-description">Gosto de animais, pricipalmente cachorrinhos.</p>
            </div>
            </div>
          </div>

<div className="favorite-communities">
  <div className="communities-list">

  <Star color='#6b46c1' label="Comunidades Favoritas" /><span className='comunity-title'>Comunidades Favoritas</span>
    {favoriteCommunities.map((community) => (
      <div key={community.id} className="card-comunities">
        <img src={community.imageSrc} alt={community.name} className="comunities-image" />
        <span className="community-name">{community.name}</span>
        <p className="card-description-comuni">{community.description}</p>
      </div>
    ))}
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
