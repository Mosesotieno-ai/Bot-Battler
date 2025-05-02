// src/components/YourBotArmy.jsx
import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, onRelease, onDelete }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className="bot-grid">
        {army.map(bot => (
          <BotCard
            key={bot.id}
            bot={bot}
            onClick={onRelease}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
