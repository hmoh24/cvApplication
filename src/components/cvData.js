const personalDetails = {
  name: "Alex Turner",
  email: "alex.turner.dev@gmail.com",
  phone: "+44 7700 900123",
  location: "Manchester, UK",
};

const workExperience = {
  items: [
    {
      id: "job-1",
      role: "Frontend Developer",
      companyName: "BrightPixel Ltd",
      dateStarted: "2022-03",
      dateEnded: "Present",
      bulletPoints: [
        "Built and maintained React-based user interfaces used by ~50k monthly users.",
        "Collaborated with designers and backend engineers to deliver features end-to-end.",
        "Improved page load performance by ~30% through code-splitting and memoization.",
        "Wrote reusable components and maintained a shared component library.",
      ],
    },
    {
      id: "job-2",
      role: "Junior Web Developer",
      companyName: "NorthCode Solutions",
      dateStarted: "2020-07",
      dateEnded: "2022-02",
      bulletPoints: [
        "Developed responsive websites using HTML, CSS, and JavaScript.",
        "Fixed bugs and implemented small features across multiple client projects.",
        "Worked closely with senior developers to learn best practices and code reviews.",
        "Integrated REST APIs and handled basic state management.",
      ],
    },
  ],
};

const education = {
  items: [
    {
      id: "edu-1",
      qualification: "BSc Computer Science",
      institutionName: "University of Leeds",
      dateStarted: "2017-09",
      dateEnded: "2020-06",
      bulletPoints: [
        "Graduated with Second Class Honours (Upper Division).",
        "Key modules included Software Engineering, Databases, and Web Development.",
        "Final year project: Built a full-stack task management app using React and Node.js.",
      ],
    },
    {
      id: "edu-2",
      qualification: "A Levels",
      institutionName: "Greenwood Sixth Form College",
      dateStarted: "2015-09",
      dateEnded: "2017-06",
      bulletPoints: ["Computer Science (A), Mathematics (B), Physics (B)."],
    },
  ],
};

const data = { personalDetails, workExperience, education };
export default data;
