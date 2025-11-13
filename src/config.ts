export const siteConfig = {
  name: "Darío Peña",
  title: "Software Engineering Student & Developer",
  description: "Portfolio website of Darío Peña",
  accentColor: "#000000",
  social: {
    email: "studiopm2002@gmail.com",
    linkedin: "https://www.linkedin.com/in/dar%C3%ADo-cuauht%C3%A9moc-pe%C3%B1a-mariano-5231a029b/",
    instagram: "https://www.instagram.com/pm.dario/",
    github: "https://github.com/darioPM2002",
  },
  aboutMe:
    "Computer Engineering student with experience in developing educational mobile applications. Passionate about programming and cross-platform software design, with a strong focus on user experience and interface quality. Skilled in building efficient, scalable, and visually appealing applications. UI/UX principles, and agile development methodologies. Highly motivated to learn new technologies and contribute to innovative projects that make a real impact.",
  skills: ["Android","IOS","Flutter", "React", "Node.js", "Python", "Firestore", "C++", "Javascript", "HTML", "CSS", "Git", "Figma", "Agile", "Scrum", "UI/UX Design"],
  projects: [
    {
      name: "TrainEar",
      description:
      `TrainEar is a mobile application designed to enhance musical learning through ear training and music theory exercises. 
It helps musicians of all levels develop their auditory skills, improve pitch recognition, and optimize their study time 
through personalized practice and progress tracking. The app integrates AI-based systems to adapt difficulty levels, 
provide intelligent feedback, and create customized learning paths for each user.

Achievements:
            🏅 Honorable Mention at eMerge Americas Showcase, recognizing innovation in educational technology.        
🥈 Second Place for Best Project in the CDMX Region at Tecnológico de Monterrey’s Startup Now competition.         
🌟 Highlighted as an innovative solution for optimizing musical study through AI and data-driven personalization.`,
      link: "https://trainear-275d8.web.app",
      skills: ["Flutter", "Android", "IOS", "Firestore", "AI integration", "Autentication","+10,000 downloads" , "Real Work App",  "Figma"],
      pictures: ["../src/assets/train1.jpg","../src/assets/train2.png","../src/assets/train3.png"],
    },
    {
      name: "Loyalty application",
      description:
        "Web-based loyalty application developed with Flutter for a Mexican food services company. The app generates virtual loyalty cards, allows users to earn points on each visit, and integrates Firebase for authentication, remote database, QR code scanning, email delivery, and user management. Additional features include customer search, basic statistics, and the ability to add or convert points.",
      link: "https://www.canva.com/design/DAGKqwnU4Ws/XLZAsb2zv9I-twEiB-iQWA/view?utm_content=DAGKqwnU4Ws&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hda7e9c950a#8",
      skills: ["Flutter", "HTML", "CSS", "JavaScript", "Firestore", "Email Sending", "Real Work App", "Figma"],
      pictures: ["/loy3.png","/loy2.png","/loy1.png"],
    },
    {
      name: "PCC — Medical Emergency Reporting System",
      description:
        "A functional web prototype developed for the Cuajimalpa borough in Mexico City to support emergency protection services. The goal of this application is to enable faster and easier emergency reporting through a web interface, helping digitalize the process and generate actionable statistics. The application includes user authentication, database integration, backend connectivity, form creation, user management, and other essential features. It was built using React for the frontend and Node.js with MongoDB for the backend and data storage.",
      link: "https://www.canva.com/design/DAG4acoe5bk/ALXKtH82qt-vl1Wx7y7Glg/view?utm_content=DAG4acoe5bk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h7dda80a230",
      skills: ["React", "Node.js", "MongoDB", "TSX", "JS","HTML", "Team Work",  "Figma"],
       pictures: ["../src/assets/emer3.png","../src/assets/emer2.png","../src/assets/emer1.png"],
    },
    {
      name: "NINESHIONS — Web Videogame JS",
      description:
        "A video game developed entirely from scratch using JavaScript, including the creation of the game engine, physics, frame rendering, and controller interactions. This university project followed the Scrum methodology, involving a full requirements analysis and iterative development. The game connects to a MySQL database through a custom API built with Node.js.",
      link: "https://www.canva.com/design/DAG4iLBFjKQ/Wv5RBCoBhN7xQQqIkvsmkw/view?utm_content=DAG4iLBFjKQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h9b367c9fdc",
      skills: ["JS","HTML","CSS", "mySQL","Node.js", "SCRUM","Agile","Figma", "School Work"],
       pictures: ["../src/assets/nine1.jpeg","../src/assets/nine2.jpeg","../src/assets/nine3.jpeg"],
    },
  ],
  experience: [
   
    {
      company: "Independent Project – TrainEar App",
      title: "Founder & Full Stack Developer",
      dateRange: "2025",
      bullets: [
        "Developed and launched a full mobile application available on Google Play and App Store.",
    "Designed the complete product lifecycle — from prototype and UI/UX design to production release.",
    "Implemented secure user authentication and remote database synchronization with Firebase and Isar.",
    "Integrated AI-powered features to personalize user experience and performance feedback.",
    "Built custom algorithms for adaptive difficulty, scoring systems, and data-driven learning progression.",
    "Implemented monetization strategies including in-app subscriptions and ads.",
    "Managed deployment, analytics, and continuous updates independently."
      ],
    },
     {
      company: "Aguas Susi",
      title: "Web Developer",
      dateRange: "2023",
      bullets: [
        "Designed and developed a complete web application for generating virtual IDs to accumulate user points.",
        "Implemented both frontend and backend functionality from scratch, including database integration and user validation.",
        "Deployed and maintained the application on a live web server ensuring full functionality and accessibility.",
        "Delivered the project independently, covering all stages from planning to deployment."
      ],
    },
    {
       company: "1450 Ediciones",
  title: "Public Relations & Sales Representative",
  dateRange: "2020 – 2022",
  bullets: [
    "Promoted and sold art pieces and books to institutions, galleries, and individual clients.",
    "Served as a liaison between the publishing house and partner companies, artists, and collectors.",
    "Coordinated logistics and provided on-site support for cultural and promotional events.",
    "Contributed to brand visibility and client relations through strategic communication and outreach efforts."
  ],
    }
  ],
  education: [
    {
      school: "Instituto Tecnológico de Estudios Superiores de Monterrey (Tec de Monterrey)",
      degree: "B.S. in Computer Engineering and Technology",
      dateRange: "2023 - 2027",
      achievements: [
        "100% Scholarship (Líderes del Mañanana Program)",
        "Arranger and musician in the Campus Music Ensemble",
      ],
    },
   {
  school: "Universidad Nacional Autónoma de México (UNAM) – Facultad de Música",
  degree: "Bachelor’s Degree in Musical Composition (paused)",
  dateRange: "2020 – 2023",
  achievements: [
    "Completed three years of coursework focused on composition for live performance and mixed media.",
    "Developed strong foundations in harmony, orchestration, and contemporary composition techniques.",
    "Maintained a GPA of 9.3 out of 10 before pausing studies to focus on professional projects.",
  ],
},
  ],
};
