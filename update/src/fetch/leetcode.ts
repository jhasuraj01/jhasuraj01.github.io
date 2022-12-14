import { readFile } from 'fs/promises';
import fetch from 'node-fetch';
import path from 'path';
const __dirname = new URL('.', import.meta.url).pathname;

interface FetchLeetCodeReturnType {
    problemsCount: number
    maxContestRating: number
}

interface LeetCodeAPIResponse {
    data: {
        userContestRanking: {
            rating: number
            topPercentage: number
            attendedContestsCount: number
        },
        matchedUser: {
            username: string
            profile: {
                ranking: number
                acStats: {
                    acQuestionCount: number
                }
            }
        }
    }
}

const query = `
query useProfileInfo($username: String!) {
    userContestRanking(username: $username) {
        rating
        topPercentage
        attendedContestsCount
    }
    matchedUser(username: $username) {
        username
        profile {
            ranking
            acStats {
                acQuestionCount
            }
        }
    }
}`

export const fetchLeetCode = async (): Promise<FetchLeetCodeReturnType> => {
    const res = await fetch('https://leetcode.com/graphql', {
        method: 'POST',
        body: JSON.stringify({
            query,
            variables: {
                username: 'jhasuraj01'
            },
        }),
        headers: {
            'Accept': '*/*',
            'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
            'Content-Type': 'application/json',
            'x-csrftoken': 'RitG6AOn1ZmcIup5QQFpgJU4yFaqsbjlrSdUFkP4UzHBRMOkBUzKWhrywouz3mOA'
        }
    })

    const { data } = await res.json() as LeetCodeAPIResponse;
    
    const dataPath = path.resolve(__dirname + "../../../src/data/variables.json")
    const variables = JSON.parse(await readFile(dataPath, 'utf-8'))
    
    return {
        problemsCount: data.matchedUser.profile.acStats.acQuestionCount,
        maxContestRating: Math.max(
            variables.leetcode.maxContestRating,
            data.userContestRanking.rating
        )
    }
}