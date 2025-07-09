import{s as t,r as n,j as e}from"./main-7ac49189.js";import{R as s,p as i,P as r,S as a}from"./projects-a64c4a5f.js";const c=["Frontend Web","Full Stack","Cloud","BlockChain","UI & UX"],d=t.div`
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: center;
`,x=t.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    margin: 132px auto;
`,p=t.div`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 64px;
    padding: 64px;

    @media (max-width: 428px) {
        padding: 64px 32px;
    }
`,j=()=>(n.useLayoutEffect(()=>{window.scrollTo({top:0,left:0,behavior:"instant"})},[]),e.jsxs(e.Fragment,{children:[e.jsxs(x,{children:[e.jsx(d,{children:"Created 10+ Projects in various domain"}),e.jsx(s,{sentences:c})]}),e.jsx(p,{children:i.map(o=>e.jsx(r,{...o}))}),e.jsx(a,{showThemeBg:!0})]}));export{j as default};
