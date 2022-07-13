import { useWindowSize } from "react-use";
import styled from "styled-components";
import { SectionWrapper } from "../../components/section-wrapper/SectionWrapper";

const Container = styled.div<{windowWidth: number}>`
    display: flex;
    flex-direction: ${({ windowWidth }) => windowWidth < 1000 ? 'column' : 'row' };
    gap: ${({ windowWidth }) => windowWidth < 1000 ? 0 : '64px' };
    padding: ${({ windowWidth }) => windowWidth < 1000 ? '64px 0' : '0 64px' };
`
const TitleContainer = styled.div`
    overflow: hidden;
    @media (min-width: 1000px) {
        height: 100vh;
        flex: 0 0 120px;
        position: sticky;
        top: 0;
    }
`
const SectionTitle = styled.div<{windowWidth: number}>`
    display: inline-block;
    font-weight: 700;
    font-size: 12vw;
    padding: 0 16px;

    @media (min-width: 1000px) {
        padding: 0;
        font-weight: 700;
        font-size: min(15vh, 128px);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%,-50%,0) rotate(-90deg);
        transform-origin: 50% 50%;
    }
`
const ExperienceContainer = styled.div`
    padding: 64px 0;
    min-height: 100%;
    flex-grow: 1;
`

const PositionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0;
    border-top: 2px solid currentColor;
    padding: 16px 32px;

    @media (min-width: 1000px) {
        flex-direction: row;
        gap: 24px;
    }
`
const WorkDate = styled.div`
    margin: 12px 2px;
    @media (min-width: 1000px) {
        margin: 0;
        flex: 0 0 160px;
    }
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
                <ul>
                    {description.map(point => <li key={point}>{point}</li>)}
                </ul>
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
    const { width } = useWindowSize();
    return (
        <SectionWrapper>
            <Container windowWidth={width}>
                <TitleContainer>
                    <SectionTitle windowWidth={width}>Experience</SectionTitle>
                </TitleContainer>
                <ExperienceContainer>
                    {positions.map(position => <Position key={position.company} {...position} />)}
                </ExperienceContainer>
            </Container>
        </SectionWrapper>
    )
}