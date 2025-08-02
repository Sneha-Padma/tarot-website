import React from "react";

function Contact() {
  return (
    <div className="App-header" style={{ padding: "20px" }}>
      <h2>Contact Me</h2>
      <p>You can message me directly for Tarot readings & Astrology consultations.</p>

      <h3>💬 WhatsApp</h3>
      <a 
        href="https://wa.link/x5v2q0" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "10px 20px",
          background: "#25D366",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px",
          marginBottom: "20px"
        }}
      >
        👉 Chat with Me on WhatsApp
      </a>

      <h3>💰 Pay me via UPI</h3>
      <p>Scan this QR code to make payments:</p>
      <img src="/qr.jpg" alt="UPI QR Code" width="200px" />
      <p>Or send directly to UPI ID: <strong>padmasneha7@okhdfcbank</strong></p>
    </div>
  );
}

export default Contact;
