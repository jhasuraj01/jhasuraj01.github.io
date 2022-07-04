import styled from "styled-components";
import { RollingText } from "../components/rolling-text/RollingText";

const domain = [
    "Frontend Web Developmet",
    "Full Stack Web Developmet",
    "Cloud Driven Applications",
    "BlockChain Based Apps",
    "UI & UX Design"
]

const SubTitle = styled.div`
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: center;
`

const ProjectHeader = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    margin: 132px auto;
`

const Projects = () => {
    return (
        <ProjectHeader>
            <SubTitle>Created 7+ Projects in various domain</SubTitle>
            <RollingText sentences={domain} />
        </ProjectHeader>
    );
}

export default Projects;