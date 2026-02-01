import Link from 'next/link';
import Head from 'next/head';
import { profileData } from '../data/profileData';
import styles from '../styles/Home.module.css';

export default function Home({ profile }) {
  return (
    <>
      <Head>
        <title>{profile.name} | Senior React Native & React.js Engineer</title>
        <meta name="description" content={profile.summary.substring(0, 160)} />
        <meta name="keywords" content="React Native Developer, React.js Developer, Senior Software Engineer, Mobile App Developer, Frontend Engineer" />
      </Head>

      <div className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>{profile.name}</h1>
            <p className={styles.heroSubtitle}>{profile.title}</p>
            <p className={styles.heroDescription}>{profile.subtitle}</p>
            
            <div className={styles.heroCta}>
              <Link href="/contact" className={styles.btnPrimary}>
                Get In Touch
              </Link>
              <Link href="/projects" className={styles.btnSecondary}>
                View Projects
              </Link>
            </div>

            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>7+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>5M+</span>
                <span className={styles.statLabel}>Users Impacted</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>40×</span>
                <span className={styles.statLabel}>Revenue Growth</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.highlights}>
          <div className={styles.contentContainer}>
            <h2 className={styles.sectionTitle}>Highlights</h2>
            <div className={styles.highlightsGrid}>
              <div className={styles.highlightCard}>
                <div className={styles.highlightIcon}>🚀</div>
                <h3>Founding Engineer</h3>
                <p>Built Freedo Rentals from 0 → 1 → scale, reaching 5M+ users</p>
              </div>
              <div className={styles.highlightCard}>
                <div className={styles.highlightIcon}>💼</div>
                <h3>Currently at Barclays</h3>
                <p>Senior Software Engineer at Capgemini UK for Barclays Bank</p>
              </div>
              <div className={styles.highlightCard}>
                <div className={styles.highlightIcon}>📱</div>
                <h3>React Native Expert</h3>
                <p>Specialized in building high-performance mobile applications</p>
              </div>
              <div className={styles.highlightCard}>
                <div className={styles.highlightIcon}>🌍</div>
                <h3>Global Experience</h3>
                <p>Delivered solutions for clients in UK, Australia, Israel, Bahrain</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.skillsPreview}>
          <div className={styles.contentContainer}>
            <h2 className={styles.sectionTitle}>Core Technologies</h2>
            <div className={styles.techTags}>
              {profile.skills.frontend.slice(0, 12).map((skill, index) => (
                <span key={index} className={styles.techTag}>{skill}</span>
              ))}
            </div>
            <div className={styles.viewMore}>
              <Link href="/about" className={styles.linkButton}>
                View Full Skills →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// SSG - Pre-render at build time for fast loading and SEO
export async function getStaticProps() {
  return {
    props: {
      profile: profileData,
    },
  };
}
