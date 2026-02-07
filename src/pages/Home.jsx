import React from "react";
import "../styles/styles.css";

export default function Home() {
  return (
    <div className="page">
      <header className="header">
        <div className="container header-inner">
          <div className="logo">
            <div className="logo-icon">🎟️</div>
            TicketBid
          </div>
        </div>
      </header>

      <main className="container main">
        <aside className="sidebar">
          <h3>Filters</h3>
          <label><input type="checkbox" /> Action</label><br />
          <label><input type="checkbox" /> Drama</label>
        </aside>

        <section className="grid">
          {["Dune", "Oppenheimer", "Barbie"].map((movie) => (
            <div className="card" key={movie}>
              <img
                src="https://via.placeholder.com/300x450"
                alt={movie}
                width="100%"
              />
              <div style={{ padding: 16 }}>
                <h3>{movie}</h3>
                <button className="btn-primary" style={{ marginTop: 12 }}>
                  Place Bid
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>

      <footer className="footer container">
        TicketBid © 2024
      </footer>
    </div>
  );
}
