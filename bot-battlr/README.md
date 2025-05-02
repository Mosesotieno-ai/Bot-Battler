# 🤖 Bot Battlr

Welcome to Bot Battlr! A React-powered app to build your robot army.

## Features

- Browse and enlist bots
- Release or permanently delete bots
- Fetch bots from a JSON server

## Setup

1. Clone repo and `cd` into the folder
2. Run `npm install`
3. Start server: `json-server --watch db.json --port 8001`
4. Start app: `npm start`

## Tech Stack

- React
- JSON Server

## project structure
src/
├── components/
│   ├── BotCollection.jsx       # Shows all available bots
│   ├── YourBotArmy.jsx         # Displays enlisted bots
│   ├── BotCard.jsx             # UI for a single bot (used in both collections)
│   ├── BotSpecs.jsx            # (Advanced) Detailed view of a single bot
│   └── SortBar.jsx             # (Advanced) Sorting options
├── App.jsx                     # Main app layout & state management
├── index.js                    # Renders <App />
