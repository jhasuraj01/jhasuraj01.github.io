import { Link } from "react-router-dom";
import styled from "styled-components";
import { Highlight } from "../../components/highlight/Highlight";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 64px;
`

const HighlightsLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 56px;
`

const HighlightsRight = styled.div`
    display: flex;
    flex-direction: column;
    gap: 56px;
    align-items: flex-end;
`

export const HomeHighlights = () => {
    return (
        <Wrapper>
            <HighlightsLeft>
                <Highlight text="Internships" data="+2" />
                <Highlight text="Certifications" data="+8" />
                <Highlight text="Research Papers" data="+2" />
            </HighlightsLeft>
            <HighlightsRight>
                <Highlight text="Games Developed" data="+2" align="right" />
                <Highlight text="DSA Problems Solved" data="+400" align="right" />
                <Link to="/projects"><Highlight text="Projects" data="+10" align="right" /></Link>
            </HighlightsRight>
        </Wrapper>
    );
}