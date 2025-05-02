// src/components/BotCard.jsx
import React from "react";

function BotCard({ bot, onClick, onDelete }) {
  const { name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot;

  return (
    <div className="card" onClick={() => onClick(bot)} style={{ cursor: "pointer" }}>
      <img src={avatar_url} alt={name} />
      <h3>{name} <span>({bot_class})</span></h3>
      <p>{catchphrase}</p>
      <div>
        ❤️ {health} &nbsp; ⚡ {damage} &nbsp; 🛡 {armor}
      </div>
      {onDelete && (
        <button
          onClick={(e) => {
            e.stopPropagation(); // prevent parent click
            onDelete(bot);
          }}
          style={{ color: "white", background: "red", marginTop: "8px" }}
        >
          ❌ Discharge
        </button>
      )}
    </div>
  );
}

export default BotCard;
