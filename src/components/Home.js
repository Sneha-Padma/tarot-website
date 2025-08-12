import React from "react";

function Home() {
  return (
    <div className="App-header">
      <h1>Welcome to Sneha's Tarot & Astrology Platform 🔮</h1>
      <p>Connect with me for Tarot readings, Vedic astrology, and spiritual guidance!</p>

      <a
        href="https://linktr.ee/SnehaPadma_Astro_TarotGuide?utm_source=linktree_admin_share"
        target="_blank"
        rel="noopener noreferrer"
        className="linktree-btn"
      >
        🌟 Visit My Linktree
      </a>

      {/* About Me Section */}
      <div style={{ marginTop: '3rem', padding: '1.5rem', backgroundColor: '#f9f9f9', borderRadius: '12px' }}>
        <h2>About Me</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
          Hi, I'm Sneha Padma — the creator of this Tarot & Astrology platform. With a passion for intuitive guidance
          and digital creativity, I help people explore clarity through Tarot readings, Vedic astrology, and personalized
          spiritual insights. Whether you're seeking direction or healing energy, this platform is built to guide you.
        </p>
      </div>
    </div>
  );
}

export default Home;
