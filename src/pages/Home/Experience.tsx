import styled from "styled-components";
import { SectionWrapper } from "../../components/section-wrapper/SectionWrapper";

const Container = styled.div`
    display: flex;
    gap: 64px;
    padding: 0 64px;
`
const TitleContainer = styled.div`
    position: sticky;
    top: 0;
    height: 100vh;
    flex: 0 0 120px;
    overflow: hidden;
`
const SectionTitle = styled.div`
    position: absolute;
    display: inline-block;
    top: 50%;
    left: 50%;

    font-style: normal;
    font-weight: 700;
    font-size: 15vh;
    line-height: 107px;
 
    transform: translate3d(-50%,-50%,0) rotate(-90deg);;
    transform-origin: 50% 50%;
`
const ExperienceContainer = styled.div`
    padding: 64px 0;
    min-height: 100%;
    flex-grow: 1;
`

const PositionContainer = styled.div`
    display: flex;
    gap: 24px;
    border-top: 2px solid currentColor;
    padding: 16px 32px;
`
const WorkDate = styled.div`
    flex: 0 0 160px;
`
const WorkDetails = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 0px;
    gap: 12px;
`
const WorkCompany = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 40px;
`
const WorkRole = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 27px;
`
const WorkDescription = styled.ul``
const WorkDescriptionPoint = styled.li``
const WorkLocation = styled.div`
text-align: right;
`

export interface PositionProps {
    date: string
    company: string
    role: string
    description: string[]
    location: string
}

const Position = ({ date, company, role, description, location }: PositionProps) => {
    return (
        <PositionContainer>
            <WorkDate>{date}</WorkDate>
            <WorkDetails>
                <WorkCompany>{company}</WorkCompany>
                <WorkRole>{role}</WorkRole>
                <WorkDescription>
                    {description.map(point => <WorkDescriptionPoint key={point}>{point}</WorkDescriptionPoint>)}
                </WorkDescription>
                <WorkLocation>{location}</WorkLocation>
            </WorkDetails>
        </PositionContainer>
    )
}

const positions: PositionProps[] = [
    {
        date: '01/22 - present',
        company: 'CodeChef',
        role: 'Educator',
        description: [
            'Created 50+ video editorials for problems appeared in CodeChef’s competitive programming contests.',
        ],
        location: 'Bangalore, Karnataka, India',
    },
    {
        date: '02/22 - 04/22',
        company: 'Cloudbloq (CloudRocks pvt. ltd.)',
        role: 'Software Engineer Intern',
        description: [
            'Enhanced User Authentication Flow, Implemented Analytic Viewer',
            'Worked on various bugs in many business critical features. Primary used NodeJs, ReactJs, SCSS, Redux-Saga.',
        ],
        location: 'Bangalore, Karnataka, India',
    },
    {
        date: '06/21 - 12/21',
        company: 'MythView',
        role: 'Freelance Backend Engineer',
        description: [
            'Implemented User Authentication System, Multi-Account (Personal & Community), Likes and infinitely nested comment on users post, News-Feed generation from followed accounts.',
            'Primarily used NodeJS, ExpressJS, Cloud Firestore, GraphQL, Cloud Storage, Stoplight Studio',
        ],
        location: 'Mumbai, Maharashtra, India',
    },
]

export const Experience = () => {
    return (
        <SectionWrapper>
            <Container>
                <TitleContainer>
                    <SectionTitle>Experience</SectionTitle>
                </TitleContainer>
                <ExperienceContainer>
                    {positions.map(position => <Position key={position.company} {...position} />)}
                </ExperienceContainer>
            </Container>
        </SectionWrapper>
    )
}