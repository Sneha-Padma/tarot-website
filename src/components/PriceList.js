import React from "react";

function PriceList() {
  return (
    <div className="App-header">
      <h1>💫 Tarot & Astrology Pricing 💫</h1>
       <ul style={{ listStyle: "none", padding: 0, textAlign: "left" }}>
        <li>🔮 Tarot Reading: ₹500 per session</li>
        <li>🌙 Vedic Astrology: ₹1000 per session</li>
        <li>✨ Compatibility Report: ₹750</li>
        <li>🌟 Spiritual Guidance: ₹600 per session</li>
      </ul>
      <p style={{ marginTop: "20px" }}>
        📞 For customized packages, please contact me directly.
      </p>
    </div>
  );
}

export default PriceList;
