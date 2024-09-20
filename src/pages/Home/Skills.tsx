import React from "react";
import styled from "styled-components";

const Wrapper = styled.div<{showThemeBg: boolean}>`
    display: flex;
    flex-direction: column;
    padding: 72px 0;
    gap: 72px;
    ${({ showThemeBg }) => showThemeBg ? 'background-color: var(--background-secondary_theme);' : ''}
`
const SectionTitle = styled.div`
    font-weight: 700;
    font-size: 64px;
    text-align: center;

    @media (max-width: 650px) {
        font-size: max(10vw, 32px);
    }
`
const KeySkills = styled.div`
    font-weight: 700;
    font-size: 24px;
    padding: 0 16px;
    color: var(--color-primary_theme);
    text-align: center;

    @media (max-width: 500px) {
        font-size: 20px;
    }
`
const SkillsContainer = styled.div`
    display: flex;
    margin: 0 auto;

    @media (max-width: 900px) {
        flex-direction: column;
        gap: 32px;
    }
`
const TypeSeperator = styled.div`
    background-color: var(--border-secondary_theme);
    flex-basis: 2px;
    align-self: stretch;
`
const TypeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 300px;
    text-align: center;
`
const SkillType = styled.div`
    font-weight: 500;
    font-size: 20px;
`
const Skill = styled.div`
    font-size: 16px;
`

export interface SkillsProps {
    showThemeBg?: boolean
}

export const Skills: React.FC<SkillsProps> = ({ showThemeBg = false }) => {
    return (
        <Wrapper showThemeBg={showThemeBg}>
            <SectionTitle>Skills</SectionTitle>
            <KeySkills>Data Structures and Algorithms, UI&nbsp;&amp;&nbsp;UX, Web&nbsp;Development</KeySkills>
            <SkillsContainer>
                <TypeWrapper>
                    <SkillType>Programming Language</SkillType>
                    <Skill>C / C++</Skill>
                    <Skill>TypeScript</Skill>
                    <Skill>JavaScript</Skill>
                    <Skill>Python</Skill>
                    <Skill>Java</Skill>
                    <Skill>Assembly</Skill>
                </TypeWrapper>
                <TypeSeperator />
                <TypeWrapper>
                    <SkillType>Cloud Technology</SkillType>
                    <Skill>AWS Dynamodb</Skill>
                    <Skill>AWS Lambda</Skill>
                    <Skill>AWS App Sync</Skill>
                    <Skill>Google Firebase</Skill>
                    <Skill>Google FireStore</Skill>
                    <Skill>Google App Engine</Skill>
                </TypeWrapper>
                <TypeSeperator />
                <TypeWrapper>
                    <SkillType>Other Technologies</SkillType>
                    <Skill>Git / GitHub</Skill>
                    <Skill>React.js / Next.js</Skill>
                    <Skill>Rest / GraphQL API</Skill>
                    <Skill>Figma / FigJam</Skill>
                    <Skill>Lit / Lit HTML</Skill>
                    <Skill>SCSS / CSS</Skill>
                </TypeWrapper>
            </SkillsContainer>
        </Wrapper>
    )
}