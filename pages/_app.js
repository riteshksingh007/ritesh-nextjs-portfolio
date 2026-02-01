import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="nav-container">
          <Link href="/" className="nav-logo">
            <span className="logo-text">Ritesh Singh</span>
            <span className="logo-subtitle">Senior Software Engineer</span>
          </Link>
          
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <Link 
                href="/" 
                className={`nav-link ${router.pathname === '/' ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                href="/about" 
                className={`nav-link ${router.pathname === '/about' ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                href="/experience" 
                className={`nav-link ${router.pathname === '/experience' ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                href="/projects" 
                className={`nav-link ${router.pathname.startsWith('/projects') ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                href="/contact" 
                className={`nav-link ${router.pathname === '/contact' ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <main className="main-content">
        <Component {...pageProps} />
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Ritesh Kumar Singh. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://github.com/riteshksingh007" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/ritesh-k-singh" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:riteshksingh07@gmail.com">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
