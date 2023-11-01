import { parse } from 'node-html-parser';
import fetch from 'node-fetch';

interface FetchCodeForcesReturnType {
    maxRating: number
    problemsCount: number
    rank: string
}

interface CodeForcesUserInfoResponse {
    result: {
        maxRating: number
        maxRank: string
    }[]
}

interface CodeForcesUserStatusResponse {
    result: {
        problem: {
            contestId: number
            index: string, // A, B, C, D, E, F, G, H ....
            name: string,
        }
        verdict: 'WRONG_ANSWER' | 'OK'
    }[]
}

export const fetchCodeForces = async (): Promise<FetchCodeForcesReturnType> => {
    const infoReq = await fetch("https://codeforces.com/api/user.info?handles=jhasuraj01")
    const profileReq = await fetch("https://codeforces.com/profile/jhasuraj01/")

    const profileHTML = await profileReq.text();
    const dom = parse(profileHTML);
    const domElement = dom.querySelector('._UserActivityFrame_counterValue')
    if(domElement === null)
        throw new Error('Failed to Fetch CodeForces Profile');

    const problemsCountString = domElement.innerText;
    console.log({problemsCountString})
    const problemsCount = Number(problemsCountString.split(' ')[0]);

    if(typeof problemsCount !== "number")
        throw new Error('Failed to Parse CodeForces Problems Count');
    
    const info = await infoReq.json() as CodeForcesUserInfoResponse;
    // const status = await statusReq.json() as CodeForcesUserStatusResponse;

    // may include duplicates for multiple correct attempts
    // const allCorrectAttempts: (string | null)[] = status.result.map(attempt => {
    //     if(attempt.verdict == 'OK') {
    //         return attempt.problem.contestId + attempt.problem.index
    //     }
    //     else {
    //         return null
    //     }
    // }).filter(Boolean)

    // const uniqueCorrectAttempts = new Set(allCorrectAttempts);

    return {
        maxRating: info.result[0].maxRating,
        // problemsCount: uniqueCorrectAttempts.size,
        problemsCount: problemsCount,
        rank: info.result[0].maxRank
    }
}