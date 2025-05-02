// src/components/BotCollection.jsx
import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, onEnlist }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h1><strong>Available Bots</strong></h1>
      <div className="bot-grid" style={{justifyContent: "center"}}>
        {bots.map(bot => (
          <BotCard key={bot.id} bot={bot} onClick={onEnlist} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
