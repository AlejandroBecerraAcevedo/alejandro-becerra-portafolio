import path from "path";
import { title } from "process";

const info = [

    {
        title: 'Age',
        value: '31'
    },
    {
        title: 'Location',
        value: 'Medellín, Colombia'
    },
    {
        title: 'Email',
        value: 'allejo007@gmail.com'
    },
    {
        title: 'FreeLancer',
        value: 'Available'
    }
];


const languageSkills = [
    {
        title: 'Spanish',
        percent: 100
    },
    {
        title: 'English',
        percent: 65
    }
];

const programmingSkills = [

    {
        title: 'React',
        percent: 90
    },
    {
        title: 'Node',
        percent: 80
    },
    {
        title: 'Next.js',
        percent: 70
    },

    {
        title: 'FAST API',
        percent: 67
    },

    {
        title: 'Spring Boot',
        percent: 80
    },
    {
        title: 'Blockchain ICP',
        percent: 80
    },
    {
        title: 'Java',
        percent: 90
    },
    {
        title: 'TypeScript',
        percent: 60
    },
    {
        title: 'Python',
        percent: 90
    },
    {
        title: 'Motoko',
        percent: 80
    }
];

const extraSkills = [
    {
        title: 'Communication',
        description: "I'm a good communicator, I can explain complex ideas in a simple way."
    },
    {
        title: 'Relationships',
        description: "I'm a good team player, I can work with people from different backgrounds."
    },
    {
        title: 'Environment work',
        description: "I can work in a fast-paced environment."
    },
];

const knowledge = [
    {
        title: "Web Development",
        path: "/icons_png/developer web.png",
        words: "Blog, E-commerce, decentralized",

    },
    {
        title: "Analysis",
        path: "/icons_png/analysis.png",
        words: "Data, Business, System",
    },

    {
        title: "Web Design",
        path: "/icons_png/sketch.png",
        words: "UI, UX, Responsive",
    },
    {
        title: "Focused on goals",
        path: "/icons_png/goal.png",
        words: "Results, Objectives, Goals",
    },
    {
        title: "Innovation",
        path: "/icons_png/innovation.png",
        words: "Creativity, New ideas, Technology",
    },
    {
        title: "IOT Design",
        path: "/icons_png/electronic.png",
        words: "Arduino, Raspberry, EMQX",
    },
]

const education = [
    {
        title: "Electronics Technology (ITM, 2012 - 2015)",
        institution: "ITM",
        date: "2012 - 2015",
        description: "During my time studying Electronics Technology at ITM from 2012 to 2015, I developed a solid foundation in the principles of electronics. I gained practical knowledge in the design, maintenance, and troubleshooting of electronic systems, learning how to work with various electronic devices and components, which gave me a strong technical base to build upon in my further studies.",
        type: "University career"
    },
    {
        title: "Electronics Engineering (ITM, 2017 - 2019)",
        institution: "ITM",
        date: "2017 - 2019",
        description: "I completed my Bachelor's degree in Electronics Engineering at ITM from 2017 to 2019. During this time, I deepened my understanding of electronics and gained hands-on experience in designing and implementing electronic systems. I also developed my analytical and problem-solving skills, which have been invaluable in my career as an engineer.",
        type: "University career"
    },
    {
        title: "Systems Engineering (University of Antioquia, 2022 - Present)",
        institution: "University of Antioquia",
        date: "2022 - currently",
        description: "I am currently pursuing a degree in Systems Engineering at the University of Antioquia. This program has allowed me to expand my knowledge of computer systems and software development, as well as gain experience in working with large-scale systems and databases. I am excited to continue learning and growing in this field.",
        type: "University career",
    },
    {
        title: "Blockchain (Dfinity HubMexico, 2024)",
        institution: "Dfinity HubMexico",
        date: "2024-1 - 2024-2",
        description: "In 2024, I took a course in Blockchain at Dfinity HubMexico, where I explored the fundamentals of decentralized systems and distributed ledger technology. This experience gave me insight into how blockchain technology is transforming industries by enhancing security, transparency, and efficiency in digital transactions. It also sparked my interest in the potential of blockchain for future innovations.",
        type: "Bootcamp",
    },
];

const dataPortfolio = [
    {
        id: 1,
        title: "IA Kaggle",
        image: "/image/Kaggle.png",
        description:"This project uses artificial intelligence techniques to predict results on academic tests, leveraging data from the Kaggle platform.",
        fullDescription: "This project uses artificial intelligence techniques to predict results on academic tests, leveraging data from the Kaggle platform. The application analyzes student performance data to identify patterns and trends that can help predict outcomes on future exams. By applying machine learning algorithms and data analysis tools, the project demonstrates my proficiency in AI and my ability to extract valuable insights from complex datasets.",
        urlGithub: "https://github.com/AlejandroBecerraAcevedo/modelPredictPrebaSaber",
        urlDemo: "https://www.youtube.com/watch?v=FQt3c-Vk2d8",
    },
    {
        id: 2,
        title: "ICP con Motoko",
        image: "/image/Motoko.jpg",
        description:"This project implements a decentralized application using Motoko, the programming language for the Internet Computer (ICP) platform.",
        fullDescription: "This project implements a decentralized application using Motoko, the programming language for the Internet Computer (ICP) platform. The application allows users to create and manage faculty and vocational programs, leveraging smart contracts to ensure transparency and security in the management of academic data. The project demonstrates my proficiency in blockchain development and my ability to build decentralized applications using innovative technologies and programming languages.",
        urlGithub: "https://github.com/AlejandroBecerraAcevedo/motoko-react-ADN-faculty-vocational",
        urlDemo: "https://www.youtube.com/watch?v=XXCpCFI5Afo",
    },
    {
        id: 3,
        title: "ICP con Azle",
        image: "/image/Azle.png",
        description:"This project involves a decentralized application built on the ICP platform using Azle, a framework for creating dApps with TypeScript.",
        fullDescription: "This project involves a decentralized application built on the ICP platform using Azle, a framework for creating dApps with TypeScript. The application allows users to create and trade digital assets on the blockchain, leveraging smart contracts to manage transactions securely and transparently. The project demonstrates my proficiency in blockchain development and my ability to build decentralized applications using cutting-edge technologies and frameworks.",   
        urlGithub: "https://github.com/andresm05/icp-hackaton-crypto-blockers",
        urlDemo: "https://uvyfx-hiaaa-aaaap-qhivq-cai.icp0.io/",
    },
    {
        id: 4,
        title: "Spring Boot",
        image: "/image/Spring.png",
        description:"This project showcases a backend application developed with Spring Boot, a popular Java framework for building web applications.",
        fullDescription: "This project showcases a backend application developed with Spring Boot, a popular Java framework for building web applications. The application uses RESTful APIs to interact with a database and perform CRUD operations on user data. It also includes features like authentication and authorization to secure the application and protect user information. The project demonstrates my proficiency in Java programming and my ability to develop robust and scalable web applications using modern frameworks and technologies.",
        urlGithub: "https://github.com/AlejandroBecerraAcevedo/ArquitLab2",
        urlDemo: "https://github.com/AlejandroBecerraAcevedo/ArquitLab2",
    }
    
];

export { languageSkills, info, programmingSkills, extraSkills, knowledge, education, dataPortfolio };