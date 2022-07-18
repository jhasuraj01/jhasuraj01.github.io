import { ratings } from "../../../data/programming";

const totalProblems = (): number => {
    let total_problems = 0;
    ratings.forEach(rating => total_problems += rating.problemsCount);
    total_problems -= total_problems % 10;

    return total_problems;
}

export default totalProblems