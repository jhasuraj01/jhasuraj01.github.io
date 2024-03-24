import{s as e,r as i,j as t}from"./main-946ee509.js";import{R as n,p as s,P as r}from"./projects-4431a71e.js";import{S as a}from"./SocialConnect-723f540b.js";const c=["Frontend Web","Full Stack","Cloud","BlockChain","UI & UX"],d=e.div`
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: center;
`,p=e.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    margin: 132px auto;
`,x=e.div`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 64px;
    padding: 64px;

    @media (max-width: 428px) {
        padding: 64px 32px;
    }
`,f=()=>(i.useLayoutEffect(()=>{window.scrollTo({top:0,left:0,behavior:"instant"})},[]),t.jsxs(t.Fragment,{children:[t.jsxs(p,{children:[t.jsx(d,{children:"Created 10+ Projects in various domain"}),t.jsx(n,{sentences:c})]}),t.jsx(x,{children:s.map(o=>t.jsx(r,{...o}))}),t.jsx(a,{})]}));export{f as default};
