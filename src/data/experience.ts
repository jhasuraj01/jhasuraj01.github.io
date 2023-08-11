export enum JobTypeEnum {
    INTERNSHIP = 'Internship',
    FULL_TIME = 'Full Time',
    PART_TIME = 'Part Time',
    FREELANCE = 'Freelance'
}

export interface IExperience {
    duration: string
    company: string
    role: string
    description: string
    location: string
    skills: string
    type: JobTypeEnum
    link?: string
}

export const experiences: IExperience[] = [
    {
        duration: 'Jun 2023 - Aug 2023',
        company: 'Barclays',
        role: 'Product Technology, Summer Intern',
        description: `Developed Synchronous and Asynchronous APIs using AWS Lambda, API Gateway, S3, SNS, SES, State Machine, Event Bridge, AWS X-Ray, AWS Cognito, Cloud Formation, DynamoDB, and Java Spring Boot. Implemented end-to-end traceability and logic to catch and notify errors in a live environment.`,
        location: 'Pune, Maharashtra, India',
        skills: "Amazon Web Services (AWS), Spring Boot, Java",
        type: JobTypeEnum.INTERNSHIP,
    },
    {
        duration: 'Jan 2022 - May 2023',
        company: 'CodeChef',
        role: 'Educator',
        description: `I am working as an educator at CodeChef. My job in this role is to solve competitive programming problems and create video editorials to help beginners learn and understand basic math, data structures, and algorithms to develop problem-solving skills. I have helped thousands of participants by creating over 130+ video editorials for problems with difficulty up to "CodeChef Easy".`,
        location: 'Bangalore, Karnataka, India',
        skills: "Problem Solving, Communication, Teaching, Competitive Programming, Data Structures, Algorithms",
        type: JobTypeEnum.PART_TIME,
    },
    {
        duration: 'Feb 2022 - Apr 2022',
        company: 'CloudRocks pvt. ltd. (Cloudbloq)',
        role: 'Software Engineer Intern',
        description: `During this internship, I worked with modern technologies like ReactJs & NodeJs. Majorly I had Enhanced User Authentication Flow and Implemented Analytic Viewer. I worked closely with senior developers and my mentor at CloudBloq to implement new features and fixed various bugs in the frontend and backend.`,
        location: 'Bangalore, Karnataka, India',
        skills: "Node.js, React.js, SCSS, React-Saga",
        type: JobTypeEnum.INTERNSHIP,
    },
    {
        duration: 'Jun 2021 - Dec 2021',
        company: 'MythView',
        role: 'Freelance Backend Engineer',
        description: `Implemented User Authentication System, Multi-Account (Personal & Community), Likes and infinitely nested comment on users post, News-Feed generation from followed accounts.`,
        location: 'Mumbai, Maharashtra, India',
        skills: "Node.js, Express.js, Cloud Firestore, GraphQL, Cloud Storage, Stoplight Studio",
        type: JobTypeEnum.FREELANCE,
    },
]