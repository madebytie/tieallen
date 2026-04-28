import type { Metadata } from "next";
import ContactHero from "@/components/sections/ContactHero";
import ContactForm from "@/components/sections/ContactForm";
import ContactLocation from "@/components/sections/ContactLocation";
import FAQ from "@/components/sections/FAQ";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact | made by tie",
  description:
    "Get in touch to discuss your next project. Fill out the form or reach out directly — I'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <main className={styles.contactPage}>
      <ContactHero />
      <ContactForm />
      <ContactLocation />
      <FAQ />
    </main>
  );
}
