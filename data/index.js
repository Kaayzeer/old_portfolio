import React from "react";

export const userData = {
  title: "Nikolas Rosinelli",
  landing: {
    title: "Hi, I'm Nikolas",
    paragraph: "Web Developer",
    subtitles: [
      "Cross-platform developer 📱💻",
      "Exploring the JS ecosystem ♾️",
      "Just getting started 📈",
    ],
  },
  sidebar: [
    {
      alt: "github_pic",
      icon: "github",
      link: "https://github.com/kaayzeer",
      color: "#2d2d2db9",
      hovered: "#2d2d2d",
    },
    {
      alt: "linkedin_pic",
      icon: "linkedin",
      link: "https://www.linkedin.com/in/nikolas-r-553198216/",
      color: "#70cbf276",
      hovered: "#70cbf2",
    },
    {
      alt: "discord_pic",
      icon: "discord",
      link: "mailto:nmrb60@discord.com",
      color: "#ad94e76f",
      hovered: "#ad94e7",
    },
    {
      alt: "email_pic",
      icon: "gmail",
      link: "mailto:nmrb60@gmail.com",
      color: "#f4573470",
      hovered: "#f45734",
    },
  ],
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
        language: "Next.js",
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
        language: "Tailwind.css",
        color: "#6fa3ed",
      },
      {
        language: "Stripe",
        color: "#6472f5",
      },
      {
        language: "React-Native",
        color: "#2d2d2d",
      },
    ],
  },
  projects: {
    title: "Portfolio",
    baseURI: "https://api.github.com/users/kaayzeer/repos",
    thisURI: "https://github.com/Kaayzeer/portfolio_2",
    repositories: ["Cities-App", "Next Venture", "Scuf"],
    images: [
      "/images/citiesFront.png",
      "/images/nextVentureFront.png",
      "/images/scufFront.png",
    ],
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
