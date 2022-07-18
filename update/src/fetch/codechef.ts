import fetch from 'node-fetch';

interface FetchCodeChefReturnType {
    maxRating: number
    problemsCount: number
    stars: string
}

interface CodeChefAPIResponseType {
    highest_rating: number
    stars: '1★' | '2★' | '3★' | '4★' | '5★' | '6★' | '7★'
    fully_solved: {
        count: number
    }
    partially_solved: {
        count: number
    }
}

export const fetchCodeChef = async (): Promise<FetchCodeChefReturnType> => {
    const req = await fetch("https://competitive-coding-api.herokuapp.com/api/codechef/jhasuraj")
    const data = await req.json() as CodeChefAPIResponseType;

    return {
        maxRating: data.highest_rating,
        problemsCount: data.fully_solved.count + data.partially_solved.count,
        stars: data.stars
    }
}