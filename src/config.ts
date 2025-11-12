export const siteConfig = {
  name: "Darío Peña",
  title: "Software Engineering Student & Developer",
  description: "Portfolio website of Darío Peña",
  accentColor: "#000000",
  social: {
    email: "studiopm2002@gmail.com",
    linkedin: "https://www.linkedin.com/in/dar%C3%ADo-cuauht%C3%A9moc-pe%C3%B1a-mariano-5231a029b/",
    instagram: "https://www.instagram.com/pm.dario/",
    github: "https://github.com/RyanFitzgerald",
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
      pictures: ["../src/assets/loy3.png","../src/assets/loy2.png","../src/assets/loy1.png"],
    },
    {
      name: "PCC — Medical Emergency Reporting System",
      description:
        "A functional web prototype developed for the Cuajimalpa borough in Mexico City to support emergency protection services. The goal of this application is to enable faster and easier emergency reporting through a web interface, helping digitalize the process and generate actionable statistics. The application includes user authentication, database integration, backend connectivity, form creation, user management, and other essential features. It was built using React for the frontend and Node.js with MongoDB for the backend and data storage.",
      link: "https://www.canva.com/design/DAG4acoe5bk/ALXKtH82qt-vl1Wx7y7Glg/view?utm_content=DAG4acoe5bk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h7dda80a230",
      skills: ["React", "Node.js", "MongoDB", "TSX", "JS","HTML", "Team Work",  "Figma"],
       pictures: ["../src/assets/emer3.png","../src/assets/emer2.png","../src/assets/emer1.png"],
    },
  ],
  experience: [
    {
      company: "Aguas Susi",
      title: "Developer]",
      dateRange: "Jan 2022 - Present",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      company: "Startup Inc",
      title: "Full Stack Developer",
      dateRange: "Jun 2020 - Dec 2021",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      company: "Digital Agency",
      title: "Frontend Developer",
      dateRange: "Aug 2018 - May 2020",
      bullets: [
        "Developed responsive web applications for 20+ clients",
        "Improved site performance scores by 35% on average",
        "Introduced modern JavaScript frameworks to legacy codebases",
      ],
    },
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
      school: "Online Platform",
      degree: "Full Stack Development Certificate",
      dateRange: "2019",
      achievements: [
        "Completed 500+ hours of coursework",
        "Built 10+ portfolio projects",
        "Specialized in React and Node.js",
      ],
    },
  ],
};
