import { ProgressBar } from "../../components/progress/ProgressBar";
import styled from "styled-components";
import { ratings } from "../../data/programming";
import totalProblems from "./utils/totalProblems";
import variables from "../../data/variables.json"

const Wrapper = styled.section`
    background-color: var(--background-secondary_theme);
    padding: 72px 0;
    @media (max-width: 650px) {
        padding: max(10vw, 32px) 0;
    }
`

const SectionTitle = styled.div`
    padding: 0 0 72px 0;
    font-weight: 700;
    font-size: 64px;
    text-align: center;

    @media (max-width: 650px) {
        font-size: max(10vw, 32px);
        padding: 0 0 max(10vw, 32px) 0;
    }
`
// const SectionHighlight = styled.div`
//     padding: 72px 0;
//     text-align: center;
//     font-weight: 400;
//     font-size: 64px;
    
//     @media (max-width: 650px) {
//         font-size: max(10vw, 32px);
//         padding: max(10vw, 32px) 0;
//     }
// `

const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
    max-width: 700px;
    margin: auto;
`
const ProblemStats = styled.a`
    display: flex;
    align-items: center;
    gap: 24px;
    cursor: ${({ href }) => href ? 'pointer' : 'default' };
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

    // remove small counts and display other instead
    const modifiedRatings: typeof ratings = []
    const totalProblemActualCount = ratings.reduce((currentTotal, b) => currentTotal + b.problemsCount, 0);
    let currentProblemCount = 0;
    let otherPlatformProblemsCount = 0;
    for (let i = 0; i < ratings.length; i++) {
        const platform = ratings[i];
        if(currentProblemCount < totalProblemActualCount * 0.8) {
            modifiedRatings.push(platform)
        }
        else {
            otherPlatformProblemsCount += platform.problemsCount;
        }
        currentProblemCount += platform.problemsCount;
    }
    if(otherPlatformProblemsCount > 0) {
        modifiedRatings.push({
            platform: "Other Platforms",
            problemsCount: otherPlatformProblemsCount,
        })
    }

    return (
        <Wrapper>
            <SectionTitle>Problem Solving</SectionTitle>
            <StatsContainer>
                <StatsDescription>
                    <strong>{totalProblems()}+</strong> Quality Problems solved on Various Platforms
                </StatsDescription>
                {modifiedRatings.map(rating => {
                    return (
                        <ProblemStats key={rating.platform} href={rating.profileLink} rel="noopener noreferrer" target="_blank">
                            <StatsText>
                                <PlatformName>{rating.platform}</PlatformName>
                                <ProblemsCount>{rating.problemsCount}</ProblemsCount>
                            </StatsText>
                            <ProgressBar color="var(--border-primary_theme)" background="var(--background-primary)" percent={rating.problemsCount / maxCount * 100} height="20px" />
                        </ProblemStats>
                    )
                })}
            </StatsContainer>
            {/* <SectionHighlight>{variables.codechef.stars} on CodeChef</SectionHighlight> */}
            
        </Wrapper>
    )
}