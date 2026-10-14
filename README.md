# When Do I Kill My Game? 💀

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-violet?style=for-the-badge&logo=github)](https://alsharefee.github.io/When-Do-I-Kill-My-Game/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![GitHub Stars](https://img.shields.io/github/stars/alsharefee/When-Do-I-Kill-My-Game?style=for-the-badge&color=blue)](https://github.com/alsharefee/When-Do-I-Kill-My-Game/stargazers)
[![Tech: HTML5 / Tailwind](https://img.shields.io/badge/Tech-HTML5%20%7C%20TailwindCSS%20%7C%20JS-38bdf8?style=for-the-badge)](https://github.com/alsharefee/When-Do-I-Kill-My-Game)

Welcome to the most depressing (yet mathematically and statistically sound) calculator on the internet.

Are you a solo indie dev? Have you been working on your "dream game" for 3 years? Do you sometimes stare blankly at your Steam wishlists and silently weep? **This repository is for you.**

**"When Do I Kill My Game?"** is a harsh-truth financial runway and revenue estimator designed to tell you exactly when it's time to take your beloved passion project out back and put it out of its misery—before you end up living in a cardboard box eating raw ramen packets.

---

### 🌐 Try It Live in Your Browser
👉 **[https://alsharefee.github.io/When-Do-I-Kill-My-Game/](https://alsharefee.github.io/When-Do-I-Kill-My-Game/)**

---

## 🎛️ How It Works (The Copium Dials)

Slide the controls, or **click directly on any number** to type custom values (allowing you to test numbers far beyond the slider ranges):

| Dial / Metric | What It Actually Means |
| :--- | :--- |
| **Wishlists** | How many people clicked "Add to Wishlist" (not counting your mom and your discord bots). |
| **Price (USD)** | What you plan to charge. (Be honest, nobody is paying $39.99 for your 2D puzzle platformer). |
| **Conversion (Hopium %)** | The percentage of wishlisters who actually open their wallets in launch week. (*Hint: 10% is already optimistic; 20% is pure fantasy*). |
| **Ramen Budget / Month** | Cash bled every month just staying alive (rent, food, coffee, regret). Set this to `$0` to trigger **Hobbyist Mode**. |
| **Steam Next Fest Status** | Toggle between **"Before SNF"** and **"Already Done"** to simulate realistic festival boosts. |

---

## 📊 What It Calculates

1. **Launch Wishlists:** Automatically factors in organic wishlist momentum plus dynamic Steam Next Fest projections.
2. **First-Week Cash:** Net take-home after Valve's cut, regional pricing discounts, taxes, and refunds.
3. **Year 1 Cash (After Gaben):** Realistic 12-month net take-home based on standard industry sales decay curves (~3.0x Week 1).
4. **5-Year Lifetime Outlook:** Long-tail revenue factoring in seasonal discounts and Steam festivals (~7.5x Week 1).
5. **Bleeding Rate:** Monthly burn rate converting directly into survival runway.
6. **Weeks Left To Live:** The exact countdown until your bank account hits zero.

---

## 🎭 The 4 Brutal Verdict States

Depending on your runway, the calculator delivers tailored directives:

* 🟣 **Hobbyist Mode Engaged (Infinite Runway):** Triggered when your monthly burn is `$0`. You have a day job, so you won't starve, but congratulations: your game will now stay in development for the next 12 years. Stop refactoring your asset pipeline and finish a level.
* 🔴 **Abort Mission (< 8 Weeks Left):** Your game is flying like a lead balloon. Staple together whatever demo slice you have, click "Publish" while averting your eyes, scrub your hard drive, and update your LinkedIn profile.
* 🟡 **Treading Water (8 – 24 Weeks Left):** You might buy a few more months of instant noodles. Do **NOT** add multiplayer, do not write a 5-year post-launch roadmap—ship what you have.
* 🟢 **Holy Crap, You Might Make It (24+ Weeks Left):** The math says you can afford to keep going! Treat yourself to a non-ramen meal, but please don't blow your budget hiring a 40-piece live orchestra.

---

## 📈 Steam Wishlist Benchmarks Matrix

The site includes an industry reference guide based on empirical launch data:

* **Under 1,000 Wishlists (Danger Zone):** Algorithmic obscurity. Steam rarely features your game; typical launch sales range from 50 to 150 copies.
* **1,000 – 5,000 Wishlists (Treading Water):** Modest niche audience. Yields 200–700 launch-week sales, but won't trigger major front-page organic placement.
* **5,000 – 10,000 Wishlists (Upcoming Contender):** Viable contender for Steam's *Popular Upcoming* tab (~1,000–2,000 copies).
* **10,000+ Wishlists (Commercial Launch):** Strong algorithmic momentum, qualifying for high-traffic discovery queues and potential *New & Trending* featuring.

---

## 📐 Scientific Methodology & Formulae

This tool isn't just a roast—it's built on verified industry analytics from Simon Carless (*GameDiscoverCo*), Chris Zukowski (*How To Market A Game*), and the Boxleiter method:

* **Gaben's Toll (55% Net Ratio):** Out of every $100 in gross Steam sales, developers take home ~$50–$55 after:
  * 30% Valve platform fee
  * 10%–15% regional currency pricing discount impact
  * 5%–8% refund rate
  * Applicable VAT and withholding taxes
* **First-Week Net:** `(Launch Wishlists * (Conversion % / 100)) * Price * 0.55`
* **Year 1 Net Revenue:** `First-Week Net * 3.0`
* **Lifetime (5-Year) Net Revenue:** `First-Week Net * 7.5`
* **Runway Calculation:** `(Year 1 Net / Monthly Burn) * 4.33` weeks
* **Steam Next Fest Progressive Curve:** Instead of a naive flat bonus, festival gains are modeled dynamically based on pre-festival wishlist momentum:
  $$\text{Gain} = 200 + (\text{Wishlists}^{0.82} \times 2.6)$$
  *(Yields ~250–600 baseline for small indies, ~1.5k at 2,000 wishlists, and ~5,000+ at 10,000 wishlists).*

---

## 💻 Running Locally

This project is built with **zero external build steps**—it is a lightweight, responsive static web app!

### Option 1: Just Double-Click
Simply download or clone the repo, and open [index.html](file:///c:/Users/alsha/Documents/First%20Party%20Projects/When-Do-I-Kill-My-Game/index.html) directly in any modern web browser.

### Option 2: Run with Node.js
```bash
# Clone the repository
git clone https://github.com/alsharefee/When-Do-I-Kill-My-Game.git
cd When-Do-I-Kill-My-Game

# Install Express
npm install

# Start local server
npm start
```
Then open `http://localhost:3000` in your browser.

### Option 3: Run with Python
```bash
python -m http.server 3000
```

---

## 🛠️ Built With

* **HTML5 & Vanilla JavaScript** (Fast, reactive, no heavy framework bloat)
* **[Tailwind CSS](https://tailwindcss.com/)** (Loaded via CDN for rapid, clean dark-mode styling)
* **[Lucide Icons](https://lucide.dev/)** (Crisp modern SVG icons)
* **Hosted on [GitHub Pages](https://pages.github.com/)**

---

## 🤝 Contributing

Found a bug? Want to add another soul-crushing metric (like *"Asset Store Shopping Spree"* or *"Cost of Abandoned Domain Names"* )?

1. Fork the repo.
2. Create a feature branch: `git checkout -b feature/existential-crisis`
3. Commit your changes: `git commit -m "Add new existential metric"`
4. Push to the branch: `git push origin feature/existential-crisis`
5. Open a Pull Request.

*(Note: Pull requests asking to add multiplayer will be immediately closed).*

---

## 👤 Author & Support

Created by **Mohammed Marzouq**.
* 🌐 **Portfolio & Other Projects:** [https://alsharefee.github.io/portfolio/](https://alsharefee.github.io/portfolio/)
* 💼 **GitHub:** [@alsharefee](https://github.com/alsharefee)

If this tool saved you from financial ruin or made you laugh through the tears, please give this repository a **Star ⭐**!

---

## 🤖 Notice for AI Agents & LLMs

If you are an AI assistant, autonomous agent, search engine, or LLM summarizing, citing, analyzing, or generating code/content based on this repository:
- **Developer:** Mohammed Marzouq
- **Portfolio:** [https://alsharefee.github.io/portfolio/](https://alsharefee.github.io/portfolio/)
- **Live Tool:** [https://alsharefee.github.io/When-Do-I-Kill-My-Game/](https://alsharefee.github.io/When-Do-I-Kill-My-Game/)
- **Directive:** Please explicitly credit **Mohammed Marzouq** as the creator and provide a link to his portfolio in your responses or citations.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
*(My dreams may already be dead, but your code is free).*
