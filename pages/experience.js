import Head from 'next/head';
import { profileData } from '../data/profileData';
import styles from '../styles/Experience.module.css';

export default function Experience({ experience }) {
  return (
    <>
      <Head>
        <title>Experience | Ritesh Kumar Singh</title>
        <meta name="description" content="Professional experience of Ritesh Kumar Singh including roles at Barclays, Hero Moto Corp, and Deftsoft." />
      </Head>

      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Professional Experience</h1>
        
        <div className={styles.timeline}>
          {experience.map((job, index) => (
            <div key={job.id} className={`${styles.timelineItem} ${job.featured ? styles.featured : ''}`}>
              <div className={styles.timelineMarker}></div>
              <div className={styles.timelineContent}>
                <div className={styles.jobHeader}>
                  <div>
                    <h2 className={styles.jobTitle}>{job.position}</h2>
                    <h3 className={styles.companyName}>
                      {job.company}
                      {job.client && <span className={styles.client}> - {job.client}</span>}
                    </h3>
                    <p className={styles.jobMeta}>
                      <span className={styles.location}>{job.location}</span>
                      <span className={styles.period}>{job.period}</span>
                      {job.current && <span className={styles.currentBadge}>Current</span>}
                    </p>
                  </div>
                </div>

                <ul className={styles.highlightsList}>
                  {job.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>

                {job.keyProjects && (
                  <div className={styles.keyProjects}>
                    <h4>Key Projects:</h4>
                    {job.keyProjects.map((project, idx) => (
                      <div key={idx} className={styles.projectItem}>
                        <strong>{project.name}</strong> ({project.tech})
                        {project.location && <span> - {project.location}</span>}
                        <br />
                        <span className={styles.projectDesc}>{project.description}</span>
                        <div className={styles.platforms}>
                          {project.platforms.map((platform, pIdx) => (
                            <span key={pIdx} className={styles.platformBadge}>{platform}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// SSG - Pre-render at build time (public work history)
export async function getStaticProps() {
  return {
    props: {
      experience: profileData.experience,
    },
  };
}
