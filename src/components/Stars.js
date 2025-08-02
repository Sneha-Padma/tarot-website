import React, { useEffect } from 'react';
import './Stars.css';

const Stars = () => {
  useEffect(() => {
    const container = document.querySelector('.stars');
    if (!container) return;

    // Clear any old stars
    container.innerHTML = '';

    // Create 100 stars
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(star);
    }
  }, []); // <- run only once on mount

  return <div className="stars"></div>;
};

export default Stars;
