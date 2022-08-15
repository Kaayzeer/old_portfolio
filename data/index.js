import React from "react";

export const userData = {
  title: "Nikolas Rosinelli",
  subTitle: "Web Developer",
  landing: {
    title: "Hi, I'm Nikolas",
    subtitles: [
      "Frontend developer 🌐",
      "Cross-platform developer 📱💻",
      "Exploring the whole JS ecosystem ☁️",
      "Beginner in backend ♾️",
      "Just getting started 📈",
    ],
    professionalDetails: [
      {
        alt: "linkedin_pic",
        icon: "linkedin",
        link: "https://www.linkedin.com/in/nikolas-r-553198216/",
      },
      {
        alt: "github_pic",
        icon: "github",
        link: "https://github.com/kaayzeer",
      },
      {
        alt: "email_pic",
        icon: "gmail",
        link: "mailto:nmrb60@gmail.com",
      },
    ],
  },
  skills: {
    title: "languages & toolkit",
    languages: [
      {
        language: "Javascript",
        color: "#f3e056",
      },
      {
        language: "Typescript",
        color: "#ad94e7",
      },
      {
        language: "React",
        color: "#70cbf2",
      },
      {
        language: "Firebase",
        color: "#f3e056",
      },
      {
        language: "Html5",
        color: "#f45734",
      },
      {
        language: "Nextdotjs",
        color: "#2d2d2d",
      },
      {
        language: "Materialui",
        color: "#6472f5",
      },
      {
        language: "Postman",
        color: "#f47a34",
      },
      {
        language: "Figma",
        color: "#2d2d2d",
      },
      {
        language: "Css3",
        color: "#70cbf2",
      },
      {
        language: "Vercel",
        color: "#2d2d2d",
      },
      {
        language: "Expo",
        color: "#2d2d2d",
      },
      {
        language: "Tailwindcss",
        color: "#6fa3ed",
      },
      {
        language: "Stripe",
        color: "#6472f5",
      },
    ],
  },
  projects: {
    title: "Projects",
    baseURI: "https://api.github.com/users/kaayzeer/repos",
    repositories: ["Cities-App", "Next Venture", "Scuf"],
    languages: [
      {
        NextVenture: [
          "Typescript",
          "Next.js",
          "Firebase",
          "Tailwind.css",
          "Postman",
          "Node.js",
          "Stripe.js",
        ],
        SCUF: ["Typescript", "React", "Firebase", "Css-modules"],
        CitiesApp: ["Typescript", "React-Native"],
      },
    ],
  },
  experience: {
    "Work Experience": [
      {
        organization: "WeknowIT",
        role: "Frontend Developer",
        type: "Consultant",
        startDate: "2022-02-01",
        endDate: "",
        city: "Stockholm",
        country: "Sweden",
        url: "https://www.linkedin.com/company/we-know-it/mycompany/",
        thumbnail: "/weknowit.svg",
      },
    ],
    "Open Source Experience": [
      {
        organization: "Frontend Mentor",
        role: "Open source distributor",
        type: "Member",
        startDate: "2022-02-01",
        endDate: "",
        url: "https://www.frontendmentor.io/",
        thumbnail: "/fem.svg",
      },
    ],
  },
  about: {
    description:
      "I am a frontend cross-platform app developer, just finished my education in KYH vocational school. I strive to make meaningful applications with the best UI practices.",
    picture: "/profile.jpg",
  },
};
