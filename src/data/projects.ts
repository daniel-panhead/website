import profound from "../assets/profound.png";
import sherlockify from "../assets/sherlockify.png";
import biomod from "../assets/biomod.png";
import drSprouts from "../assets/dr-sprouts.png";

export const projects = [
  {
    title: "ProFound",
    tagline: "The world's first AI cofounder!",
    link: "https://github.com/daniel-panhead/profound",
    img: profound,
    description: `
    Are you a non-technical founder who wants a comprehensive no-code solution?
    Or maybe you're a serial founder who wants to make new ideas fast? Introducing ProFound - 
    the AI-powered no-code prototyper which can turn ideas into mockups in minutes, not days.
    Using Svelte, Tailwind, and WebSockets, I implemented the frontend interface to let users
    chat with ProFound and see the previews of their mockups.
    `
  },
  {
    title: "Sherlockify",
    tagline: "Search your friends online!",
    link: "https://github.com/sherlockify/sherlockify-frontend",
    img: sherlockify,
    description: `
    Built off of the open-source Sherlock Project app, we created a web interface
    to let you search your friends online over thousands of social media sites!
    I developed a backend server to interface with Sherlock using Python and FastAPI,
    and deployed to Google Cloud using Cloud Run + an automated Cloud Build pipeline.
    `
  },
  {
    title: "UBC BIOMOD 2023",
    tagline: "Website for UBC BIOMOD's 2023 project submission",
    link: "https://github.com/ubc-biomod/biomod2023",
    img: biomod,
    description: `
    As part of a team of four, I helped developed a website for the UBC BIOMOD club's 2023
    submission to the BIOMOD molecular design competition, where our team placed fifth internationally!
    We had a lot of fun fully designing the website from scratch and developing with Vue.js and Tailwind.
    `
  },
  {
    title: "Dr. Sprouts",
    tagline: "The AI doctor for your plants!",
    link: "https://github.com/daniel-panhead/dr-sprouts",
    img: drSprouts,
    description: `
    We developed this app to help aspiring green thumbs diagnose their plants at home.
    Using AWS Bedrock + the Anthropic Claude LLM along with Amazon Knowledge Base,
    Dr. Sprouts can give you relevant results and advice backed by real scientific papers.
    I developed a chat interface for the program using React and Typescript to let you chat
    with Dr. Sprouts in real time!
    `
  }
];