# 💫 Lumi Website

<p align="center">
  <strong>Meet people. Match naturally. Connect on Telegram.</strong>
</p>

<p align="center">
  The official website for <a href="https://t.me/Lumimatch_bot">Lumi</a> — a Telegram-based social matching bot.
</p>

<p align="center">
  <a href="https://t.me/Lumimatch_bot">💬 Open Lumi</a> ·
  <a href="https://lumimatch.vercel.app/">🌐 Website</a> ·
  <a href="https://github.com/Ramsfield30/Lumi">🤖 Bot Repository</a>
</p>

---

## 💫 What is Lumi?

Lumi is a **Telegram social matching bot** built around discovering people, creating meaningful connections, and meeting others through Telegram.

Users create a profile, choose who they want to meet, set their location and mood, then discover other profiles through Lumi's matching system.

When two people like each other, Lumi creates a **match** and connects the experience through Telegram.

This repository is **only the website**. The actual Lumi bot and its application logic live in the [`Ramsfield30/Lumi`](https://github.com/Ramsfield30/Lumi) repository.

---

## ✨ What Lumi offers

### 👤 Profiles

Users can build and manage a profile with:

- Name
- Age
- Gender
- Who they want to meet
- Location
- Bio
- Profile photos
- Optional profile video
- Mood

Profiles can also be edited after registration.

### ❤️ Matching

Lumi's core experience is profile discovery and matching.

Users can:

- Browse profiles
- ❤️ Like
- 👎 Pass
- ⭐ Super Like
- See incoming likes
- Create mutual matches
- Stop searching when they want

### 📍 Location discovery

Lumi supports location-based discovery. Users can share their Telegram location or provide their country manually during registration.

### 💭 Mood

Users can indicate the kind of connection they are looking for:

- 🤝 Friendship
- 💬 Just Chat
- 💕 Flirt
- 💍 Serious

### ⭐ Premium

Lumi also has a Premium experience powered by **Telegram Stars**.

Premium functionality in the bot includes features such as:

- 🌍 Global matching
- ♾️ Unlimited swipes
- ⭐ Super Likes
- 👀 See who liked you
- 🚀 Priority queue
- 👻 Invisible mode
- 🚫 Ad-free experience

Premium subscriptions are handled inside Telegram.

### 🛡️ Safety & moderation

Lumi includes tools for users to report and block other users.

The bot also has an administrative moderation system for reviewing reports and managing users.

### 🎁 Referrals

Lumi includes a referral system that lets users invite others through personal referral links and earn Premium rewards for successful referrals.

---

## 🌐 About this website

The website is the **public-facing side of Lumi**.

Its purpose is to explain the product, communicate its features, introduce Premium, and give visitors a direct path into the Telegram bot.

It is deliberately separate from the bot code so the website can evolve independently from Lumi's backend and Telegram handlers.

### Website sections

- **Hero** — introduces Lumi and links to Telegram
- **How it works** — explains the matching journey
- **Features** — highlights Lumi functionality
- **Premium** — presents the Premium experience
- **CTA** — sends visitors to Lumi on Telegram
- **Footer** — project links and information

---

## 🛠️ Built with

The website is a lightweight static frontend:

- **HTML5**
- **CSS3**
- **Vanilla JavaScript**
- **Google Fonts — Nunito**

There is no frontend framework or package manager required.

---

## 📁 Project structure

```text
Lumi-Website/
│
├── index.html      # Website markup and content
├── style.css       # Layout, responsive design and visual effects
├── script.js       # Interactions and animations
└── README.md       # Project documentation
```

---

## 🚀 Run locally

Clone the repository:

```bash
git clone https://github.com/Ramsfield30/Lumi-Website.git
cd Lumi-Website
```

Then open `index.html` in your browser.

Or run a simple local server:

```bash
python -m http.server 8000
```

Open `http://localhost:8000`.

---

## 🔗 Lumi ecosystem

| Project | Purpose |
|---|---|
| [`Lumi`](https://github.com/Ramsfield30/Lumi) | 🤖 Telegram bot and application logic |
| [`Lumi-Website`](https://github.com/Ramsfield30/Lumi-Website) | 🌐 Public website |
| [Lumi on Telegram](https://t.me/Lumimatch_bot) | 💬 User-facing Telegram experience |

The **bot repository is the source of truth for Lumi's functionality**. The website describes and presents that product.

---

## 🔐 Security

This website contains **no bot tokens, database credentials, API keys, or other private configuration**.

Secrets belong in environment variables or other secure deployment configuration and should never be committed to the repository.

If you are working on the Lumi bot, keep credentials outside source control and use a `.env` file locally with an appropriate `.gitignore` rule.

---

## 📱 Responsive by design

The website is designed for:

- 📱 Mobile
- 📲 Tablet
- 💻 Desktop

The interface adapts to smaller screens while keeping the primary Telegram call-to-action easy to access.

---

## 📌 Project status

Lumi is an actively developed Telegram bot with a dedicated public website.

The website and bot are maintained independently:

```text
                 💫 LUMI
                    │
          ┌─────────┴─────────┐
          │                   │
       Website               Bot
          │                   │
   Public experience     Actual product
          │                   │
   HTML/CSS/JS          Node.js/Telegraf
                              │
                           Telegram
```

---

## 📄 License

No open-source license has been specified for this repository. Unless a license is added, the project remains **all rights reserved**.

---

<p align="center">
  <strong>💫 Lumi</strong><br>
  <em>Meet people. Match naturally. Connect on Telegram.</em>
</p>
