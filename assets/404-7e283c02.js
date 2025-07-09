import{s as e,c as o,r as s,j as t}from"./main-7ac49189.js";const i=e.div`
    box-sizing: border-box;
    display: flex;
    gap: 48px;
    padding: 16px;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    min-height: calc(100vh - 250px);
`,r=e.div`
    font-size: 48px;
    text-align: center;
`,c=e.div`
    font-size: 16px;
    color: var(--color-primary_theme);
    text-align: center;
`,l=()=>{const n=o();return s.useLayoutEffect(()=>{window.scrollTo({top:0,left:0,behavior:"instant"})},[]),t.jsxs(i,{children:[t.jsx(r,{children:"Woops 404!"}),t.jsxs(c,{children:["The requested url ",t.jsx("strong",{children:n.pathname})," was not found on this server."]})]})};export{l as default};
