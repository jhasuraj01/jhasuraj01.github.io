import { Link } from "react-router-dom";
import styled from "styled-components";
import { IExperience, experiences } from "../../data/experience";

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

    @media (max-width: 500px) {
        padding: 16px;
        padding-top: 0;
    }

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

const CompanyCard = ({ duration, company, role, description, location, link, skills }: IExperience) => {
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

export const Experience = () => {
    return (
        <Wrapper>
            <SectionTitle>Experience</SectionTitle>
            <Positions>
                {experiences.map(position => <CompanyCard key={position.company} {...position} />)}
            </Positions>
        </Wrapper>
    )
}
