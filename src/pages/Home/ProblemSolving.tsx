import { SectionWrapper } from "../../components/section-wrapper/SectionWrapper";
import { ProgressBar } from "../../components/progress/ProgressBar";
import styled from "styled-components";
import { ratings } from "../../data/programming";
import totalProblems from "./addons/totalProblems";
import variables from "../../data/variables.json"

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
const SectionHighlight = styled.div`
    padding: 72px 0;
    text-align: center;
    font-weight: 400;
    font-size: 64px;
    
    @media (max-width: 650px) {
        font-size: max(10vw, 32px);
        padding: max(10vw, 32px) 0;
    }
`

const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
    max-width: 700px;
    margin: auto;
`
const ProblemStats = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    @media (max-width: 650px) {
        flex-direction: column;
        align-items: stretch;
        gap: 8px;
        padding: 0 32px;
    }
`
const StatsText = styled.div`
    flex: 0 1 400px;
    display: flex;
    justify-content: space-between;
    
    @media (max-width: 650px) {
        flex: auto;
    }
`
const PlatformName = styled.div`
    font-size: 20px;
`
const ProblemsCount = styled.div`
    font-size: 20px;
`
const StatsDescription = styled.div`
    text-align: center;
    font-size: 20px;
`

export const ProblemSolving = () => {

    ratings.sort((a, b) => b.problemsCount - a.problemsCount);
    const maxCount = ratings[0].problemsCount * 1.1;

    return (
        <SectionWrapper themeBg={true}>
            <SectionTitle>Problem Solving</SectionTitle>
            <StatsContainer>
                <StatsDescription>
                    <strong>{totalProblems()}+</strong> Quality Problems solved on Various Platforms
                </StatsDescription>
                {ratings.map(rating => {
                    return (
                        <ProblemStats key={rating.platform}>
                            <StatsText>
                                <PlatformName>{rating.platform}</PlatformName>
                                <ProblemsCount>{rating.problemsCount}</ProblemsCount>
                            </StatsText>
                            <ProgressBar color="var(--card-border)" background="white" percent={rating.problemsCount / maxCount * 100} height="20px" />
                        </ProblemStats>
                    )
                })}
            </StatsContainer>
            <SectionHighlight>{variables.codechef.stars} on CodeChef</SectionHighlight>
            
        </SectionWrapper>
    )
}