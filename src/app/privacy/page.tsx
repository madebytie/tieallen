import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Tie Allen",
  description: "Comprehensive privacy disclosures for Tie Allen design studio, including California (CCPA/CPRA) and GDPR compliance.",
};

export default function PrivacyPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <main style={{ 
      maxWidth: "900px", 
      margin: "0 auto", 
      padding: "160px 24px 100px",
      minHeight: "100vh"
    }}>
      <h1 style={{ 
        fontFamily: "var(--font-logo)", 
        fontSize: "clamp(2.5rem, 5vw, 4rem)", 
        marginBottom: "1rem",
        letterSpacing: "-0.03em" 
      }}>
        Privacy Policy
      </h1>
      <p style={{ 
        color: "var(--text-muted)", 
        marginBottom: "4rem",
        fontSize: "0.9rem",
        fontFamily: "var(--font-logo)",
        textTransform: "uppercase",
        letterSpacing: "0.1em"
      }}>
        Last Updated: {lastUpdated}
      </p>

      <div style={{ color: "var(--text-secondary)", lineHeight: "1.7", fontSize: "1.05rem" }}>
        
        {/* --- 1. Introduction --- */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontFamily: "var(--font-logo)", color: "var(--text-primary)", marginBottom: "1.5rem", fontSize: "1.75rem", letterSpacing: "-0.02em" }}>
            1. Overview
          </h2>
          <p>
            Tie Allen (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting the privacy of our clients and website visitors. This Privacy Policy describes how we collect, use, and share personal information in accordance with applicable laws, including the **California Consumer Privacy Act (CCPA)** as amended by the **California Privacy Rights Act (CPRA)** and the **General Data Protection Regulation (GDPR)**.
          </p>
        </section>

        {/* --- 2. Notice at Collection (California Specific) --- */}
        <section style={{ marginBottom: "4rem", padding: "2rem", backgroundColor: "var(--bg-secondary)", borderRadius: "1rem", border: "1px solid var(--border-subtle)" }}>
          <h2 style={{ fontFamily: "var(--font-logo)", color: "var(--text-primary)", marginBottom: "1rem", fontSize: "1.25rem" }}>
            Notice at Collection
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            We collect the following categories of personal information to provide our services and manage our business operations:
          </p>
          <ul style={{ paddingLeft: "1.5rem", listStyleType: "square" }}>
            <li><strong>Identifiers:</strong> Name, email address, IP address, and unique device identifiers.</li>
            <li><strong>Commercial Information:</strong> Project history, services purchased, and payment meta-data.</li>
            <li><strong>Internet Activity:</strong> Browsing history, search history, and interaction with our website.</li>
            <li><strong>Professional Information:</strong> Job title, company name, and professional background provided during consultations.</li>
          </ul>
        </section>

        {/* --- 3. Data Collection Details --- */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontFamily: "var(--font-logo)", color: "var(--text-primary)", marginBottom: "1.5rem", fontSize: "1.75rem", letterSpacing: "-0.02em" }}>
            2. Sources of Information
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            We collect information from the following sources:
          </p>
          <ul style={{ paddingLeft: "1.5rem", marginBottom: "1rem", listStyleType: "disc" }}>
            <li><strong>Directly from you:</strong> Via contact forms, emails, and project consultations.</li>
            <li><strong>Automatically:</strong> Through cookies and tracking technologies as you navigate our site.</li>
            <li><strong>Third Parties:</strong> From professional networks or referrals you have authorized.</li>
          </ul>
        </section>

        {/* --- 4. Use of Data & Legal Basis --- */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontFamily: "var(--font-logo)", color: "var(--text-primary)", marginBottom: "1.5rem", fontSize: "1.75rem", letterSpacing: "-0.02em" }}>
            3. Purpose of Processing
          </h2>
          <p>
            We process your data based on legitimate business interests (delivering services), contractual necessity (executing project agreements), and compliance with legal obligations. We use your data to:
          </p>
          <ul style={{ paddingLeft: "1.5rem", marginTop: "1rem", listStyleType: "disc" }}>
            <li>Provide design and development services.</li>
            <li>Communicate regarding projects and updates.</li>
            <li>Analyze website performance to improve user experience.</li>
            <li>Prevent fraudulent activity and maintain security.</li>
          </ul>
        </section>

        {/* --- 5. No Sale or Sharing --- */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontFamily: "var(--font-logo)", color: "var(--text-primary)", marginBottom: "1.5rem", fontSize: "1.75rem", letterSpacing: "-0.02em" }}>
            4. Selling and Sharing of Information
          </h2>
          <p style={{ fontWeight: "600", color: "var(--text-primary)" }}>
            We do not &quot;sell&quot; personal information for monetary compensation. 
          </p>
          <p>
            Additionally, we do not &quot;share&quot; personal information with third parties for cross-context behavioral advertising purposes. We only disclose information to service providers (like our CRM or hosting) who are contractually bound to use the data only for the purpose of helping us deliver our services.
          </p>
        </section>

        {/* --- 6. California Resident Rights --- */}
        <section style={{ marginBottom: "4rem", borderTop: "1px solid var(--border-subtle)", paddingTop: "3rem" }}>
          <h2 style={{ fontFamily: "var(--font-logo)", color: "var(--text-primary)", marginBottom: "1.5rem", fontSize: "1.75rem", letterSpacing: "-0.02em" }}>
            5. Your CCPA/CPRA Rights (California Residents)
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            If you are a California resident, you have specific rights regarding your personal information:
          </p>
          <div style={{ display: "grid", gap: "1.5rem" }}>
            <div>
              <h3 style={{ fontSize: "1.1rem", color: "var(--text-primary)", marginBottom: "0.25rem" }}>Right to Know</h3>
              <p>You can request a report of what categories and specific pieces of personal information we have collected about you.</p>
            </div>
            <div>
              <h3 style={{ fontSize: "1.1rem", color: "var(--text-primary)", marginBottom: "0.25rem" }}>Right to Delete</h3>
              <p>You can request that we delete the personal information we have collected from you, subject to certain legal exceptions.</p>
            </div>
            <div>
              <h3 style={{ fontSize: "1.1rem", color: "var(--text-primary)", marginBottom: "0.25rem" }}>Right to Correct</h3>
              <p>You can request that we rectify inaccurate personal information that we maintain about you.</p>
            </div>
            <div>
              <h3 style={{ fontSize: "1.1rem", color: "var(--text-primary)", marginBottom: "0.25rem" }}>Right to Non-Discrimination</h3>
              <p>We will not discriminate against you for exercising any of your privacy rights.</p>
            </div>
          </div>
        </section>

        {/* --- 7. Security & Retention --- */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontFamily: "var(--font-logo)", color: "var(--text-primary)", marginBottom: "1.5rem", fontSize: "1.75rem", letterSpacing: "-0.02em" }}>
            6. Security and Retention
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            We implement industry-standard administrative, technical, and physical security measures to protect your data. We retain personal information only for as long as necessary to fulfill the purposes for which it was collected or to comply with legal requirements.
          </p>
        </section>

        {/* --- 8. Contact --- */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontFamily: "var(--font-logo)", color: "var(--text-primary)", marginBottom: "1.5rem", fontSize: "1.75rem", letterSpacing: "-0.02em" }}>
            7. Contact for Rights Requests
          </h2>
          <p>
            To exercise your rights, please submit a request to:
            <br />
            <Link href="mailto:privacy@tieallen.com" style={{ color: "var(--accent-color)", fontWeight: "600", textDecoration: "underline", fontSize: "1.2rem", display: "inline-block", marginTop: "0.5rem" }}>
              privacy@tieallen.com
            </Link>
          </p>
          <p style={{ marginTop: "1.5rem", fontSize: "0.95rem" }}>
            We will verify your request by matching the contact information provided with our records. You may also designate an authorized agent to make a request on your behalf.
          </p>
        </section>

        <footer style={{ marginTop: "6rem", paddingTop: "2rem", borderTop: "1px solid var(--border-subtle)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/" style={{ color: "var(--text-primary)", fontWeight: "600", fontSize: "0.95rem", fontFamily: "var(--font-logo)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            ← Return to Home
          </Link>
          <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
            &copy; {new Date().getFullYear()} Tie Allen Love
          </span>
        </footer>
      </div>
    </main>
  );
}
