import React, { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then(setBots);
  }, []);

  function enlistBot(bot) {
    if (!army.find(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  }

  function releaseBot(bot) {
    setArmy(army.filter(b => b.id !== bot.id));
  }

  function deleteBot(bot) {
    fetch(`http://localhost:8001/bots/${bot.id}`, { method: "DELETE" })
      .then(() => {
        setBots(bots.filter(b => b.id !== bot.id));
        releaseBot(bot);
      });
  }

  return (
    <div>
      <YourBotArmy army={army} onRelease={releaseBot} onDelete={deleteBot} />
      <BotCollection bots={bots} onEnlist={enlistBot} />
    </div>
  );
}

export default App;
