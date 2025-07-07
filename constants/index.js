const cc_logo = require("./images/country-cart.png");
const ta_logo = require("./images/thirukkural-api.png");
const rf_logo = require("./images/recipe-finder.png");
const vpm_logo = require("./images/vehicle-predictive-maintenance.png");

export const skills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Next.js", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Python", level: 75 },
  { name: "HTML/CSS", level: 95 },
  { name: "TailwindCSS", level: 90 },
  { name: "MongoDB", level: 70 },
  { name: "Git", level: 85 },
];

export const project = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js and Tailwind CSS featuring smooth animations and dark mode support.",
    logo: cc_logo, // Using existing image instead of missing portfolio-preview.jpg
    stack: ["Next.js", "React", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/pradeep-145/My-portfolio",
    try: true,
    link1: "https://your-portfolio-url.com",
  },
  {
    id: "1",
    logo: cc_logo,
    title: "Country Cart",
    description:
      "Country Cart is an innovative e-commerce platform that bridges the gap between farmers and customers, allowing them to interact and trade directly without any middlemen. This platform empowers farmers by giving them a fair price for their produce and provides customers with fresh, high-quality products straight from the farm. With a user-friendly interface, Country Cart aims to revolutionize the agricultural market by promoting transparency and sustainability.",
    link1: "https://country-cart.netlify.app",
    try: true,
    github: "https://github.com/pradeep-145/Country-cart",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
  {
    id: "2",
    logo: ta_logo,
    title: "Thirukkural",
    description:
      "Thirukkural is a web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) that provides users with a comprehensive list of Thirukkurals. The application features a clean and intuitive interface, allowing users to easily browse through the Thirukkurals, search for specific ones, and learn about their meanings and interpretations. With a focus on performance and user experience, Thirukkural aims to make the timeless wisdom of Thiruvalluvar accessible to everyone in a modern and engaging way.",
    link1: "https://thirukuralapi.netlify.app",
    try: true,
    github: "https://github.com/pradeep-145/THIRUKKURAL-API",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
  {
    id: "3",
    logo: rf_logo,
    title: "Recipe Finder App",
    description:
      "Recipe Finder is a simple and efficient web application that allows users to search for various recipes by fetching data from an external API. Users can also save their favorite recipes in a wishlist using MongoDB. The app includes a rating feature where users can rate and review recipes. Built using React for a dynamic frontend and Express.js for the backend, the application ensures a seamless user experience with fast and accurate recipe search results.",
    link1: "https://recipe-finder-app-demo.netlify.app",
    try: true,
    github: "https://github.com/pradeep-145/Recipe-Finder",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
  {
    id: "4",
    logo: vpm_logo,
    title: "Vehicle Predictive Maintenance",
    description:
      "This IoT-based mobile application monitors vehicle performance metrics such as fuel level, speed, GPS location, and predictive maintenance alerts. Using MQTT for real-time data transmission from an Arduino-based system, the app stores and visualizes data efficiently with cloud-based SQLite. Users can analyze vehicle performance trends, helping them reduce breakdown risks and optimize fuel consumption.",
    link1: "https://github.com/pradeep-145/Vehicle-Predictive-Maintenance",
    try: false,
    github: "https://github.com/pradeep-145/Vehicle-Predictive-Maintenance",
    stack: ["React Native", "Node.js", "MQTT", "SQLite"],
  },
];

export const Achievements = [
  {
    id: "1",
    title: "Hackfest",
    Date: "16/12/2023",
    description:
      'Participated in "Hackfest", a web scraping hackathon, where our team developed a application that can scrape data from multiple websites and display it in a user-friendly format.',
  },
  {
    id: "2",
    title: "Hackbuzz",
    Date: "16/04/2024,17/04/2024",
    description:
      '2nd prize in "Hackbuzz", a full stack development hackathon, where our team developed a web application for a startup company.',
  },
  {
    id: "3",
    title: "Markus",
    Date: "19/03/2024",
    description:
      '1st prize in paper presentation on the topic "BCI for E-learning Platforms". Our paper primarily focuses on the implementation of Brain Computer Interface in E-learning platforms.',
  },
  {
    id: "4",
    title: "Acme",
    Date: "19/03/2024",
    description:
      '3rd prize in paper presentation on the topic "BCI for E-learning Platforms". Our paper primarily focuses on the implementation of Brain Computer Interface in E-learning platforms.',
  },
];
