import {
  javascript,
  reactjs,
  nodejs,
  mongodb,
  git,
  startup,
  chess,
  touchvoid,
  proquest,
  focus,
  doomsday,
  python,
  cplusplus,
  sqlicon,
  pharmasphere,
  brainstation,
} from "../../public/assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "WebDriverIO",
    icon: javascript,
  },
  {
    name: "Selenium",
    icon: javascript,
  },
  {
    name: "Appium",
    icon: javascript,
  },
  {
    name: "Playwright",
    icon: javascript,
  },
  {
    name: "SQL",
    icon: sqlicon,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "SQA Engineer",
    company_name: "BrainStation 23 (Telenor App X - GrameenPhone LTD)",
    icon: brainstation,
    iconBg: "#233E56",
    date: "September 2024 - Present",
    points: [
      "Authored and maintained over 3000+ test cases for mobile and API functionalities.",
      "Automated test cases using WebDriverIO, Allure Report, and Gelkins, while refactoring legacy automation code to enhance maintainability and efficiency.",
      "Contributed to the enhancement and maintenance of the existing mobile app test automation framework.",
      "Performed comprehensive API testing to ensure functionality, reliability, and performance.",
      "Designed and implemented a robust testing ecosystem aligned with project goals to ensure the delivery of high-quality software.",
      "Collaborated closely with cross-functional teams to address technical challenges and align deliverables with client requirements.",
      "Conducted regular sync-up meetings with internal teams and reporting stakeholders to provide project progress updates.",
    ],
  },
  {
    title: "SQA Engineer",
    company_name: "NITEX Limited",
    icon: startup,
    iconBg: "#383E56",
    date: "October 2022 - July 2024",
    points: [
      "Overhauled and restructured test cases, transitioning from manual to automated testing methodologies.",
      "Implemented automation for the dynamic web workspace using Java Selenium, ensuring smooth system operation with minimal bugs.",
      "Enhanced transparency at the Head of Department level, providing a comprehensive overview across the organization.",
      "Conducted Database and API Testing using the Gson getter-setter approach.",
      "Managed vendors, monitored service delivery, conducted User Acceptance Testing (UAT), and led Scrum meetings with team leaders.",
    ],
  },
  {
    title: "Associate SQA Engineer",
    company_name: "Tech Eureka",
    icon: startup,
    iconBg: "#383E56",
    date: "February 2022 - September 2022",
    points: [
      "Executed smoke and regression tests as required.",
      "Generated detailed reports based on bug tickets to facilitate effective communication.",
      "Scripted automation using Selenium for web application and Appium for Mobile application, ensuring efficient execution of test cases.",
      "Implemented Appium automation scripts to automate the execution of test cases for mobile applications.",
    ],
  },
  {
    title: "Junior SQA Engineer",
    company_name: "Tech Eureka",
    icon: startup,
    iconBg: "#383E56",
    date: "June 2021 - January 2022",
    points: [
      "Writing test cases on a Fintech project.",
      "Reports based on bug tickets in Jira to communicate with developers.",
      "Automation using Selenium for web application testing.",
      "Manual testing on Apps and Web pages, i.e., CRM for a fintech group.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Attendance Automation for University Students",
    description:
      "Automated the entire attendance system using Java Selenium for MIST University, streamlining the attendance recording process and improving efficiency.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "selenium",
        color: "green-text-gradient",
      },
      {
        name: "automation",
        color: "pink-text-gradient",
      },
    ],
    image: pharmasphere,
    source_code_link: "https://github.com/ShahareharAnik/Attendence_check_With_Selenium_Automation",
  },
  {
    name: "E-commerce Platform Backend",
    description:
      "Developed all APIs for user, product, cart, and order endpoints using Java and Spring Boot, creating a robust backend for e-commerce applications.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "spring-boot",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: chess,
    source_code_link: "https://github.com/ShahareharAnik/E_Commerce_BackendApi",
  },
  {
    name: "Web Automation with WebDriverIO",
    description:
      "Automated web testing using WebDriverIO and integrated test reporting via Allure, providing comprehensive test coverage and visual reporting.",
    tags: [
      {
        name: "webdriverio",
        color: "blue-text-gradient",
      },
      {
        name: "automation",
        color: "green-text-gradient",
      },
      {
        name: "allure-report",
        color: "pink-text-gradient",
      },
    ],
    image: touchvoid,
    source_code_link: "https://github.com/ShahareharAnik/WebdriverIO_Web_Automation",
  },
  {
    name: "Playwright Web Automation",
    description:
      "Developed reusable tools for automation in Playwright, including Allure Report generation and email notifications for efficient test reporting.",
    tags: [
      {
        name: "playwright",
        color: "blue-text-gradient",
      },
      {
        name: "automation",
        color: "green-text-gradient",
      },
      {
        name: "testing",
        color: "pink-text-gradient",
      },
    ],
    image: proquest,
    source_code_link: "https://github.com/ShahareharAnik/Playwright_automation_Kitchen-Sink",
  },
  {
    name: "Desktop Application Automation",
    description:
      "Automated desktop testing for Signal App using WinAppDriver and Appium, showcasing the ability to test native desktop applications.",
    tags: [
      {
        name: "winappdriver",
        color: "blue-text-gradient",
      },
      {
        name: "appium",
        color: "green-text-gradient",
      },
      {
        name: "desktop-testing",
        color: "pink-text-gradient",
      },
    ],
    image: focus,
    source_code_link: "https://github.com/ShahareharAnik/WinAppDriver_Automation",
  },
];

export { technologies, experiences, testimonials, projects };
