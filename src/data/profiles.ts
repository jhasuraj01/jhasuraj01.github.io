import { ProfileLinkProps } from "../components/profile-link/ProfileLink";
import variables from './variables.json';

export const profiles: ProfileLinkProps[] = [
    {
        link: "https://codechef.jhasuraj.com",
        title: "CodeChef",
        subtitle: "Competitive Programming",
        description: "4 Star, Max Rating: 1938",
        value: "@jhasuraj"
    },
    {
        link: "https://codeforces.jhasuraj.com",
        title: "CodeForces",
        subtitle: "Competitive Programming",
        description: "Pupil, Max Rating: 1275",
        value: "@jhasuraj01"
    },
    {
        link: "https://leetcode.jhasuraj.com",
        title: "LeetCode",
        subtitle: "DSA Practice",
        description: `Total Problems Solved: ${variables.leetcode.problemsCount}`,
        value: "@jhasuraj01"
    },
    {
        link: "https://github.jhasuraj.com",
        title: "GitHub",
        subtitle: "Software Project Management",
        description: "Stars: 80, Public Repo: 49",
        value: "@jhasuraj01"
    },
    {
        link: "https://figma.jhasuraj.com",
        title: "Figma",
        subtitle: "UI Design Tool",
        description: "Public Projects: 1",
        value: "@jhasuraj"
    },
    {
        link: "https://geeksforgeeks.jhasuraj.com",
        title: "GeeksforGeeks",
        subtitle: "DSA Practice",
        description: `Total Problems Solved: ${variables.gfg.problemsCount}`,
        value: "@jhasuraj"
    }
]