import type { Metadata } from "next";
import Image from "next/image";
import StartProjectForm from "@/components/sections/StartProjectForm";
import styles from "./get-started.module.css";

export const metadata: Metadata = {
  title: "Start a Project | made by tie",
  description: "Tell me about your project and let's build something great together.",
};

export default function GetStarted() {
  return (
    <div className={styles.page}>
      {/* ── Left - image ── */}
      <div className={styles.imagePanel}>
        <Image
          src="/assets/Gemini_Generated_Image_x80i5lx80i5lx80i.jpeg"
          alt=""
          width={700}
          height={933}
          className={styles.image}
          priority
        />
      </div>

      {/* ── Right - form ── */}
      <div className={styles.formPanel}>
        <StartProjectForm />
      </div>
    </div>
  );
}
