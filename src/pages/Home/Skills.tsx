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
            <KeySkills>Data Structures and Algorithms, AWS Cloud, Typescript</KeySkills>
            <SkillsContainer>
                <TypeWrapper>
                    <SkillType>Programming Language</SkillType>
                    <Skill>Go</Skill>
                    <Skill>C / C++</Skill>
                    <Skill>TypeScript</Skill>
                    <Skill>Python</Skill>
                    <Skill>Java</Skill>
                </TypeWrapper>
                <TypeSeperator />
                <TypeWrapper>
                    <SkillType>Devops & Cloud</SkillType>
                    <Skill>AWS Serverless Framework</Skill>
                    <Skill>Google Cloud Platform</Skill>
                    <Skill>Docker / Kubernetes</Skill>
                    <Skill>Terraform / Ansible</Skill>
                    <Skill>Jenkins / Github Actions</Skill>
                </TypeWrapper>
                <TypeSeperator />
                <TypeWrapper>
                    <SkillType>Tech & Frameworks</SkillType>
                    <Skill>Rest / GraphQL / gRPC</Skill>
                    <Skill>React / NodeJS</Skill>
                    <Skill>Java Spring Boot</Skill>
                    <Skill>SQL: MySQL / Postgresql</Skill>
                    <Skill>NoSQL: MongoDB / DynamoDB</Skill>
                </TypeWrapper>
            </SkillsContainer>
        </Wrapper>
    )
}