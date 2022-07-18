import { readFile, writeFile } from "fs/promises";
import { fetchCodeChef } from "./fetch/codechef.js";
import { URL } from 'url';
import path from "path";
import { fetchCodeForces } from "./fetch/codeforces.js";
import { fetchLeetCode } from "./fetch/leetcode.js";

const __dirname = new URL('.', import.meta.url).pathname;

(async () => {
    const dataPath = path.resolve(__dirname + "../../src/data/variables.json")
    const variables = JSON.parse(await readFile(dataPath, 'utf-8'))

    const codechef = await fetchCodeChef();
    variables.codechef = { ...variables.codechef, ...codechef};

    const codeforces = await fetchCodeForces();
    variables.codeforces = { ...variables.codeforces, ...codeforces};

    const leetcode = await fetchLeetCode();
    variables.leetcode = { ...variables.leetcode, ...leetcode};

    writeFile(dataPath, JSON.stringify(variables, null, 4));
})()