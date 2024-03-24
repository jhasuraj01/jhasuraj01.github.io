import{s as r,j as e,r as l}from"./main-946ee509.js";import{v as t}from"./variables-dc3f4fb5.js";import{S as c}from"./SocialConnect-723f540b.js";const p=r.a`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    text-align: center;
    padding: 24px;
    gap: 24px;
    border-radius: 8px;

    border: 1px solid var(--border-primary_theme);
    transition: all 250ms ease-in-out;

    &:hover {
        box-shadow: 0 0 16px 4px #00000011;
    }
`,d=r.div`
    font-size: 32px;
`,u=r.div`
    font-size: 14px;
    color: var(--color-secondary)
`,m=r.div`
    font-size: 16px;
    text-transform: capitalize;
`,x=r.div`
    font-size: 20px;
    color: var(--color-primary_theme);
`,h=({link:o,title:i,subtitle:a,description:s,value:n})=>e.jsxs(p,{href:o,target:"_blank",rel:"noopener noreferrer",children:[e.jsx(d,{children:i}),e.jsx(u,{children:a}),e.jsx(m,{children:s}),e.jsx(x,{children:n})]}),j=[{link:"https://codechef.jhasuraj.com",title:"CodeChef",subtitle:"Competitive Programming",description:`${t.codechef.stars.slice(0,-1)} Star, Max Rating: ${t.codechef.maxRating}`,value:"@jhasuraj"},{link:"https://codeforces.jhasuraj.com",title:"CodeForces",subtitle:"Competitive Programming",description:`${t.codeforces.rank}, Max Rating: ${t.codeforces.maxRating}`,value:"@jhasuraj01"},{link:"https://leetcode.jhasuraj.com",title:"LeetCode",subtitle:"DSA Practice",description:`Max Rating: ${Math.round(t.leetcode.maxContestRating)}, Problems: ${t.leetcode.problemsCount}`,value:"@jhasuraj01"},{link:"https://github.jhasuraj.com",title:"GitHub",subtitle:"Software Project Management",description:"Stars: 85, Public Repo: 53",value:"@jhasuraj01"},{link:"https://figma.jhasuraj.com",title:"Figma",subtitle:"UI Design Tool",description:"Public Projects: 1",value:"@jhasuraj"},{link:"https://geeksforgeeks.jhasuraj.com",title:"GeeksforGeeks",subtitle:"DSA Practice",description:`Total Problems Solved: ${t.gfg.problemsCount}`,value:"@jhasuraj"}],f=r.div`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 36px;
    padding: 36px;
    max-width: 1344px;
    margin: auto;
`,g=()=>e.jsx(f,{children:j.map(o=>e.jsx(h,{...o},o.link))}),k=()=>(l.useLayoutEffect(()=>{window.scrollTo({top:0,left:0,behavior:"instant"})},[]),e.jsxs(e.Fragment,{children:[e.jsx(g,{}),e.jsx(c,{})]}));export{k as default};
