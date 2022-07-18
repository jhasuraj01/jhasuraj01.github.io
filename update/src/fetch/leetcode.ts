import fetch from 'node-fetch';

interface FetchLeetCodeReturnType {
    problemsCount: number
}

interface LeetCodeAPIResponse {
    total_problems_solved: string
}

export const fetchLeetCode = async (): Promise<FetchLeetCodeReturnType> => {
    const req = await fetch("https://competitive-coding-api.herokuapp.com/api/leetcode/jhasuraj01")
    const data = await req.json() as LeetCodeAPIResponse;

    return {
        problemsCount: Number(data.total_problems_solved),
    }
}