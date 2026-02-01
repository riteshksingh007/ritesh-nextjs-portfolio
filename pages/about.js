import Head from 'next/head';
import { profileData } from '../data/profileData';
import styles from '../styles/About.module.css';

export default function About({ profile }) {
  return (
    <>
      <Head>
        <title>About | {profile.name}</title>
        <meta name="description" content={`Learn about ${profile.name}'s experience, skills, and achievements in software engineering.`} />
      </Head>

      <div className={styles.container}>
        <h1 className={styles.pageTitle}>About Me</h1>
        
        <section className={styles.section}>
          <h2>Professional Summary</h2>
          <p className={styles.summaryText}>{profile.summary}</p>
        </section>

        <section className={styles.section}>
          <h2>Skills & Technologies</h2>
          
          <div className={styles.skillsCategory}>
            <h3>Frontend Development</h3>
            <div className={styles.techTags}>
              {profile.skills.frontend.map((skill, index) => (
                <span key={index} className={styles.techTag}>{skill}</span>
              ))}
            </div>
          </div>

          <div className={styles.skillsCategory}>
            <h3>Tools & Platforms</h3>
            <div className={styles.techTags}>
              {profile.skills.tools.map((skill, index) => (
                <span key={index} className={styles.techTag}>{skill}</span>
              ))}
            </div>
          </div>

          <div className={styles.skillsCategory}>
            <h3>Deployment & Hosting</h3>
            <div className={styles.techTags}>
              {profile.skills.deployment.map((skill, index) => (
                <span key={index} className={styles.techTag}>{skill}</span>
              ))}
            </div>
          </div>

          <div className={styles.skillsCategory}>
            <h3>Analytics & Integration</h3>
            <div className={styles.techTags}>
              {profile.skills.analytics.map((skill, index) => (
                <span key={index} className={styles.techTag}>{skill}</span>
              ))}
            </div>
          </div>

          <div className={styles.skillsCategory}>
            <h3>Leadership & Management</h3>
            <div className={styles.techTags}>
              {profile.skills.leadership.map((skill, index) => (
                <span key={index} className={styles.techTag}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Education</h2>
          <div className={styles.educationCard}>
            <h3>{profile.education.degree}</h3>
            <p className={styles.institution}>{profile.education.institution}</p>
            <p className={styles.period}>{profile.education.period}</p>
            <p className={styles.cgpa}>CGPA: {profile.education.cgpa}</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Achievements</h2>
          <div className={styles.achievementsList}>
            {profile.achievements.map((achievement, index) => (
              <div key={index} className={styles.achievementItem}>
                <h3>{achievement.title}</h3>
                <p>{achievement.organization} • {achievement.year}</p>
                {achievement.project && <p className={styles.projectDetail}>{achievement.project}</p>}
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Certifications</h2>
          <div className={styles.certificationsList}>
            {profile.certifications.map((cert, index) => (
              <div key={index} className={styles.certItem}>
                <h3>{cert.name}</h3>
                <p>{cert.issuer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Languages</h2>
          <div className={styles.techTags}>
            {profile.languages.map((lang, index) => (
              <span key={index} className={styles.techTag}>{lang}</span>
            ))}
          </div>
        </section>

        <section className={styles.workAuth}>
          <h2>Work Authorization</h2>
          <p>{profile.workAuth}</p>
        </section>
      </div>
    </>
  );
}

// SSG - Pre-render at build time (public CV content)
export async function getStaticProps() {
  return {
    props: {
      profile: profileData,
    },
  };
}
