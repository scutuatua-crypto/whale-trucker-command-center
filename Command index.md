Command index  
  
<!DOCTYPE html>  
  
<html lang="en">  
<head>  
<meta charset="UTF-8">  
<meta name="viewport" content="width=device-width, initial-scale=1.0">  
<title>🐋 WhaleTrucker — Élite Command</title>  
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Cinzel:wght@400;600;700&family=Inconsolata:wght@300;400;500&display=swap" rel="stylesheet">  
<style>  
:root {  
  --obsidian: #04060a;  
  --onyx: #080e14;  
  --carbon: #0d1a24;  
  --slate: #132030;  
  --steel: #1c3045;  
  --gold: #c9a84c;  
  --gold-light: #e8c97a;  
  --gold-dim: #8a6e2a;  
  --champagne: #f0e0a8;  
  --ivory: #d4c4a0;  
  --platinum: #a8b8c4;  
  --fog: #6a8090;  
  --mist: #3a5060;  
  --ice: #c8e4f0;  
  --cyan-deep: #1a8090;  
  --danger: #c84050;  
  --success: #40a868;  
  --font-display: 'Cinzel', serif;  
  --font-body: 'Cormorant Garamond', serif;  
  --font-mono: 'Inconsolata', monospace;  
}  
  
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }  
  
/* GLOBAL: prevent browser white default on inputs/selects */  
input, select, textarea {  
background: rgba(4,6,10,0.9) !important;  
color: var(–ivory) !important;  
color-scheme: dark;  
}  
input::placeholder { color: var(–mist) !important; }  
select option { background: #0d1a24 !important; color: var(–ivory) !important; }  
  
html { scroll-behavior: smooth; }  
  
body {  
background: var(–obsidian);  
color: var(–platinum);  
font-family: var(–font-body);  
font-size: 16px;  
min-height: 100vh;  
overflow-x: hidden;  
cursor: default;  
}  
  
/* ========== LUXURY BACKGROUND ========== */  
.bg-layer {  
position: fixed;  
inset: 0;  
pointer-events: none;  
z-index: 0;  
}  
  
.bg-layer::before {  
content: ‘’;  
position: absolute;  
inset: 0;  
background:  
radial-gradient(ellipse 80% 60% at 10% 10%, rgba(201,168,76,0.06) 0%, transparent 60%),  
radial-gradient(ellipse 60% 80% at 90% 90%, rgba(26,128,144,0.05) 0%, transparent 60%),  
radial-gradient(ellipse 100% 100% at 50% 50%, rgba(13,26,36,0.8) 0%, transparent 100%);  
}  
  
.bg-layer::after {  
content: ‘’;  
position: absolute;  
inset: 0;  
background-image:  
repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(201,168,76,0.015) 60px, rgba(201,168,76,0.015) 61px),  
repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(201,168,76,0.015) 60px, rgba(201,168,76,0.015) 61px);  
}  
  
.grain {  
position: fixed;  
inset: -50%;  
width: 200%;  
height: 200%;  
pointer-events: none;  
z-index: 1;  
opacity: 0.025;  
background-image: url(“data:image/svg+xml,%3Csvg viewBox=‘0 0 256 256’ xmlns=‘http://www.w3.org/2000/svg’%3E%3Cfilter id=‘noise’%3E%3CfeTurbulence type=‘fractalNoise’ baseFrequency=‘0.9’ numOctaves=‘4’ stitchTiles=‘stitch’/%3E%3C/filter%3E%3Crect width=‘100%25’ height=‘100%25’ filter=‘url(%23noise)’/%3E%3C/svg%3E”);  
animation: grain-drift 8s steps(10) infinite;  
}  
  
@keyframes grain-drift {  
0%,100%{transform:translate(0,0)}10%{transform:translate(-2%,-2%)}20%{transform:translate(2%,1%)}30%{transform:translate(-1%,2%)}40%{transform:translate(1%,-1%)}50%{transform:translate(-2%,2%)}60%{transform:translate(2%,-2%)}70%{transform:translate(-1%,1%)}80%{transform:translate(1%,2%)}90%{transform:translate(-2%,-1%)}  
}  
  
.wrap { position: relative; z-index: 2; }  
  
/* ========== HEADER ========== */  
header {  
position: sticky;  
top: 0;  
z-index: 200;  
background: rgba(4,6,10,0.92);  
backdrop-filter: blur(20px) saturate(1.4);  
border-bottom: 1px solid rgba(201,168,76,0.18);  
}  
  
.header-inner {  
max-width: 1440px;  
margin: 0 auto;  
padding: 0 48px;  
height: 72px;  
display: flex;  
align-items: center;  
justify-content: space-between;  
}  
  
.logo-group {  
display: flex;  
align-items: center;  
gap: 18px;  
}  
  
.logo-emblem {  
width: 48px; height: 48px;  
border: 1px solid rgba(201,168,76,0.4);  
border-radius: 2px;  
display: flex; align-items: center; justify-content: center;  
font-size: 24px;  
position: relative;  
background: rgba(201,168,76,0.06);  
animation: emblem-glow 4s ease-in-out infinite;  
}  
  
.logo-emblem::before, .logo-emblem::after {  
content: ‘’;  
position: absolute;  
background: var(–gold);  
}  
.logo-emblem::before {  
width: 6px; height: 1px;  
top: -1px; left: 6px;  
}  
.logo-emblem::after {  
width: 1px; height: 6px;  
top: 6px; left: -1px;  
}  
  
@keyframes emblem-glow {  
0%,100% { box-shadow: 0 0 0 rgba(201,168,76,0); }  
50% { box-shadow: 0 0 20px rgba(201,168,76,0.15), inset 0 0 10px rgba(201,168,76,0.05); }  
}  
  
.logo-text-group { line-height: 1; }  
  
.logo-name {  
font-family: var(–font-display);  
font-size: 22px;  
font-weight: 600;  
letter-spacing: 6px;  
color: var(–gold);  
display: block;  
}  
  
.logo-tagline {  
font-family: var(–font-mono);  
font-size: 9px;  
letter-spacing: 5px;  
color: var(–fog);  
display: block;  
margin-top: 3px;  
}  
  
.header-right {  
display: flex;  
align-items: center;  
gap: 32px;  
}  
  
.live-indicator {  
display: flex;  
align-items: center;  
gap: 8px;  
font-family: var(–font-mono);  
font-size: 10px;  
letter-spacing: 3px;  
color: var(–success);  
}  
  
.live-dot {  
width: 6px; height: 6px;  
background: var(–success);  
border-radius: 50%;  
animation: live-pulse 2s ease-in-out infinite;  
}  
  
@keyframes live-pulse {  
0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(64,168,104,0.4)}  
50%{opacity:0.6;box-shadow:0 0 0 4px rgba(64,168,104,0)}  
}  
  
#clock {  
font-family: var(–font-mono);  
font-size: 11px;  
color: var(–fog);  
letter-spacing: 2px;  
}  
  
.divider-v {  
width: 1px;  
height: 24px;  
background: rgba(201,168,76,0.15);  
}  
  
/* ========== MARQUEE ========== */  
.marquee-wrap {  
border-bottom: 1px solid rgba(201,168,76,0.1);  
background: rgba(8,14,20,0.6);  
overflow: hidden;  
height: 36px;  
display: flex;  
align-items: center;  
}  
  
.marquee-track {  
display: flex;  
gap: 0;  
animation: marquee 30s linear infinite;  
white-space: nowrap;  
}  
  
@keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }  
  
.marquee-item {  
font-family: var(–font-mono);  
font-size: 11px;  
letter-spacing: 2px;  
padding: 0 32px;  
border-right: 1px solid rgba(201,168,76,0.1);  
display: flex;  
align-items: center;  
gap: 10px;  
height: 36px;  
color: var(–fog);  
}  
  
.marquee-sym { color: var(–gold); font-weight: 500; }  
.marquee-up { color: var(–success); }  
.marquee-dn { color: var(–danger); }  
  
/* ========== LAYOUT ========== */  
.container {  
max-width: 1440px;  
margin: 0 auto;  
padding: 0 48px;  
}  
  
/* ========== SECTION HEADER ========== */  
.section-head {  
display: flex;  
align-items: center;  
gap: 20px;  
padding: 52px 0 24px;  
}  
  
.section-roman {  
font-family: var(–font-mono);  
font-size: 10px;  
letter-spacing: 3px;  
color: var(–gold-dim);  
}  
  
.section-title {  
font-family: var(–font-display);  
font-size: 13px;  
font-weight: 600;  
letter-spacing: 8px;  
color: var(–gold);  
text-transform: uppercase;  
}  
  
.section-rule {  
flex: 1;  
height: 1px;  
background: linear-gradient(90deg, rgba(201,168,76,0.3), transparent);  
}  
  
.section-label {  
font-family: var(–font-mono);  
font-size: 9px;  
letter-spacing: 3px;  
color: var(–mist);  
border: 1px solid rgba(201,168,76,0.15);  
padding: 4px 12px;  
border-radius: 0;  
}  
  
/* ========== BTC HERO ========== */  
.btc-hero {  
padding: 56px 0 0;  
}  
  
.btc-frame {  
border: 1px solid rgba(201,168,76,0.2);  
background: linear-gradient(135deg, rgba(13,26,36,0.9) 0%, rgba(8,14,20,0.95) 100%);  
padding: 48px 56px;  
position: relative;  
overflow: hidden;  
}  
  
/* Corner ornaments */  
.btc-frame::before, .btc-frame::after {  
content: ‘’;  
position: absolute;  
width: 24px; height: 24px;  
border-color: var(–gold);  
border-style: solid;  
opacity: 0.5;  
}  
.btc-frame::before { top: 12px; left: 12px; border-width: 1px 0 0 1px; }  
.btc-frame::after  { bottom: 12px; right: 12px; border-width: 0 1px 1px 0; }  
  
.btc-watermark {  
position: absolute;  
right: -32px; bottom: -80px;  
font-family: var(–font-display);  
font-size: 280px;  
font-weight: 700;  
color: rgba(201,168,76,0.025);  
pointer-events: none;  
line-height: 1;  
letter-spacing: -10px;  
}  
  
.btc-grid {  
display: grid;  
grid-template-columns: auto 1fr auto;  
gap: 60px;  
align-items: center;  
position: relative;  
z-index: 1;  
}  
  
.btc-main {}  
  
.btc-kicker {  
font-family: var(–font-mono);  
font-size: 9px;  
letter-spacing: 6px;  
color: var(–gold-dim);  
margin-bottom: 16px;  
display: flex;  
align-items: center;  
gap: 12px;  
}  
  
.btc-kicker::before {  
content: ‘’;  
width: 20px; height: 1px;  
background: var(–gold-dim);  
}  
  
.btc-price {  
font-family: var(–font-display);  
font-size: clamp(64px, 9vw, 116px);  
font-weight: 600;  
color: var(–champagne);  
line-height: 1;  
letter-spacing: -2px;  
transition: color 0.4s, text-shadow 0.4s;  
}  
  
.btc-price.flash-up { color: var(–success); text-shadow: 0 0 40px rgba(64,168,104,0.5); }  
.btc-price.flash-dn { color: var(–danger); text-shadow: 0 0 40px rgba(200,64,80,0.5); }  
  
.btc-change-row {  
margin-top: 16px;  
display: flex;  
align-items: center;  
gap: 20px;  
}  
  
.btc-change {  
font-family: var(–font-body);  
font-size: 20px;  
font-weight: 600;  
font-style: italic;  
letter-spacing: 1px;  
}  
  
.btc-subtitle {  
font-family: var(–font-mono);  
font-size: 10px;  
letter-spacing: 3px;  
color: var(–fog);  
}  
  
.btc-stats-grid {  
display: grid;  
grid-template-columns: repeat(3, 1fr);  
gap: 2px;  
}  
  
.stat-cell {  
background: rgba(4,6,10,0.6);  
border: 1px solid rgba(201,168,76,0.08);  
padding: 18px 20px;  
transition: border-color 0.3s;  
}  
  
.stat-cell:hover { border-color: rgba(201,168,76,0.25); }  
  
.stat-k {  
font-family: var(–font-mono);  
font-size: 8px;  
letter-spacing: 3px;  
color: var(–mist);  
margin-bottom: 8px;  
}  
  
.stat-v {  
font-family: var(–font-display);  
font-size: 18px;  
font-weight: 600;  
color: var(–ivory);  
letter-spacing: 1px;  
}  
  
.btc-controls {  
display: flex;  
flex-direction: column;  
align-items: flex-end;  
gap: 16px;  
}  
  
.btn-refresh {  
background: transparent;  
border: 1px solid rgba(201,168,76,0.35);  
color: var(–gold);  
padding: 12px 28px;  
font-family: var(–font-display);  
font-size: 11px;  
letter-spacing: 4px;  
cursor: pointer;  
transition: all 0.3s;  
position: relative;  
overflow: hidden;  
}  
  
.btn-refresh::before {  
content: ‘’;  
position: absolute;  
inset: 0;  
background: linear-gradient(90deg, transparent, rgba(201,168,76,0.1), transparent);  
transform: translateX(-100%);  
transition: transform 0.5s;  
}  
  
.btn-refresh:hover::before { transform: translateX(100%); }  
.btn-refresh:hover { border-color: var(–gold); box-shadow: 0 0 20px rgba(201,168,76,0.15); }  
.btn-refresh.loading { opacity: 0.4; pointer-events: none; }  
  
.last-sync {  
font-family: var(–font-mono);  
font-size: 9px;  
letter-spacing: 2px;  
color: var(–mist);  
text-align: right;  
}  
  
/* ========== COIN GRID ========== */  
.market-grid {  
display: grid;  
grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));  
gap: 2px;  
background: rgba(201,168,76,0.06);  
border: 1px solid rgba(201,168,76,0.1);  
padding: 2px;  
}  
  
.coin-tile {  
background: var(–onyx);  
padding: 24px 22px;  
transition: background 0.3s;  
cursor: pointer;  
position: relative;  
overflow: hidden;  
}  
  
.coin-tile::after {  
content: ‘’;  
position: absolute;  
bottom: 0; left: 0;  
width: 0; height: 1px;  
background: var(–gold);  
transition: width 0.4s;  
}  
  
.coin-tile:hover { background: rgba(13,26,36,0.95); }  
.coin-tile:hover::after { width: 100%; }  
  
.coin-tile-top {  
display: flex;  
align-items: center;  
justify-content: space-between;  
margin-bottom: 18px;  
}  
  
.coin-badge {  
font-family: var(–font-mono);  
font-size: 10px;  
letter-spacing: 3px;  
color: var(–fog);  
border: 1px solid rgba(201,168,76,0.12);  
padding: 3px 8px;  
}  
  
.coin-icon-sym {  
font-size: 20px;  
opacity: 0.7;  
}  
  
.coin-tile-price {  
font-family: var(–font-display);  
font-size: 28px;  
font-weight: 600;  
color: var(–ivory);  
letter-spacing: 0.5px;  
margin-bottom: 8px;  
}  
  
.coin-tile-name {  
font-family: var(–font-body);  
font-size: 13px;  
color: var(–fog);  
font-style: italic;  
margin-bottom: 6px;  
}  
  
.coin-tile-chg {  
font-family: var(–font-mono);  
font-size: 12px;  
letter-spacing: 1px;  
}  
  
/* ========== PORTFOLIO ========== */  
.portfolio-duo {  
display: grid;  
grid-template-columns: 1fr 1fr;  
gap: 2px;  
background: rgba(201,168,76,0.06);  
border: 1px solid rgba(201,168,76,0.1);  
padding: 2px;  
}  
  
.port-panel {  
background: var(–onyx);  
padding: 36px 36px;  
}  
  
.panel-eyebrow {  
font-family: var(–font-mono);  
font-size: 9px;  
letter-spacing: 5px;  
color: var(–gold-dim);  
margin-bottom: 28px;  
display: flex;  
align-items: center;  
gap: 10px;  
}  
  
.panel-eyebrow::before {  
content: ‘’;  
width: 16px; height: 1px;  
background: var(–gold-dim);  
}  
  
.holding-entry {  
display: grid;  
grid-template-columns: 1fr 1fr auto;  
gap: 8px;  
margin-bottom: 10px;  
align-items: center;  
}  
  
.luxury-input, select.luxury-input {  
background: rgba(4,6,10,0.8);  
border: 0;  
border-bottom: 1px solid rgba(201,168,76,0.15);  
color: var(–ivory);  
font-family: var(–font-mono);  
font-size: 12px;  
padding: 10px 12px;  
outline: none;  
transition: border-color 0.3s;  
width: 100%;  
letter-spacing: 1px;  
}  
  
.luxury-input:focus { border-bottom-color: var(–gold); }  
.luxury-input::placeholder { color: var(–mist); }  
.luxury-input option { background: var(–carbon); color: var(–ivory); }  
select.luxury-input { background: rgba(4,6,10,0.95) !important; color: var(–ivory) !important; -webkit-appearance: none; appearance: none; cursor: pointer; }  
  
.btn-remove {  
background: transparent;  
border: 1px solid rgba(200,64,80,0.2);  
color: var(–danger);  
width: 30px; height: 30px;  
cursor: pointer;  
font-size: 12px;  
transition: all 0.2s;  
display: flex; align-items: center; justify-content: center;  
flex-shrink: 0;  
}  
  
.btn-remove:hover { background: rgba(200,64,80,0.1); }  
  
.add-row {  
display: grid;  
grid-template-columns: 1fr 1fr auto;  
gap: 8px;  
margin-top: 20px;  
align-items: end;  
}  
  
.btn-add {  
background: transparent;  
border: 1px solid rgba(201,168,76,0.3);  
color: var(–gold);  
padding: 10px 16px;  
font-family: var(–font-mono);  
font-size: 11px;  
letter-spacing: 2px;  
cursor: pointer;  
transition: all 0.2s;  
white-space: nowrap;  
}  
  
.btn-add:hover { background: rgba(201,168,76,0.08); }  
  
.btn-calc {  
width: 100%;  
background: linear-gradient(135deg, rgba(201,168,76,0.15) 0%, rgba(201,168,76,0.05) 100%);  
border: 1px solid rgba(201,168,76,0.35);  
color: var(–gold-light);  
padding: 18px;  
font-family: var(–font-display);  
font-size: 12px;  
letter-spacing: 6px;  
cursor: pointer;  
margin-top: 24px;  
transition: all 0.3s;  
position: relative;  
overflow: hidden;  
}  
  
.btn-calc:hover {  
background: linear-gradient(135deg, rgba(201,168,76,0.25) 0%, rgba(201,168,76,0.12) 100%);  
box-shadow: 0 0 30px rgba(201,168,76,0.15);  
}  
  
/* Portfolio result */  
.total-block {  
text-align: center;  
padding: 32px 0 28px;  
border-bottom: 1px solid rgba(201,168,76,0.08);  
}  
  
.total-eyebrow {  
font-family: var(–font-mono);  
font-size: 9px;  
letter-spacing: 5px;  
color: var(–fog);  
margin-bottom: 14px;  
}  
  
.total-amount {  
font-family: var(–font-display);  
font-size: clamp(44px, 6vw, 72px);  
font-weight: 600;  
color: var(–gold-light);  
letter-spacing: 2px;  
text-shadow: 0 0 40px rgba(232,201,122,0.3);  
transition: all 0.5s;  
}  
  
.allocation-bar {  
height: 3px;  
display: flex;  
margin: 24px 0;  
gap: 2px;  
}  
  
.alloc-seg {  
height: 100%;  
transition: flex 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);  
}  
  
.breakdown-list { margin-top: 24px; }  
  
.breakdown-item {  
display: flex;  
justify-content: space-between;  
align-items: center;  
padding: 14px 0;  
border-bottom: 1px solid rgba(201,168,76,0.05);  
}  
  
.breakdown-left {  
display: flex;  
align-items: center;  
gap: 12px;  
}  
  
.bd-dot {  
width: 8px; height: 8px;  
border-radius: 1px;  
}  
  
.bd-sym {  
font-family: var(–font-display);  
font-size: 15px;  
font-weight: 600;  
color: var(–ivory);  
letter-spacing: 2px;  
}  
  
.bd-right { text-align: right; }  
  
.bd-val {  
font-family: var(–font-mono);  
font-size: 13px;  
color: var(–champagne);  
}  
  
.bd-pct {  
font-family: var(–font-mono);  
font-size: 10px;  
color: var(–fog);  
margin-top: 2px;  
}  
  
/* ========== DEFI YIELDS ========== */  
.yields-grid {  
display: grid;  
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));  
gap: 2px;  
background: rgba(201,168,76,0.04);  
border: 1px solid rgba(201,168,76,0.1);  
padding: 2px;  
}  
  
.yield-tile {  
background: var(–onyx);  
padding: 28px 28px;  
transition: background 0.3s;  
position: relative;  
overflow: hidden;  
}  
  
.yield-tile:hover { background: rgba(13,26,36,0.9); }  
  
.yield-tile-top {  
display: flex;  
justify-content: space-between;  
align-items: flex-start;  
margin-bottom: 20px;  
}  
  
.yield-proto {  
font-family: var(–font-display);  
font-size: 22px;  
font-weight: 600;  
letter-spacing: 3px;  
color: var(–ivory);  
}  
  
.yield-meta { text-align: right; }  
  
.yield-chain {  
font-family: var(–font-mono);  
font-size: 9px;  
letter-spacing: 3px;  
color: var(–fog);  
border: 1px solid rgba(201,168,76,0.12);  
padding: 3px 8px;  
display: inline-block;  
margin-bottom: 6px;  
}  
  
.yield-risk {  
font-family: var(–font-mono);  
font-size: 9px;  
letter-spacing: 2px;  
display: block;  
}  
  
.risk-low { color: var(–success); }  
.risk-med { color: #c8a040; }  
.risk-high { color: var(–danger); }  
  
.yield-apy-num {  
font-family: var(–font-display);  
font-size: 56px;  
font-weight: 300;  
color: var(–gold-light);  
letter-spacing: -2px;  
line-height: 1;  
font-style: italic;  
text-shadow: 0 0 30px rgba(232,201,122,0.2);  
}  
  
.yield-apy-unit {  
font-family: var(–font-mono);  
font-size: 10px;  
letter-spacing: 3px;  
color: var(–fog);  
margin-top: 4px;  
}  
  
.yield-pair {  
font-family: var(–font-body);  
font-size: 16px;  
color: var(–platinum);  
font-style: italic;  
margin-top: 10px;  
}  
  
.yield-tvl {  
font-family: var(–font-mono);  
font-size: 10px;  
color: var(–mist);  
letter-spacing: 2px;  
margin-top: 6px;  
}  
  
.yield-bar {  
height: 2px;  
background: rgba(201,168,76,0.08);  
margin-top: 20px;  
}  
  
.yield-fill {  
height: 100%;  
background: linear-gradient(90deg, var(–gold-dim), var(–gold));  
transition: width 1.2s cubic-bezier(0.22, 1, 0.36, 1);  
}  
  
/* ========== CALCULATORS ========== */  
.calc-trio {  
display: grid;  
grid-template-columns: repeat(3, 1fr);  
gap: 2px;  
background: rgba(201,168,76,0.04);  
border: 1px solid rgba(201,168,76,0.1);  
padding: 2px;  
margin-bottom: 80px;  
}  
  
.calc-tile {  
background: var(–onyx);  
padding: 32px 28px;  
}  
  
.calc-eyebrow {  
font-family: var(–font-mono);  
font-size: 9px;  
letter-spacing: 4px;  
color: var(–fog);  
margin-bottom: 24px;  
padding-bottom: 16px;  
border-bottom: 1px solid rgba(201,168,76,0.08);  
}  
  
.calc-result {  
font-family: var(–font-display);  
font-size: 38px;  
font-weight: 600;  
color: var(–gold-light);  
letter-spacing: 1px;  
margin-top: 20px;  
min-height: 50px;  
font-style: italic;  
}  
  
.calc-sub {  
font-family: var(–font-mono);  
font-size: 10px;  
color: var(–fog);  
letter-spacing: 2px;  
margin-top: 6px;  
}  
  
/* ========== FOOTER ========== */  
footer {  
border-top: 1px solid rgba(201,168,76,0.1);  
padding: 32px 0;  
margin-top: 40px;  
}  
  
.footer-inner {  
max-width: 1440px;  
margin: 0 auto;  
padding: 0 48px;  
display: flex;  
justify-content: space-between;  
align-items: center;  
}  
  
.footer-brand {  
font-family: var(–font-display);  
font-size: 13px;  
letter-spacing: 5px;  
color: var(–gold-dim);  
}  
  
.footer-note {  
font-family: var(–font-mono);  
font-size: 9px;  
letter-spacing: 3px;  
color: var(–mist);  
}  
  
/* ========== TOAST ========== */  
#toast {  
position: fixed;  
bottom: 36px;  
right: 48px;  
background: var(–carbon);  
border: 1px solid rgba(201,168,76,0.3);  
color: var(–gold-light);  
padding: 14px 24px;  
font-family: var(–font-mono);  
font-size: 11px;  
letter-spacing: 3px;  
opacity: 0;  
transform: translateY(8px);  
transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);  
z-index: 999;  
pointer-events: none;  
}  
  
#toast.show { opacity: 1; transform: translateY(0); }  
  
/* ========== UP / DN ========== */  
.up { color: var(–success); }  
.dn { color: var(–danger); }  
  
/* ========== RESPONSIVE ========== */  
@media (max-width: 900px) {  
.header-inner { padding: 0 24px; }  
.container { padding: 0 24px; }  
.btc-grid { grid-template-columns: 1fr; gap: 32px; }  
.btc-stats-grid { grid-template-columns: repeat(3,1fr); }  
.portfolio-duo { grid-template-columns: 1fr; }  
.calc-trio { grid-template-columns: 1fr; }  
.btc-controls { align-items: flex-start; }  
}  
  
/* ========== ENTRANCE ANIMATIONS ========== */  
.fade-in {  
opacity: 0;  
transform: translateY(16px);  
animation: fade-in 0.7s cubic-bezier(0.22,1,0.36,1) forwards;  
}  
  
@keyframes fade-in {  
to { opacity: 1; transform: translateY(0); }  
}  
  
.btc-frame { animation: fade-in 0.6s 0.1s cubic-bezier(0.22,1,0.36,1) both; }  
.market-grid { animation: fade-in 0.6s 0.2s cubic-bezier(0.22,1,0.36,1) both; }  
.portfolio-duo { animation: fade-in 0.6s 0.3s cubic-bezier(0.22,1,0.36,1) both; }  
.yields-grid { animation: fade-in 0.6s 0.4s cubic-bezier(0.22,1,0.36,1) both; }  
.calc-trio { animation: fade-in 0.6s 0.5s cubic-bezier(0.22,1,0.36,1) both; }  
  
/* input spacing */  
.input-stack { display: flex; flex-direction: column; gap: 8px; }  
</style>  
  
</head>  
<body>  
  
<div class="bg-layer"></div>  
<div class="grain"></div>  
  
<div class="wrap">  
  
<!-- HEADER -->  
  
<header>  
  <div class="header-inner">  
    <div class="logo-group">  
      <div class="logo-emblem">🐋</div>  
      <div class="logo-text-group">  
        <span class="logo-name">WhaleTrucker</span>  
        <span class="logo-tagline">ÉLITE COMMAND CENTER</span>  
      </div>  
    </div>  
    <div class="header-right">  
      <div class="live-indicator"><div class="live-dot"></div>LIVE</div>  
      <div class="divider-v"></div>  
      <div id="clock">--:--:--</div>  
    </div>  
  </div>  
</header>  
  
<!-- MARQUEE -->  
  
<div class="marquee-wrap">  
  <div class="marquee-track" id="marqueeTrack">  
    <span class="marquee-item"><span class="marquee-sym">BTC</span> — loading...</span>  
  </div>  
</div>  
  
<div class="container">  
  
  <!-- I. BTC HERO -->  
  
  <div class="btc-hero">  
    <div class="btc-frame">  
      <div class="btc-watermark">₿</div>  
      <div class="btc-grid">  
        <div class="btc-main">  
          <div class="btc-kicker">BITCOIN · USD · LIVE STREAM</div>  
          <div class="btc-price" id="btcPrice">—</div>  
          <div class="btc-change-row">  
            <div class="btc-change" id="btcChange">—</div>  
            <div class="btc-subtitle">24-HOUR PERFORMANCE</div>  
          </div>  
        </div>  
  
```  
    <div class="btc-stats-grid">  
      <div class="stat-cell">  
        <div class="stat-k">24H HIGH</div>  
        <div class="stat-v" id="btcHigh">—</div>  
      </div>  
      <div class="stat-cell">  
        <div class="stat-k">24H LOW</div>  
        <div class="stat-v" id="btcLow">—</div>  
      </div>  
      <div class="stat-cell">  
        <div class="stat-k">MARKET CAP</div>  
        <div class="stat-v" id="btcMcap">—</div>  
      </div>  
      <div class="stat-cell">  
        <div class="stat-k">24H VOLUME</div>  
        <div class="stat-v" id="btcVol">—</div>  
      </div>  
      <div class="stat-cell">  
        <div class="stat-k">ALL TIME HIGH</div>  
        <div class="stat-v" id="btcAth">—</div>  
      </div>  
      <div class="stat-cell">  
        <div class="stat-k">MARKET RANK</div>  
        <div class="stat-v" id="btcRank">#1</div>  
      </div>  
    </div>  
  
    <div class="btc-controls">  
      <button class="btn-refresh" id="refreshBtn" onclick="fetchAllData()">REFRESH</button>  
      <div class="last-sync" id="lastUpdate">SYNCHRONISING...</div>  
    </div>  
  </div>  
</div>  
```  
  
  </div>  
  
  <!-- II. MARKET DEPTH -->  
  
  <div class="section-head">  
    <div class="section-roman">II</div>  
    <div class="section-title">Market Depth</div>  
    <div class="section-rule"></div>  
    <div class="section-label">TOP COINS</div>  
  </div>  
  
  <div class="market-grid" id="coinsGrid"></div>  
  
  <!-- III. PORTFOLIO -->  
  
  <div class="section-head">  
    <div class="section-roman">III</div>  
    <div class="section-title">Portfolio Valuation</div>  
    <div class="section-rule"></div>  
    <div class="section-label">NET WORTH</div>  
  </div>  
  
  <div class="portfolio-duo">  
    <div class="port-panel">  
      <div class="panel-eyebrow">HOLDINGS LEDGER</div>  
      <div id="holdingsList"></div>  
      <div class="add-row">  
        <select class="luxury-input" id="newCoin">  
          <option value="">SELECT INSTRUMENT</option>  
        </select>  
        <input type="number" class="luxury-input" id="newAmount" placeholder="QUANTITY" min="0" step="any">  
        <button class="btn-add" onclick="addHolding()">+ ADD</button>  
      </div>  
      <button class="btn-calc" onclick="calcPortfolio()">CALCULATE NET WORTH</button>  
    </div>  
  
```  
<div class="port-panel">  
  <div class="panel-eyebrow">VALUATION REPORT</div>  
  <div class="total-block">  
    <div class="total-eyebrow">TOTAL PORTFOLIO VALUE · USD</div>  
    <div class="total-amount" id="totalValue">$0.00</div>  
  </div>  
  <div class="allocation-bar" id="allocBar"></div>  
  <div class="breakdown-list" id="portfolioBreakdown">  
    <div style="color:var(--mist);font-family:var(--font-mono);font-size:10px;letter-spacing:3px;text-align:center;padding:32px 0">  
      NO HOLDINGS RECORDED  
    </div>  
  </div>  
</div>  
```  
  
  </div>  
  
  <!-- IV. DEFI -->  
  
  <div class="section-head">  
    <div class="section-roman">IV</div>  
    <div class="section-title">DeFi Yield Radar</div>  
    <div class="section-rule"></div>  
    <div class="section-label">PASSIVE INCOME</div>  
  </div>  
  
  <div class="yields-grid" id="yieldsGrid"></div>  
  
  <!-- V. CALCULATORS -->  
  
  <div class="section-head">  
    <div class="section-roman">V</div>  
    <div class="section-title">Mission Control</div>  
    <div class="section-rule"></div>  
    <div class="section-label">CALCULATORS</div>  
  </div>  
  
  <div class="calc-trio">  
    <div class="calc-tile">  
      <div class="calc-eyebrow">BTC **⇄** USD CONVERSION</div>  
      <input type="number" class="luxury-input" id="btcConvertInput" placeholder="ENTER BTC AMOUNT" step="any" oninput="convertBTC(this.value)">  
      <div class="calc-result" id="btcConvertResult">—</div>  
      <div class="calc-sub">USD VALUE AT SPOT PRICE</div>  
    </div>  
  
```  
<div class="calc-tile">  
  <div class="calc-eyebrow">DCA ACCUMULATION MODEL</div>  
  <div class="input-stack">  
    <input type="number" class="luxury-input" id="dcaAmount" placeholder="MONTHLY ALLOCATION (USD)" step="any">  
    <input type="number" class="luxury-input" id="dcaMonths" placeholder="TIME HORIZON (MONTHS)" step="1" min="1" oninput="calcDCA()">  
  </div>  
  <div class="calc-result" id="dcaResult">—</div>  
  <div class="calc-sub" id="dcaSub">PROJECTED BTC ACCUMULATED</div>  
</div>  
  
<div class="calc-tile">  
  <div class="calc-eyebrow">PROFIT & LOSS ANALYSIS</div>  
  <div class="input-stack">  
    <input type="number" class="luxury-input" id="plBuy" placeholder="ENTRY PRICE (USD)" step="any">  
    <input type="number" class="luxury-input" id="plAmount" placeholder="POSITION SIZE (BTC)" step="any" oninput="calcPL()">  
  </div>  
  <div class="calc-result" id="plResult">—</div>  
  <div class="calc-sub" id="plSub">P&L AT CURRENT SPOT</div>  
</div>  
```  
  
  </div>  
  
</div>  
  
<!-- FOOTER -->  
  
<footer>  
  <div class="footer-inner">  
    <div class="footer-brand">🐋 WHALETRUCKER ÉLITE</div>  
    <div class="footer-note">POWERED BY COINGECKO · DATA FOR INFORMATIONAL USE ONLY</div>  
  </div>  
</footer>  
  
</div><!-- /wrap -->  
  
<div id="toast"></div>  
  
<script>  
// ============================================================  
// CONFIG  
// ============================================================  
const API_KEY = 'CG-xhXcDEMO';  
const BASE = 'https://api.coingecko.com/api/v3';  
  
const COINS = [  
  { id:'bitcoin',      sym:'BTC',  name:'Bitcoin',    icon:'₿',  color:'#c9a84c' },  
  { id:'ethereum',     sym:'ETH',  name:'Ethereum',   icon:'Ξ',  color:'#8a94d4' },  
  { id:'solana',       sym:'SOL',  name:'Solana',     icon:'**◎**',  color:'#9945ff' },  
  { id:'binancecoin',  sym:'BNB',  name:'BNB',        icon:'B',  color:'#c8a030' },  
  { id:'ripple',       sym:'XRP',  name:'XRP',        icon:'X',  color:'#60b8d4' },  
  { id:'dogecoin',     sym:'DOGE', name:'Dogecoin',   icon:'Ð',  color:'#b89828' },  
  { id:'cardano',      sym:'ADA',  name:'Cardano',    icon:'₳',  color:'#4068c0' },  
  { id:'avalanche-2',  sym:'AVAX', name:'Avalanche',  icon:'A',  color:'#c04040' },  
];  
  
const DEFI_YIELDS = [  
  { protocol:'AAVE',     pair:'USDC',          apy:4.2,  chain:'ETHEREUM', tvl:'$6.8B', risk:'LOW',  fill:42  },  
  { protocol:'CURVE',    pair:'3POOL',          apy:3.8,  chain:'ETHEREUM', tvl:'$4.1B', risk:'LOW',  fill:38  },  
  { protocol:'COMPOUND', pair:'USDT',           apy:3.1,  chain:'ETHEREUM', tvl:'$2.3B', risk:'LOW',  fill:31  },  
  { protocol:'BEEFY',    pair:'USDC-USDT',      apy:8.7,  chain:'POLYGON',  tvl:'$890M', risk:'MED',  fill:87  },  
  { protocol:'RADIANT',  pair:'USDC',           apy:12.4, chain:'ARBITRUM', tvl:'$420M', risk:'MED',  fill:100 },  
  { protocol:'GMX',      pair:'GLP (ETH/BTC)',  apy:18.2, chain:'ARBITRUM', tvl:'$560M', risk:'HIGH', fill:100 },  
];  
  
const SEG_COLORS = ['#c9a84c','#8a94d4','#9945ff','#c8a030','#60b8d4','#b89828','#4068c0','#c04040'];  
  
let prices = {};  
let holdings = [  
  { coin:'bitcoin', amount:0.1 },  
  { coin:'ethereum', amount:2 },  
];  
  
// ============================================================  
// CLOCK  
// ============================================================  
function updateClock() {  
  const now = new Date();  
  const off = now.getTimezoneOffset();  
  document.getElementById('clock').textContent =  
    now.toLocaleTimeString('en-US',{hour12:false}) + '  UTC' +  
    (off > 0 ? '−' : '+') + String(Math.abs(off/60)).padStart(2,'0') + ':00';  
}  
setInterval(updateClock, 1000);  
updateClock();  
  
// ============================================================  
// FORMATTERS  
// ============================================================  
const fmtBig = n =>  
  n >= 1e12 ? '$' + (n/1e12).toFixed(2) + 'T' :  
  n >= 1e9  ? '$' + (n/1e9).toFixed(2)  + 'B' :  
  n >= 1e6  ? '$' + (n/1e6).toFixed(2)  + 'M' :  
  '$' + n.toLocaleString('en-US',{maximumFractionDigits:2});  
  
const fmtPrice = n =>  
  n >= 1000 ? '$' + n.toLocaleString('en-US',{maximumFractionDigits:0}) :  
  n >= 1    ? '$' + n.toLocaleString('en-US',{maximumFractionDigits:4}) :  
  '$' + n.toFixed(6);  
  
// ============================================================  
// FETCH  
// ============================================================  
async function fetchAllData() {  
  const btn = document.getElementById('refreshBtn');  
  btn.classList.add('loading');  
  btn.textContent = 'SYNCHRONISING...';  
  try {  
    const ids = COINS.map(c=>c.id).join(',');  
    const res = await fetch(  
      `${BASE}/coins/markets?vs_currency=usd&ids=${ids}&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=24h`,  
      { headers:{'x-cg-demo-api-key': API_KEY} }  
    );  
    const data = await res.json();  
    if (!Array.isArray(data)) throw new Error('bad');  
    data.forEach(c => { prices[c.id] = c.current_price; });  
    const btc = data.find(c=>c.id==='bitcoin');  
    if (btc) updateBTCHero(btc);  
    renderCoinsGrid(data);  
    renderMarquee(data);  
    updateCoinSelect();  
    calcPortfolio();  
    convertBTC(document.getElementById('btcConvertInput').value);  
    calcDCA(); calcPL();  
    document.getElementById('lastUpdate').textContent =  
      'LAST SYNC  ' + new Date().toLocaleTimeString('en-US',{hour12:false});  
    showToast('DATA REFRESHED');  
  } catch(e) {  
    useDemoData();  
    showToast('DEMO DATA — API LIMIT');  
  }  
  btn.classList.remove('loading');  
  btn.textContent = 'REFRESH';  
}  
  
function useDemoData() {  
  const demo = [  
    {id:'bitcoin',     symbol:'btc',  name:'Bitcoin',   current_price:95420,  price_change_percentage_24h:2.3,  high_24h:96800, low_24h:93100, market_cap:1880000000000, total_volume:42000000000, ath:108786, market_cap_rank:1},  
    {id:'ethereum',    symbol:'eth',  name:'Ethereum',  current_price:1820,   price_change_percentage_24h:-1.1, high_24h:1870,  low_24h:1790,  market_cap:219000000000,  total_volume:14000000000, ath:4878,   market_cap_rank:2},  
    {id:'solana',      symbol:'sol',  name:'Solana',    current_price:148,    price_change_percentage_24h:3.8,  high_24h:152,   low_24h:143,   market_cap:67000000000,   total_volume:3800000000,  ath:259.96, market_cap_rank:5},  
    {id:'binancecoin', symbol:'bnb',  name:'BNB',       current_price:598,    price_change_percentage_24h:0.9,  high_24h:605,   low_24h:592,   market_cap:87000000000,   total_volume:1900000000,  ath:686.31, market_cap_rank:4},  
    {id:'ripple',      symbol:'xrp',  name:'XRP',       current_price:2.14,   price_change_percentage_24h:-0.5, high_24h:2.21,  low_24h:2.09,  market_cap:122000000000,  total_volume:8200000000,  ath:3.84,   market_cap_rank:3},  
    {id:'dogecoin',    symbol:'doge', name:'Dogecoin',  current_price:0.168,  price_change_percentage_24h:1.4,  high_24h:0.172, low_24h:0.163, market_cap:24600000000,   total_volume:2100000000,  ath:0.7376, market_cap_rank:9},  
    {id:'cardano',     symbol:'ada',  name:'Cardano',   current_price:0.714,  price_change_percentage_24h:-0.8, high_24h:0.726, low_24h:0.705, market_cap:25300000000,   total_volume:890000000,   ath:3.09,   market_cap_rank:10},  
    {id:'avalanche-2', symbol:'avax', name:'Avalanche', current_price:22.4,   price_change_percentage_24h:4.2,  high_24h:23.1,  low_24h:21.5,  market_cap:9200000000,    total_volume:620000000,   ath:146.22, market_cap_rank:18},  
  ];  
  demo.forEach(c => { prices[c.id] = c.current_price; });  
  const btc = demo[0];  
  updateBTCHero(btc);  
  renderCoinsGrid(demo);  
  renderMarquee(demo);  
  updateCoinSelect();  
  calcPortfolio();  
  convertBTC(document.getElementById('btcConvertInput').value);  
  calcDCA(); calcPL();  
  document.getElementById('lastUpdate').textContent = 'DEMO DATA  ' + new Date().toLocaleTimeString('en-US',{hour12:false});  
}  
  
function updateBTCHero(btc) {  
  const el = document.getElementById('btcPrice');  
  const old = parseFloat(el.dataset.val || 0);  
  const cur = btc.current_price;  
  el.dataset.val = cur;  
  el.textContent = '$' + cur.toLocaleString('en-US',{maximumFractionDigits:0});  
  if (old > 0) {  
    const cls = cur > old ? 'flash-up' : cur < old ? 'flash-dn' : '';  
    if (cls) { el.classList.add(cls); setTimeout(()=>el.classList.remove(cls), 900); }  
  }  
  const chg = btc.price_change_percentage_24h;  
  const chgEl = document.getElementById('btcChange');  
  chgEl.textContent = (chg >= 0 ? '▲ +' : '▼ ') + chg.toFixed(2) + '%';  
  chgEl.className = 'btc-change ' + (chg >= 0 ? 'up' : 'dn');  
  document.getElementById('btcHigh').textContent  = '$' + btc.high_24h.toLocaleString('en-US',{maximumFractionDigits:0});  
  document.getElementById('btcLow').textContent   = '$' + btc.low_24h.toLocaleString('en-US',{maximumFractionDigits:0});  
  document.getElementById('btcMcap').textContent  = fmtBig(btc.market_cap);  
  document.getElementById('btcVol').textContent   = fmtBig(btc.total_volume);  
  document.getElementById('btcAth').textContent   = '$' + btc.ath.toLocaleString('en-US',{maximumFractionDigits:0});  
  document.getElementById('btcRank').textContent  = '#' + btc.market_cap_rank;  
}  
  
function renderCoinsGrid(data) {  
  const grid = document.getElementById('coinsGrid');  
  grid.innerHTML = '';  
  data.forEach(c => {  
    const meta = COINS.find(x=>x.id===c.id) || {icon:'●', color:'#c9a84c', sym: c.symbol.toUpperCase()};  
    const chg = c.price_change_percentage_24h || 0;  
    const div = document.createElement('div');  
    div.className = 'coin-tile';  
    div.innerHTML = `  
      <div class="coin-tile-top">  
        <div class="coin-badge">${meta.sym}</div>  
        <div class="coin-icon-sym" style="color:${meta.color}">${meta.icon}</div>  
      </div>  
      <div class="coin-tile-price">${fmtPrice(c.current_price)}</div>  
      <div class="coin-tile-name">${c.name}</div>  
      <div class="coin-tile-chg ${chg>=0?'up':'dn'}">${chg>=0?'▲ +':'▼ '}${Math.abs(chg).toFixed(2)}%</div>  
    `;  
    grid.appendChild(div);  
  });  
}  
  
function renderMarquee(data) {  
  const track = document.getElementById('marqueeTrack');  
  const items = data.map(c => {  
    const chg = c.price_change_percentage_24h || 0;  
    const cls = chg >= 0 ? 'marquee-up' : 'marquee-dn';  
    return `<span class="marquee-item"><span class="marquee-sym">${c.symbol.toUpperCase()}</span>${fmtPrice(c.current_price)}<span class="${cls}">${chg>=0?'+':''}${chg.toFixed(2)}%</span></span>`;  
  });  
  track.innerHTML = [...items,...items].join('');  
}  
  
// ============================================================  
// PORTFOLIO  
// ============================================================  
function updateCoinSelect() {  
  const sel = document.getElementById('newCoin');  
  const v = sel.value;  
  sel.innerHTML = '<option value="">SELECT INSTRUMENT</option>';  
  COINS.forEach(c => {  
    const o = document.createElement('option');  
    o.value = c.id;  
    o.textContent = c.sym + '  ·  ' + c.name;  
    sel.appendChild(o);  
  });  
  sel.value = v;  
  renderHoldingsList();  
}  
  
function renderHoldingsList() {  
  const list = document.getElementById('holdingsList');  
  list.innerHTML = '';  
  holdings.forEach((h,i) => {  
    const meta = COINS.find(x=>x.id===h.coin);  
    const sym = meta ? meta.sym : h.coin;  
    const row = document.createElement('div');  
    row.className = 'holding-entry';  
    row.innerHTML = `  
      <div style="font-family:var(--font-display);font-size:16px;font-weight:600;letter-spacing:3px;color:var(--gold)">${sym}</div>  
      <input type="number" class="luxury-input" value="${h.amount}" step="any" min="0"  
        onchange="holdings[${i}].amount=parseFloat(this.value)||0;calcPortfolio();">  
      <button class="btn-remove" onclick="holdings.splice(${i},1);renderHoldingsList();calcPortfolio();">✕</button>  
    `;  
    list.appendChild(row);  
  });  
}  
  
function addHolding() {  
  const coin = document.getElementById('newCoin').value;  
  const amount = parseFloat(document.getElementById('newAmount').value) || 0;  
  if (!coin) { showToast('SELECT AN INSTRUMENT'); return; }  
  const ex = holdings.find(h=>h.coin===coin);  
  if (ex) ex.amount += amount; else holdings.push({coin,amount});  
  document.getElementById('newCoin').value = '';  
  document.getElementById('newAmount').value = '';  
  renderHoldingsList();  
  calcPortfolio();  
  showToast('HOLDING RECORDED');  
}  
  
function calcPortfolio() {  
  let total = 0;  
  const breakdown = [];  
  holdings.forEach((h,i) => {  
    const price = prices[h.coin] || 0;  
    const val = h.amount * price;  
    total += val;  
    const meta = COINS.find(x=>x.id===h.coin);  
    breakdown.push({ sym: meta?meta.sym:h.coin, val, color: SEG_COLORS[i%SEG_COLORS.length] });  
  });  
  
  document.getElementById('totalValue').textContent =  
    '$' + total.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});  
  
  const bar = document.getElementById('allocBar');  
  if (total > 0) {  
    bar.innerHTML = breakdown.map(b=>  
      `<div class="alloc-seg" style="flex:${b.val/total};background:${b.color}"></div>`  
    ).join('');  
  } else { bar.innerHTML = ''; }  
  
  const bd = document.getElementById('portfolioBreakdown');  
  if (!breakdown.length) {  
    bd.innerHTML = '<div style="color:var(--mist);font-family:var(--font-mono);font-size:10px;letter-spacing:3px;text-align:center;padding:32px 0">NO HOLDINGS RECORDED</div>';  
    return;  
  }  
  bd.innerHTML = breakdown.map(b => {  
    const pct = total > 0 ? (b.val/total*100).toFixed(1) : 0;  
    return `  
      <div class="breakdown-item">  
        <div class="breakdown-left">  
          <div class="bd-dot" style="background:${b.color}"></div>  
          <div class="bd-sym">${b.sym}</div>  
        </div>  
        <div class="bd-right">  
          <div class="bd-val">${fmtBig(b.val)}</div>  
          <div class="bd-pct">${pct}%</div>  
        </div>  
      </div>`;  
  }).join('');  
}  
  
// ============================================================  
// DEFI  
// ============================================================  
function renderYields() {  
  const grid = document.getElementById('yieldsGrid');  
  const riskCls = {LOW:'risk-low', MED:'risk-med', HIGH:'risk-high'};  
  grid.innerHTML = DEFI_YIELDS.map(y => `  
    <div class="yield-tile">  
      <div class="yield-tile-top">  
        <div>  
          <div class="yield-proto">${y.protocol}</div>  
        </div>  
        <div class="yield-meta">  
          <div class="yield-chain">${y.chain}</div>  
          <span class="yield-risk ${riskCls[y.risk]}">${y.risk} RISK</span>  
        </div>  
      </div>  
      <div class="yield-apy-num">${y.apy}%</div>  
      <div class="yield-apy-unit">ESTIMATED APY</div>  
      <div class="yield-pair">${y.pair}</div>  
      <div class="yield-tvl">TVL  ${y.tvl}</div>  
      <div class="yield-bar"><div class="yield-fill" style="width:${Math.min(y.fill,100)}%"></div></div>  
    </div>  
  `).join('');  
}  
  
// ============================================================  
// CALCULATORS  
// ============================================================  
function convertBTC(val) {  
  const amt = parseFloat(val);  
  const price = prices['bitcoin'] || 95420;  
  document.getElementById('btcConvertResult').textContent =  
    (!isNaN(amt) && amt > 0) ? '$' + (amt*price).toLocaleString('en-US',{maximumFractionDigits:2}) : '—';  
}  
  
function calcDCA() {  
  const monthly = parseFloat(document.getElementById('dcaAmount').value);  
  const months  = parseInt(document.getElementById('dcaMonths').value);  
  const price   = prices['bitcoin'] || 95420;  
  if (!isNaN(monthly) && !isNaN(months) && monthly > 0 && months > 0) {  
    const spent = monthly * months;  
    const btcAcc = spent / price;  
    document.getElementById('dcaResult').textContent = btcAcc.toFixed(6) + ' BTC';  
    document.getElementById('dcaSub').textContent =  
      'SPENT  $' + spent.toLocaleString('en-US') + '  ·  VALUE  $' + (btcAcc*price).toLocaleString('en-US',{maximumFractionDigits:0});  
  } else {  
    document.getElementById('dcaResult').textContent = '—';  
    document.getElementById('dcaSub').textContent = 'PROJECTED BTC ACCUMULATED';  
  }  
}  
  
function calcPL() {  
  const buyPrice = parseFloat(document.getElementById('plBuy').value);  
  const amount   = parseFloat(document.getElementById('plAmount').value);  
  const price    = prices['bitcoin'] || 95420;  
  const el = document.getElementById('plResult');  
  if (!isNaN(buyPrice) && !isNaN(amount) && buyPrice > 0 && amount > 0) {  
    const cost = buyPrice * amount;  
    const cur  = price * amount;  
    const pl   = cur - cost;  
    const pct  = (pl/cost*100).toFixed(2);  
    const sign = pl >= 0 ? '+' : '';  
    el.textContent = sign + '$' + pl.toLocaleString('en-US',{maximumFractionDigits:0});  
    el.style.color = pl >= 0 ? 'var(--success)' : 'var(--danger)';  
    document.getElementById('plSub').textContent =  
      sign + pct + '%  ·  COST BASIS  $' + cost.toLocaleString('en-US',{maximumFractionDigits:0});  
  } else {  
    el.textContent = '—';  
    el.style.color = 'var(--gold-light)';  
    document.getElementById('plSub').textContent = 'P&L AT CURRENT SPOT';  
  }  
}  
  
// ============================================================  
// TOAST  
// ============================================================  
function showToast(msg) {  
  const t = document.getElementById('toast');  
  t.textContent = msg;  
  t.classList.add('show');  
  setTimeout(() => t.classList.remove('show'), 2800);  
}  
  
// ============================================================  
// INIT  
// ============================================================  
renderYields();  
updateCoinSelect();  
fetchAllData();  
setInterval(fetchAllData, 60000);  
</script>  
  
</body>  
</html>  
