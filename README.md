# 🐋 WhaleTrucker — Élite Command Center

Luxury dark-mode crypto dashboard powered by CoinGecko API v3.

-----

## Setup

1. Clone this repo
1. Copy `config.example.js` → `config.js`
1. Open `config.js` and paste your CoinGecko API key
1. Open `index.html` in your browser — done.

-----

## Project Structure

```
whale-trucker-command-center/
├── index.html          # Main app
├── config.js           # API keys (local only, not on GitHub)
├── config.example.js   # Config template
├── .gitignore          # Ignores config.js
└── README.md           # You are here
```

-----

## Stack

- Vanilla HTML / CSS / JS
- CoinGecko API v3
- No framework. No BS.

-----

## Security

`config.js` is listed in `.gitignore`  
Never push your API key to any public repository.

-----

## Data

Live prices refresh every 60 seconds.  
Falls back to demo data if API limit is hit.
