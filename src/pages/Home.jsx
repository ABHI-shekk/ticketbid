import React from "react";
import "../styles/styles.css";

export default function Home() {
  return (
    <div className="page">
      <header className="header">
        <div className="container header-inner">
          <div className="logo">
            <div className="logo-icon">🎟️</div>
            <span>TicketBid</span>
          </div>
        </div>
      </header>

      <main className="home-main">
        <div className="container">
          <section className="home-hero">
            <div className="home-hero-text">
              <p className="home-eyebrow">Live movie ticket auctions</p>
              <h1>Bid on the hottest seats in town.</h1>
              <p className="home-subtitle">
                Discover new drops, track ongoing auctions, and revisit your bidding
                history &mdash; all from a single, elegant dashboard.
              </p>
            </div>
          </section>

          <section className="home-grid" aria-label="TicketBid categories">
            {[
              {
                id: "new",
                title: "New",
                description:
                  "Freshly listed auctions starting soon. Catch early-bird deals before everyone else.",
                cta: "Browse new drops",
              },
              {
                id: "ongoing",
                title: "Ongoing",
                description:
                  "Auctions that are live right now. Place strategic bids and watch prices in real time.",
                cta: "View live auctions",
              },
              {
                id: "history",
                title: "History",
                description:
                  "Your previous bids, wins, and losses. Learn from past games and refine your strategy.",
                cta: "Review your history",
              },
            ].map((card) => (
              <article
                key={card.id}
                className={`home-card home-card--${card.id}`}
              >
                <header className="home-card-header">
                  <h2>{card.title}</h2>
                </header>
                <p className="home-card-body">{card.description}</p>
                <button className="btn-primary home-card-cta">
                  {card.cta}
                </button>
              </article>
            ))}
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="container footer-inner">TicketBid © 2024</div>
      </footer>
    </div>
  );
}
