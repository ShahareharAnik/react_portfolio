import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Add JSON-LD for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Shaharehar Rahaman Anik",
  "url": "https://shahareharrahamananik.netlify.app/",
  "image": "/src/assets/logo-white.png",
  "sameAs": [
    "https://www.linkedin.com/in/shahareharrahamananik/",
    "https://github.com/shahareharanik"
  ],
  "jobTitle": "Software Engineer",
  "worksFor": {
    "@type": "Organization",
    "name": "Brain Station 23"
  },
  "description": "Software Engineer specializing in web development, application design, and full-stack solutions.",
  "knowsAbout": ["Software Development", "Web Development", "React", "Node.js", "JavaScript", "UI/UX Design"]
};

// Create script element for JSON-LD
const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(jsonLd);
document.head.appendChild(script);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
