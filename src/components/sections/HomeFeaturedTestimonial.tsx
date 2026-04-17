"use client";

import HomeTestimonialCard from "./HomeTestimonialCard";
import styles from "./home-featured-testimonial.module.css";

export default function HomeFeaturedTestimonial() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.splitLayout}>

          <div className={styles.imageSide}>
            <HomeTestimonialCard
              title="BCH Devcon"
              subtitle=""
              image="/assets/IMG_3257.jpg"
              objectPosition="center center"
              overlay={true}
            />
          </div>

          <div className={styles.textSide}>
            <p className={styles.quote}>
              "We were launching a global hackathon series at{" "}
              <span className={styles.highlight}>San Francisco Blockchain Week starting at zero and needed everything ready to launch within 2 weeks.</span>
              {" "}Tie delivered. We received a lot of great comments on the branding during the kickoff SF Hackathon.{" "}
              <span className={styles.highlight}>You did a great job!</span>"
            </p>
            <p className={styles.author}>- Vincent | BITMAIN, Investment Director</p>
          </div>

        </div>
      </div>
    </section>
  );
}
