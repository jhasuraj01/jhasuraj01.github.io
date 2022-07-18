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
    const statusReq = await fetch("https://codeforces.com/api/user.status?handle=jhasuraj01")
    
    const info = await infoReq.json() as CodeForcesUserInfoResponse;
    const status = await statusReq.json() as CodeForcesUserStatusResponse;

    // may include duplicates for multiple correct attempts
    const allCorrectAttempts: (string | null)[] = status.result.map(attempt => {
        if(attempt.verdict == 'OK') {
            return attempt.problem.contestId + attempt.problem.index
        }
        else {
            return null
        }
    }).filter(Boolean)

    const uniqueCorrectAttempts = new Set(allCorrectAttempts);

    return {
        maxRating: info.result[0].maxRating,
        problemsCount: uniqueCorrectAttempts.size,
        rank: info.result[0].maxRank
    }
}