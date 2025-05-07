import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileDownload } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    // dark purple background with white text with some blur effect
    <div className=" text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-xl mb-4">Connect with Me</h2>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/ShahareharAnik"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/shaharehar-rahaman-anik-53baa9182/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="mailto:shahareharanik@gmail.com"
            className="hover:text-blue-400"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
          <a
            href="https://shahareharrahamananik.netlify.app/ShahareharRahamanAnik4yrQA_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 flex items-center"
          >
            <FontAwesomeIcon icon={faFileDownload} size="2x" />
            <span className="ml-2 text-lg">My Resume</span>
          </a>
        </div>
        <p className="mt-6 text-sm">
          &copy; 2025 Shaharehar Rahaman Anik. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
