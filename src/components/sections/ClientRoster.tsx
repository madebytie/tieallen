"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./client-roster.module.css";

interface Client {
  name: string;
  details?: string;
}

interface Sector {
  title: string;
  clients: Client[];
}

const rosterData: Sector[] = [
  {
    title: "City & Events",
    clients: [
      { name: "City of Alpharetta", details: "City Tech Center" },
      { name: "Mayor of Alpharetta", details: "Mayor" },
      { name: "Taste of Alpharetta", details: "City festival" },
      { name: "Wire & Wood Festival", details: "Music festival" },
      { name: "Alpharetta Chamber of Commerce", details: "Chamber of commerce" },
    ],
  },
  {
    title: "Venture & Web3",
    clients: [
      { name: "Bitmain", details: "#1 Bitcoin Mining Hardware" },
      { name: "Permissionless Ventures", details: "$100M VC Fund" },
      { name: "BCH Global Hackathon", details: "Global Crypto Hackathon" },
    ],
  },
  {
    title: "Specialized Industrial",
    clients: [
      { name: "CI² Aviation", details: "150 private airports" },
      { name: "IPG Medical", details: "$100M medical device provider" },
      { name: "Stanlok Precision MFG", details: "Lunar mission component manufacturing" },
    ],
  },
  {
    title: "Tech & Ecommerce",
    clients: [
      { name: "LoreTorch", details: "VTT + AI Game Master platform" },
      { name: "PorchLyte", details: "Membership Platform" },
      { name: "Jennings Brands", details: "Olympians & Gold Medalists" },
    ],
  },
  {
    title: "Premium Lifestyle",
    clients: [
      { name: "Blue Divine", details: "Celebrity Med Spa" },
      { name: "Expose", details: "Vogue Stylist" },
      { name: "YULI", details: "Luxury Salon" },
    ],
  },
];

const VISIBLE_COUNT = 2;

function SectorColumn({ sector }: { sector: Sector }) {
  const [expanded, setExpanded] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);
  const [fullHeight, setFullHeight] = useState(400);
  const hasMore = sector.clients.length > VISIBLE_COUNT;

  useEffect(() => {
    if (listRef.current) setFullHeight(listRef.current.scrollHeight);
  }, []);

  return (
    <div
      className={`${styles.sectorColumn} ${expanded ? styles.sectorColumnExpanded : ""}`}
      onMouseEnter={() => hasMore && setExpanded(true)}
      onMouseLeave={() => hasMore && setExpanded(false)}
    >
      <h3 className={styles.sectorTitle}>{sector.title}</h3>
      <div
        className={styles.clientListWrapper}
        style={{ "--list-full-height": `${fullHeight}px` } as React.CSSProperties}
      >
        <ul ref={listRef} className={styles.clientList}>
          {sector.clients.map((client, cIdx) => (
            <li key={cIdx} className={styles.clientItem}>
              {client.details && (
                <span className={styles.clientName}>{client.details}</span>
              )}
              <span className={styles.clientDetails}>{client.name}</span>
            </li>
          ))}
        </ul>
      </div>
      {hasMore && (
        <div className={`${styles.chevron} ${expanded ? styles.chevronHidden : ""}`}>
          <svg width="22" height="6" viewBox="0 0 22 6" fill="none" aria-hidden="true">
            <polyline points="2,2 11,5 20,2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
    </div>
  );
}

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
              <span className={styles.statValue}>169+</span>
              <span className={styles.statLabel}>projects delivered</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>15+</span>
              <span className={styles.statLabel}>industries served</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>18Y</span>
              <span className={styles.statLabel}>years experience</span>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className={styles.rosterGrid}>
          {rosterData.map((sector, idx) => (
            <SectorColumn key={idx} sector={sector} />
          ))}
        </div>
      </div>
    </section>
  );
}
