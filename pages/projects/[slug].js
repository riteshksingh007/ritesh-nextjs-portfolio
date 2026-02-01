import Link from 'next/link';
import Head from 'next/head';
import { projects } from '../../data/profileData';
import styles from '../../styles/ProjectDetail.module.css';

export default function ProjectDetail({ project }) {
  if (!project) {
    return (
      <div className={styles.container}>
        <div className={styles.notFound}>
          <h1>Project Not Found</h1>
          <Link href="/projects">← Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{project.name} | Ritesh Kumar Singh</title>
        <meta name="description" content={project.description} />
        <meta name="keywords" content={`${project.name}, ${project.tech.join(', ')}, ${project.role}`} />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content={`${project.name} | Ritesh Kumar Singh`} />
        <meta property="og:description" content={project.description} />
        <meta property="og:type" content="website" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": project.name,
              "description": project.description,
              "applicationCategory": "MobileApplication",
              "author": {
                "@type": "Person",
                "name": "Ritesh Kumar Singh"
              },
              "dateCreated": project.year,
              "programmingLanguage": project.tech
            })
          }}
        />
      </Head>

      <div className={styles.container}>
        <nav className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span> / </span>
          <Link href="/projects">Projects</Link>
          <span> / </span>
          <span>{project.name}</span>
        </nav>

        <header className={styles.projectHeader}>
          <div className={styles.headerTop}>
            <h1 className={styles.projectTitle}>{project.name}</h1>
            <div className={styles.platforms}>
              {project.platforms.map((platform, idx) => (
                <span key={idx} className={styles.platformBadge}>
                  {platform}
                </span>
              ))}
            </div>
          </div>
          
          <p className={styles.tagline}>{project.tagline}</p>
          
          <div className={styles.metadata}>
            <span className={styles.metaItem}>
              <strong>Role:</strong> {project.role}
            </span>
            <span className={styles.metaItem}>
              <strong>Company:</strong> {project.company}
            </span>
            <span className={styles.metaItem}>
              <strong>Year:</strong> {project.year}
            </span>
            {project.location && (
              <span className={styles.metaItem}>
                <strong>Location:</strong> {project.location}
              </span>
            )}
          </div>
        </header>

        <main className={styles.projectContent}>
          <section className={styles.section}>
            <h2>Overview</h2>
            <p className={styles.description}>{project.description}</p>
          </section>

          <section className={styles.section}>
            <h2>About the Project</h2>
            <div className={styles.longDescription}>
              {project.longDescription.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2>Technology Stack</h2>
            <div className={styles.techGrid}>
              {project.tech.map((tech, idx) => (
                <span key={idx} className={styles.techItem}>{tech}</span>
              ))}
            </div>
          </section>

          {project.features && project.features.length > 0 && (
            <section className={styles.section}>
              <h2>Key Features</h2>
              <ul className={styles.featuresList}>
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </section>
          )}

          {project.impact && project.impact.length > 0 && (
            <section className={styles.section}>
              <h2>Impact & Results</h2>
              <div className={styles.impactGrid}>
                {project.impact.map((item, idx) => (
                  <div key={idx} className={styles.impactCard}>
                    <span className={styles.impactIcon}>📊</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.links && Object.keys(project.links).length > 0 && (
            <section className={styles.section}>
              <h2>Links</h2>
              <div className={styles.linkButtons}>
                {project.links.playStore && (
                  <a 
                    href={project.links.playStore} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.linkButton}
                  >
                    📱 Google Play Store
                  </a>
                )}
                {project.links.appStore && (
                  <a 
                    href={project.links.appStore} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.linkButton}
                  >
                    🍎 Apple App Store
                  </a>
                )}
                {project.links.website && (
                  <a 
                    href={project.links.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.linkButton}
                  >
                    🌐 Website
                  </a>
                )}
              </div>
            </section>
          )}
        </main>

        <div className={styles.navigation}>
          <Link href="/projects" className={styles.backButton}>
            ← Back to All Projects
          </Link>
        </div>
      </div>
    </>
  );
}

// SSG - Generate static pages for all projects at build time
export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false, // 404 for non-existent slugs
  };
}

export async function getStaticProps({ params }) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
}
