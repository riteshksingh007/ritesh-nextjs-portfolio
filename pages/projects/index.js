import Link from 'next/link';
import Head from 'next/head';
import { projects } from '../../data/profileData';
import styles from '../../styles/Projects.module.css';

export default function Projects({ projectsList }) {
  return (
    <>
      <Head>
        <title>Projects | Ritesh Kumar Singh - Portfolio</title>
        <meta name="description" content="Explore projects built by Ritesh Kumar Singh including Freedo Rentals, TapApp Cloud, Netball Livescore and more." />
        <meta name="keywords" content="React Native Projects, Mobile App Development, Web Development Portfolio" />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>My Projects</h1>
          <p className={styles.subtitle}>
            A collection of impactful mobile and web applications built with modern technologies
          </p>
        </header>

        <main className={styles.main}>
          <div className={styles.projectsGrid}>
            {projectsList.map((project) => (
              <Link 
                href={`/projects/${project.slug}`} 
                key={project.id}
                className={styles.projectCard}
              >
                <div className={styles.cardHeader}>
                  <h2 className={styles.projectName}>{project.name}</h2>
                  <div className={styles.platforms}>
                    {project.platforms.map((platform, idx) => (
                      <span key={idx} className={styles.platformBadge}>
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>

                <p className={styles.projectTagline}>{project.tagline}</p>
                <p className={styles.projectDescription}>{project.description}</p>

                <div className={styles.techStack}>
                  {project.tech.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className={styles.techTag}>{tech}</span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className={styles.techTag}>+{project.tech.length - 4} more</span>
                  )}
                </div>

                {project.impact && project.impact.length > 0 && (
                  <div className={styles.impactPreview}>
                    <strong>Impact:</strong> {project.impact[0]}
                  </div>
                )}

                <div className={styles.cardFooter}>
                  <span className={styles.company}>{project.company}</span>
                  <span className={styles.year}>{project.year}</span>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

// SSG - Pre-render at build time for SEO
export async function getStaticProps() {
  return {
    props: {
      projectsList: projects,
    },
  };
}
