import React from 'react';
import './App.css'; // Importa o arquivo CSS
import { HouseIcon, MessageCircleHeart, MessageCircle, Settings, User } from 'lucide-react';

const MenuItem = ({ imageSrc, label }) => (
  <div className="menu-item">
    <img src={imageSrc} alt={label} className="menu-icon" />
    <span>{label}</span>
  </div>
);

const ProfilePage = () => {
  const savedNews = [
    { id: 1, image: 'mulheres.jpg', alt: 'News 1', description: 'Girl Power'},
    { id: 2, image: 'woman.jpg', alt: 'News 2', description: 'A luta pela igualdade de gênero' },
    { id: 3, image: 'empoderamento.jpg', alt: 'News 3', description: 'O empodepramento feminino na sociedade atual' },
  ];

  const likedPosts = [
    { id: 1, image: '/api/placeholder/100/100', alt: 'Post 1', description: 'Comunidade de apoio às mulheres.' },
    { id: 2, image: '/api/placeholder/100/100', alt: 'Post 2', description: 'Iniciativa para promover mulheres na tecnologia.' },
    { id: 3, image: '/api/placeholder/100/100', alt: 'Post 3', description: 'Grupo de mães em busca de apoio.'  },
  ];

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
      <span className="menu-label">Home</span>
    </div>
    <div className="menu-item">
      <MessageCircleHeart color='#6b46c1' label="Comunidades" />
      <span className="menu-label">Comunidades</span>
    </div>
    <div className="menu-item">
      <MessageCircle color='#6b46c1' label="Psicólogo" />
      <span className="menu-label">Psicólogo</span>
    </div>
    <div className="menu-item">
      <Settings color='#6b46c1' label="Configurações" />
      <span className="menu-label">Configurações</span>
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

          <div className="profile-stats">
            <div className="stats-item">
              <p className="stats-number">5</p>
              <p className="stats-label">Comunidades</p>
            </div>
            <div className="stats-item">
              <p className="stats-number">10</p>
              <p className="stats-label">Noticias Salvas</p>
            </div>
            <div className="stats-item">
              <p className="stats-number">10</p>
              <p className="stats-label">Posts Curtidos</p>
            </div>
          </div>

          <div className="saved-news">
  <h2 className="section-title">Notícias Salvas</h2>
  <div className="news-list">
    {savedNews.map((news) => (
      <div key={news.id} className="card">
        <img src={news.image} alt={news.alt} className="news-image" />
        <p className="card-description">{news.description}</p>
      </div>
    ))}
  </div>
</div>

<div className="favorite-communities">
  <h2 className="section-title">Comunidades Favoritas</h2>
  <div className="communities-list">
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
