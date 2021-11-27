import library from './FontAwsomeLibery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faFire } from '@fortawesome/free-solid-svg-icons';
import pustok from './Assest/imges/pustokP.png'
import emaJohn from './Assest/imges/emajhonP.png'
import didi from './Assest/imges/didi.png'
import espn from './Assest/imges/espn.png'
import crickTime from './Assest/imges/bdCricTIme.png'
import pustokPl from './Assest/imges/pustokPl.png'

library()


//  gretting option
const greeting = {
  username: "Mahamud Hasan",
  title: "Hello, I'm",
  subTitle:
    "A passionate Frontend Software Developer 🚀 / Reactjs / Nodejs and some other cool libraries and frameworks.",
  resumeLink:
    "https://drive.google.com/uc?export=download&id=1Zrq8fOcgnhl0PEj8MKwcb59b7_NVY5JW",
  displayGreeting: true
};
// social media section
const socialMediaLinks = {
  github: "https://github.com/MahamudM90",
  linkedin: "https://www.linkedin.com/in/mahamudm90/",
  // gitlab: "https://gitlab.com/",
  facebook: "https://www.facebook.com/mdmahamud.mdmahamud.980",
  instagram: 'https://www.instagram.com/mahamudm90/?fbclid=IwAR2_djYqAgd21xgPilP7QApVdU2nI6pM14hPO5p7vuuQDNR0UKIgLj9vVD0',
  twitter: 'https://twitter.com/MahamudM90?fbclid=IwAR1vyUiRrc4FkIimzY__YjVGys8mAGGtbq8ImO2sc8QKPVMwxGltMlQBc5Y'
};


// Skill Sections
const skills = {
  title: "What i do",
  desc: "I'M A JUNIOR DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skillTitle: [
    "⚡ Develop highly interactive Front end  web applications",
    "⚡Integration of third party services such as Firebase",
  ],
  softwareSkills: [
    {
      skillName: "html-5",
      icon: <FontAwesomeIcon icon={['fab', 'html5']} />
    },
    {
      skillName: "css3",
      icon: <FontAwesomeIcon icon={['fab', 'css3']} />
    },
    {
      skillName: "sass",
      icon: <FontAwesomeIcon icon={['fab', 'sass']} />
    },
    {
      skillName: "Javascript",
      icon: <FontAwesomeIcon icon={['fab', 'js']} />
    },
    {
      skillName: "reactjs",
      icon: <FontAwesomeIcon icon={['fab', 'react']} />
    },
    {
      skillName: "nodejs",
      icon: <FontAwesomeIcon icon={['fab', 'node']} />
    },
    {
      skillName: "swift",
      icon: <FontAwesomeIcon icon={['fab', 'swift']} />
    },
    {
      skillName: "npm",
      icon: <FontAwesomeIcon icon={['fab', 'npm']} />
    },
    {
      skillName: "database",
      icon: <FontAwesomeIcon icon={faDatabase} />
    },
    {
      skillName: "firebase",
      icon: <FontAwesomeIcon icon={faFire} />
    }
  ]
};
// tech stack 
const techStack = [
  {
    type: "Frontend / Design",
    level: "80"
  },
  {
    type: "Backend",
    level: "40"
  },
  {
    type: "Programming",
    level: "80"
  }
];


const experience = [
  {
    role: "Software Engineer",
    company: "Theme Clock",
    companylogo:pustok,
    img: pustok,
    date: "20 Nov 2021 – 21 Nov 2021",
    live: "https://mahamudm90.github.io/ThemeClock/",
    github: "https://github.com/MahamudM90/ThemeClock",
    desc:
      "I have maintained the backend and api",
  },
  {
    role: "Software Engineer",
    company: "Snake Game",
    companylogo: emaJohn,
    img: emaJohn,
    date: "21 Nov 2021 – 22 Nov 2021",
    live: "https://mahamudm90.github.io/SnakeGame/",
    github: "https://github.com/MahamudM90/SnakeGame",
    desc:
      "I have maintained the backend and api",
  },
  {
    role: "Software Engineer",
    company: "Food Service",
    companylogo: didi,
    img: didi,
    date: "21 Nov 2021 – 23 Nov 2021",
    live: "https://mahamudm90.github.io/Foodservice/",
    github: "https://github.com/MahamudM90/Foodservice",
    desc:
      "I have maintained the backend and api",
  },
  {
    role: "Software Engineer",
    company: "Car Store",
    companylogo: espn,
    img: espn,
    date: "25 Feb 2021 – 28 Feb 2021",
    live: "https://mahamudm90.github.io/Car-Store/",
    github: "https://github.com/MahamudM90/Car-Store",
    desc:
      "I have maintained the backend and api",
  },
  {
    role: "Software Engineer",
    company: "Water Measure",
    companylogo: "",
    img: pustokPl,
    date: "24 Nov 2021 – 26 Nov 2021",
    live: "https://mahamudm90.github.io/DrinkWater/",
    github: "https://github.com/MahamudM90/DrinkWater",
    desc:
      "I have maintained the backend and api",
  },
  {
    role: "Software Engineer",
    company: "Github Demu",
    companylogo: crickTime,
    img: crickTime,
    date: "20 Feb 2021 – 25 Feb 2021",
    live: "https://mahamudm90.github.io/GithubProfile/",
    github: "https://github.com/MahamudM90/GithubProfile",
    desc:
      "I have maintained the backend and api",
  },
];
const blogs = {
  title: "Blogs",
  subTitle: "with love for developing cool stuff , I love to write and tech others what i have learnt",
  blogs: [
    {
      url: 'https://www.w3schools.com/js/js_if_else.asp',
      title: 'Java Script Site',
      desc: 'For those of us who are completely new to programming, the first thing we need to know that what is variables? You can imagine that variable is a kind of box that you can declare any right place for your needs and can save any kind of value(array, string, number, bullian, object, function) inside this variable. for example, you are saying that “Mc Jhon is a good boy.'
    },
    {
      url: 'https://www.w3schools.com/js/js_versions.asp',
      title: 'Java Script Site',
      desc: 'For those of us who are completely new to programming, the first thing we need to know that what is variables? You can imagine that variable is a kind of box that you can declare any right place for your needs and can save any kind of value(array, string, number, bullian, object, function) inside this variable. for example, you are saying that “Mc Jhon is a good boy.'
    }
  ]
};
//  Contact form
const contactData = {
  title: "Contact Me",
  desc: 'DISCUSS OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.',
  phone: "01846723939 (whatsapp)",
  email: "mahamud01795@gmail.com",
}

// footer data
const footerData = {
  desc: "This Template by Md Mahamud Hasan",
  url: "https://github.com/MahamudM90"
}
// vc links
const remuseLInk = {
  link : ""
}
//  animated bg images 
const imagesList = [
  'url("https://i.ibb.co/5LbrxSL/desktop-1245714.jpg")',
  'url("https://i.ibb.co/9sGHj75/code.png")',
  'url("https://i.ibb.co/qyp9fpm/third.jpg")',
];


// export all 
export {
  socialMediaLinks,
  greeting,
  skills,
  techStack,
  experience,
  blogs,
  contactData,
  footerData,
  remuseLInk,
  imagesList
}