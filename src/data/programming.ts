import variables from './variables.json';

export const ratings = [
    {
        platform: "LeetCode",
        problemsCount: variables.leetcode.problemsCount,
        profileLink: variables.leetcode.profileLink
    },
    {
        platform: "CodeChef",
        problemsCount: variables.codechef.problemsCount,
        profileLink: variables.codechef.profileLink
    },
    {
        platform: "GeeksForGeeks",
        problemsCount: variables.gfg.problemsCount,
        profileLink: variables.gfg.profileLink
    },
    {
        platform: "CodeForces",
        problemsCount: variables.codeforces.problemsCount,
        profileLink: variables.codeforces.profileLink
    },
    {
        platform: "InterviewBit",
        problemsCount: 6,
        profileLink: variables.interviewbit.profileLink + "/solved-problems"
    },
    {
        platform: "HackerEarth",
        problemsCount: 8,
        profileLink: variables.hackerearth.profileLink
    }
]
