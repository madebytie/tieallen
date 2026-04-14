import styles from "./about-mission.module.css";

export default function AboutMission() {
  return (
    <section className={styles.missionSection}>
      <div className={styles.missionInner}>
        <div className={styles.missionBlock}>
          <p className={styles.missionMain}>
            I have been fortunate to work with companies of all sizes from <strong>big enterprises to one-man startups</strong>, from all around the world.
          </p>

        </div>
      </div>
    </section>
  );
}
