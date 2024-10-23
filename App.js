import React from 'react';
import './App.css';
import { HouseIcon, MessageCircleHeart, User, Star } from 'lucide-react';

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
          <img src="logoaelin.png" style={{ width: '70px', height: '70px' }} alt="Logo Aelin" />
        </div>

        {/* Menu Items */}
        <div className="menu-items">
          <button className="menu-button">
            <HouseIcon className="icon-menu" />
          </button>
          <button className="menu-button">
            <MessageCircleHeart className="icon-menu" />
          </button>
          <button className="menu-button-active">
            <User className="user-icon" />
          </button>
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
            </div>
          </div>

          {/* Lista de comunidades favoritas */}
          <div className="communities-list">
            <div className="favorite-communities">
              <div className="communities-header">
                <Star className="star-icon" color="#6b46c1" />
                <h2 className="community-title">Comunidades Favoritas</h2>
              </div>

              {favoriteCommunities.map((community) => (
                <button 
                  style={{borderColor: '#6b46c1'}}
                  key={community.id}
                  className="card-comunities"
                >
                  <User color="#6b46c1" className="community-icon" />
                  <span className="community-name">{community.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
