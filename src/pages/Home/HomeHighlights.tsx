import { Link } from "react-router-dom";
import styled from "styled-components";
import { Highlight } from "../../components/highlight/Highlight";
import totalProblems from "./utils/totalProblems";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 16px;
    
    @media (min-width: 1200px) {
        grid-template-columns: repeat(2, minmax(300px, 1fr));
    }
`

export const HomeHighlights = () => {
    return (
        <Wrapper>
            <Highlight title="Internships" data="3" />
            <Highlight title="DSA Problems Solved" data={`+${totalProblems()}`} />
            <Link to="/projects"><Highlight title="Projects" data="+10" /></Link>
            <Highlight title="Research Papers" data="2" />
            <Highlight title="Certifications" data="+16" />
            <Highlight title="Games Developed" data="+2" />
        </Wrapper>
    );
}