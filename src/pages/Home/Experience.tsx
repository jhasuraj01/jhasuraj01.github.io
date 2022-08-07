import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
    background-color: var(--background-theme);
`
const SectionTitle = styled.div`
    padding: 72px 0;
    font-weight: 700;
    font-size: 64px;
    text-align: center;

    @media (max-width: 650px) {
        font-size: max(10vw, 32px);
        padding: max(10vw, 32px) 0;
    }
`

const Positions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
    padding: 48px;
    padding-top: 0;
`;
const CompanyCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 32px;
    gap: 16px;
    max-width: 1000px;
    background-color: var(--color-theme_deep);
    border-bottom: 2px solid #8D33FF;
    border-radius: 8px;
`;
const DateLocation = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;
`;
const CompanyRole = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;
const CompanyName = styled.div`
    font-size: 24px;
`;
const RoleName = styled.div`
    font-size: 20px;
`;
const Description = styled.div`
    font-size: 16px;
`;
const Skills = styled.div`
    font-size: 14px;
`;
const LearnMore = styled(Link)`
    align-self: flex-end;
    font-size: 16px;
    text-align: right;
    color: var(--color-theme);
`;

export interface CompanyCardProps {
    duration: string
    company: string
    role: string
    description: string
    location: string
    link?: string
    skills: string
}

const CompanyCard = ({ duration, company, role, description, location, link, skills }: CompanyCardProps) => {
    return (
        <CompanyCardWrapper>
            <DateLocation>
                <span>{duration}</span>
                <span>{location}</span>
            </DateLocation>
            <CompanyRole>
                <CompanyName>{company}</CompanyName>
                <RoleName>{role}</RoleName>
            </CompanyRole>
            <Description>{description}</Description>
            <Skills><b>Skills:</b> {skills} </Skills>
            {link && <LearnMore to={link}>Learn More</LearnMore>}
        </CompanyCardWrapper>
    )
}

const positions: CompanyCardProps[] = [
    {
        duration: '01/22 - present',
        company: 'CodeChef',
        role: 'Educator',
        description: `I am working as an educator at CodeChef. My job in this role is to solve competitive programming problems and create video editorials to help beginners learn and understand basic math, data structures, and algorithms to develop problem-solving skills. I have helped thousands of participants by creating over 80+ video editorials for problems with difficulty up to "CodeChef Easy".`,
        location: 'Bangalore, Karnataka, India',
        skills: "Problem Solving, Communication, Teaching, Competitive Programming, Data Structures, Algorithms",
    },
    {
        duration: '02/22 - 04/22',
        company: 'CloudRocks pvt. ltd. (Cloudbloq)',
        role: 'Software Engineer Intern',
        description: `During this internship, I worked with modern technologies like ReactJs & NodeJs. Majorly I had Enhanced User Authentication Flow and Implemented Analytic Viewer. I worked closely with senior developers and my mentor at CloudBloq to implement new features and fixed various bugs in the frontend and backend.`,
        location: 'Bangalore, Karnataka, India',
        skills: "Node.js, React.js, SCSS, React-Saga",
    },
    {
        duration: '06/21 - 12/21',
        company: 'MythView',
        role: 'Freelance Backend Engineer',
        description: `Implemented User Authentication System, Multi-Account (Personal & Community), Likes and infinitely nested comment on users post, News-Feed generation from followed accounts.`,
        location: 'Mumbai, Maharashtra, India',
        skills: "Node.js, Express.js, Cloud Firestore, GraphQL, Cloud Storage, Stoplight Studio",
    },
]

export const Experience = () => {
    return (
        <Wrapper>
            <SectionTitle>Experience</SectionTitle>
            <Positions>
                {positions.map(position => <CompanyCard key={position.company} {...position} />)}
            </Positions>
        </Wrapper>
    )
}
