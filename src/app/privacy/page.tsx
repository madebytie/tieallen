import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Tie Allen",
  description: "How we handle your data at Tie Allen design studio.",
};

export default function PrivacyPage() {
  return (
    <main style={{ 
      maxWidth: "800px", 
      margin: "0 auto", 
      padding: "160px 24px 80px",
      minHeight: "100vh"
    }}>
      <h1 style={{ 
        fontFamily: "var(--font-logo)", 
        fontSize: "clamp(2.5rem, 5vw, 4rem)", 
        marginBottom: "3rem",
        letterSpacing: "-0.03em" 
      }}>
        Privacy Policy
      </h1>

      <div style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}>
        <p style={{ marginBottom: "2rem" }}>
          Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "var(--font-logo)", color: "var(--text-primary)", marginBottom: "1rem", fontSize: "1.5rem" }}>
            1. Introduction
          </h2>
          <p>
            Welcome to Tie Allen. We respect your privacy and are committed to protecting your personal data. 
            This policy explains how we handle information when you visit our website or engage with our services.
          </p>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "var(--font-logo)", color: "var(--text-primary)", marginBottom: "1rem", fontSize: "1.5rem" }}>
            2. Information We Collect
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            We only collect information that is necessary to provide you with a premium design and development experience:
          </p>
          <ul style={{ paddingLeft: "1.5rem", marginBottom: "1rem", listStyleType: "disc" }}>
            <li>Contact details (name and email) if you reach out via our contact forms.</li>
            <li>Basic analytics data (IP address, browser type) to help us improve site performance.</li>
            <li>Project-related information provided during consultations.</li>
          </ul>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "var(--font-logo)", color: "var(--text-primary)", marginBottom: "1rem", fontSize: "1.5rem" }}>
            3. How We Use Your Data
          </h2>
          <p>
            Your information is used solely to communicate with you, deliver requested services, and maintain the quality of our studio's output. 
            We do not sell, trade, or otherwise transfer your data to outside parties.
          </p>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "var(--font-logo)", color: "var(--text-primary)", marginBottom: "1rem", fontSize: "1.5rem" }}>
            4. Third-Party Services
          </h2>
          <p>
            We may use third-party tools (such as Vizonos CRM or Google Analytics) to facilitate our workflow. 
            These providers have their own privacy policies governing how they handle your data.
          </p>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "var(--font-logo)", color: "var(--text-primary)", marginBottom: "1rem", fontSize: "1.5rem" }}>
            5. Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            <Link href="mailto:hello@tieallen.com" style={{ color: "var(--accent-color)", fontWeight: "500", textDecoration: "underline" }}>
              hello@tieallen.com
            </Link>
          </p>
        </section>

        <footer style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--border-subtle)" }}>
          <Link href="/" style={{ color: "var(--text-primary)", fontWeight: "500", fontSize: "0.9rem" }}>
            ← Back to Home
          </Link>
        </footer>
      </div>
    </main>
  );
}
