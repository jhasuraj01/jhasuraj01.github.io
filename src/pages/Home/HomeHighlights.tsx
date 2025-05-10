import { Link } from "react-router-dom";
import styled from "styled-components";
import { Highlight } from "../../components/highlight/Highlight";
import totalProblems from "./utils/totalProblems";
import { experiences } from "../../data/experience";
import dateDiff from "./utils/dateDiff";

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
            <Highlight title="Software Engineering" data={dateDiff(new Date("Feb 3, 2019"), new Date())} />
            <Highlight title="Total Companies" data={new Set(experiences.map(e => e.company)).size.toString()} />
            <Highlight title="DSA Problems Solved" data={`+${totalProblems()}`} />
            <Highlight title="Research Papers" data="5" />
            {/* <Link to="/projects"><Highlight title="Projects" data="+10" /></Link>
            <Highlight title="Certifications" data="+16" /> */}
        </Wrapper>
    );
}
