/**
 * Utility function to update SEO meta tags dynamically
 * 
 * @param {Object} options - SEO options
 * @param {string} options.title - Page title
 * @param {string} options.description - Page description
 * @param {string} options.keywords - Comma separated keywords
 * @param {string} options.imageUrl - URL of the image to use in social shares
 * @param {string} options.url - Current page URL
 */
export const updateSEO = ({
  title = "Shaharehar Rahaman Anik - Software Engineer Portfolio",
  description = "Professional portfolio showcasing software development, web development, and design projects by Shaharehar Rahaman Anik.",
  keywords = "Shaharehar Rahaman Anik, Portfolio, MERN Stack Developer, Software Engineer, Figma Designer, React, Node.js, Web Development",
  imageUrl = "/src/assets/logo-white.png",
  url = "https://shahareharrahamananik.netlify.app/"
}) => {
  // Update page title
  document.title = title;
  
  // Update meta tags
  const metaTags = {
    'description': description,
    'keywords': keywords,
    'og:title': title,
    'og:description': description,
    'og:image': imageUrl,
    'og:url': url,
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': imageUrl,
    'twitter:url': url
  };
  
  // Update existing meta tags or create new ones if they don't exist
  for (const [key, value] of Object.entries(metaTags)) {
    let metaTag;
    if (key === 'description' || key === 'keywords') {
      metaTag = document.querySelector(`meta[name="${key}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', key);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', value);
    } else {
      metaTag = document.querySelector(`meta[property="${key}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', key);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', value);
    }
  }
  
  // Update canonical link
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', url);
}; 