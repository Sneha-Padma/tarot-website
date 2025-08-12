import React from "react";

function Home() {
  return (
    <div className="App-header" style={{ padding: "2rem", textAlign: "center" }}>
      {/* Heading */}
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        Welcome to Sneha's Tarot & Astrology Platform 🔮
      </h1>

      {/* Intro text */}
      <p style={{ fontSize: "1.2rem", maxWidth: "700px", margin: "0 auto 1.5rem", lineHeight: "1.6" }}>
        Connect with me for Tarot readings, Vedic astrology, and spiritual guidance!
      </p>

      {/* Linktree button */}
      <a
        href="https://linktr.ee/SnehaPadma_Astro_TarotGuide?utm_source=linktree_admin_share"
        target="_blank"
        rel="noopener noreferrer"
        className="linktree-btn"
        style={{
          display: "inline-block",
          padding: "0.8rem 1.5rem",
          fontSize: "1.1rem",
          fontWeight: "bold",
          color: "#fff",
          background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
          borderRadius: "8px",
          textDecoration: "none",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
        onMouseOver={(e) => {
          e.target.style.transform = "scale(1.05)";
          e.target.style.boxShadow = "0 6px 12px rgba(0,0,0,0.15)";
        }}
        onMouseOut={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
        }}
      >
        🌟 Visit My Linktree
      </a>

      {/* About Me Section */}
      <div
        style={{
          marginTop: "3rem",
          padding: "1.5rem",
          background: "linear-gradient(135deg, #fff7e6, #ffe0b2)",
          borderRadius: "12px",
          border: "1px solid #f0c27b",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
        }}
      >
        <h2 style={{ marginBottom: "1rem" }}>About Me</h2>
        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            fontSize: "1.1rem",
            lineHeight: "1.6",
            color: "#333",
          }}
        >
          Hi, I'm <strong>Sneha Padma</strong> — the creator of this Tarot & Astrology platform.
          With a passion for intuitive guidance and digital creativity, I help people explore clarity
          through Tarot readings, Vedic astrology, and personalized spiritual insights.
          Whether you're seeking direction or healing energy, this platform is built to guide you.
        </p>
      </div>
    </div>
  );
}

export default Home;
