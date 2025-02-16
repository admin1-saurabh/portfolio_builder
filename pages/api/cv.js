// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    name: "Saurabh Tiwari",
    jobTitle: "Software Engineer | AI & ML Enthusiast",
    location: "India",
    email: "saurabh.tiwari@example.com",
    linkedin: "linkedin.com/in/saurabhtiwari",
    twitter: "saurabh_codes",
    github: "saurabh-ti",
    website: "saurabh.dev",
    aboutMe:
      "Final-year CSE undergraduate at IIIT Kalyani with a passion for building scalable web applications and AI-driven solutions. Experienced in backend development, cloud technologies, and machine learning. Always eager to solve real-world problems through technology.",

    toolsAndTechSkills: [
      "Python",
      "Ruby on Rails",
      "ReactJS",
      "Tailwind CSS",
      "AWS",
      "TensorFlow",
      "Docker",
      "PostgreSQL",
    ],
    industryKnowledge: [
      "Full-Stack Development",
      "Machine Learning",
      "Cloud Computing",
      "Data Engineering",
      "Microservices Architecture",
    ],
    languages: ["Hindi (Native)", "English (Fluent)"],

    projects: [
      {
        title: "Food Delivery System",
        link: "https://github.com/saurabh-ti/food-delivery",
        summary:
          "A full-stack food ordering platform connecting home cooks with customers. Features include cart functionality, checkout, and order tracking.",
      },
      {
        title: "AI-Powered Complaint Resolution",
        link: "https://github.com/saurabh-ti/rail-madad-ai",
        summary:
          "An AI-based system to categorize and prioritize complaints using NLP. Integrated with image, audio, and video processing for better issue resolution.",
      },
      {
        title: "Multi-Device YouTube Sync",
        link: "https://github.com/saurabh-ti/youtube-sync",
        summary:
          "A system enabling simultaneous YouTube playback on multiple devices in real-time using WebSockets.",
      },
    ],

    experience: [
      {
        title: "Software Engineer Intern",
        company: "Superbolter, Bangalore",
        startDate: "May 2023",
        endDate: "August 2023",
        current: false,
        summary: `Developed internal tools for subscription monitoring, optimized data flow, and enhanced UI/UX with Tailwind CSS. Worked on large-scale notification systems using AWS SNS, Elasticsearch, and Firebase.`,
      },
      {
        title: "Research Intern",
        company: "SERB Research Group",
        startDate: "July 2022",
        endDate: "December 2022",
        current: false,
        summary: `Worked on AI models for scientific literature translation and QA systems. Contributed to large dataset annotation and LLM optimization techniques.`,
      },
    ],

    education: [
      {
        title: "B.Tech in Computer Science and Engineering",
        school: "IIIT Kalyani",
        startDate: "2021",
        endDate: "2025",
      },
    ],

    displayEducation: true,
    displayProjects: true,
    displayGithub: true,
    displayTwitter: true,
    activeColor: "#124499",
  });
}
