"use client";

import styles from "./client-roster.module.css";

interface Client {
  name: string;
  details?: string;
  isHighImpact?: boolean;
}

interface Sector {
  title: string;
  clients: Client[];
}

const rosterData: Sector[] = [
  {
    title: "City & Events",
    clients: [
      { name: "City of Alpharetta", details: "Tech Center Brand & Website" },
      { name: "Mayor of Alpharetta", details: "Strategic digital presence" },
      { name: "Taste of Alpharetta", details: "City-funded festival" },
      { name: "Wire & Wood Festival", details: "City-funded festival" },
      { name: "Chamber of Commerce", details: "Regional brand & website" },
    ],
  },
  {
    title: "Venture & Web3",
    clients: [
      { name: "Bitmain", details: "#1 global bitcoin mining mfg" },
      { name: "Permissionless Ventures", details: "$100M VC Fund" },
      { name: "BCH Global Hackathon", details: "Brand & ecosystem development" },
    ],
  },
  {
    title: "Specialized Industrial",
    clients: [
      { name: "CI² Aviation", details: "150 private airports globally" },
      { name: "IPG Medical", details: "$100M medical manufacturing" },
      { name: "Stanlok Precision MFG", details: "Lunar mission component manufacturing" },
      { name: "Servco Wholesale", details: "National forklift & healthcare logistics" },
    ],
  },
  {
    title: "Tech & Ecommerce",
    clients: [
      { name: "Vizon OS", details: "AI-powered CRM platform" },
      { name: "LoreTorch", details: "VTT + AI Game Master platform" },
      { name: "PorchLyte", details: "Membership Platform" },
      { name: "Jennings Brands", details: "Olympians & Gold Medalists" },
    ],
  },
  {
    title: "Premium Lifestyle",
    clients: [
      { name: "Blue Divine", details: "Celebrity Med Spa" },
      { name: "Expose", details: "Vogue Stylist Educator" },
      { name: "YULI", details: "High-end luxury hair" },
    ],
  },
];

export default function ClientRoster() {
  return (
    <section className={styles.rosterSection}>
      <div className={styles.rosterInner}>
        {/* Header */}
        <div className={styles.rosterHeader}>
          <h2 className={styles.title}>
            Trusted to deliver
            <br />
            at the highest level
          </h2>
          
          <div className={styles.statsStrip}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>98%</span>
              <span className={styles.statLabel}>Client Retention</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statValue}>$1B+</span>
              <span className={styles.statLabel}>Client Portfolio Value</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statValue}>18 Yrs</span>
              <span className={styles.statLabel}>Experience</span>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className={styles.rosterGrid}>
          {rosterData.map((sector, idx) => (
            <div key={idx} className={styles.sectorColumn}>
              <h3 className={styles.sectorTitle}>{sector.title}</h3>
              <ul className={styles.clientList}>
                {sector.clients.map((client, cIdx) => (
                  <li key={cIdx} className={styles.clientItem}>
                    <span className={styles.clientName}>
                      {client.name}
                    </span>
                    {client.details && (
                      <span className={styles.clientDetails}>{client.details}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
