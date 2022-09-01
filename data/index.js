import React from "react";

export const userData = {
  title: "Nikolas Rosinelli",
  landing: {
    title: "Hi, I'm Nikolas",
    paragraph: "Web Developer",
    subtitles: [
      "Frontend developer 💻",
      "Exploring the JS ecosystem ♾️",
      "Cross-platform developer 📱💻",
    ],
  },
  sidebar: [
    {
      alt: "github_pic",
      icon: "github",
      link: "https://github.com/kaayzeer",
      color: "",

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
      link: "https://discordapp.com/users/699968153404309614/",
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
    nvUrl: /* "https://nextventure.com", */ "https://new-nv-vercel.vercel.app/",
    nvDesc:
      "A fullstack web application built for a client at work. I have been in charge of the most parts of the Front end development.",
    repositories: ["Cities-App", "W.I.T.W", "Scuf", "Next Venture"],
    images: [
      "/images/citiesFront.png",
      "/images/witwFront.png",
      "/images/scufFront.png",
      "/images/nextVentureFront.png",
    ],
    languages: {
      citiesapp: ["typescript", "react-native", "figma", "API", "expo-go"],
      witw: [
        "javascript",
        "react",
        "open-source",
        "API",
        "html",
        "styled-components",
      ],
      scuf: ["javascript", "react", "firebase", "html", "css"],
      nextventure: [
        "next.js",
        "firebase",
        "node.js",
        "html",
        "postman",
        "typescript",
        "tailwind.css",
        "stripe.js",
      ],
    },
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
    title:
      "I am a frontend cross-platform app developer, just finished my education in KYH vocational school. I strive to make meaningful applications with the best UI practices.",
    description:
      "I thrive best in environments where I can be challenged and love testing new techniques! and I take every chance I get to influence and contribute with my own ideas.",
    description2:
      "I am happy to take my own initiative to improve and possibly come up with innovative solutions. I also find collaboration easy and am solution-oriented.",
    picture: "/images/profilepic.webp",
  },
};
