import{s as i,j as e,r as t}from"./main-946ee509.js";const c=i.a`
    display: flex;
    flex-grow: 1;
    align-items: center;
    padding: 12px;
    gap: 16px;
    border-top: 1px solid var(--border-primary_theme);
    transition: all 250ms ease-in-out;

    &:hover {
        box-shadow: 0 0 16px 4px #00000011;
    }
`,d=i.div`
    display: flex;
    flex-direction: column;
`,p=i.div`
    font-weight: 500;
    font-size: 14px;
    @media (max-width: 400px) {
        font-size: 13px;
    }
`,h=i.div`
    font-weight: 400;
    font-size: 20px;
    text-overflow: ellipsis;
    @media (max-width: 400px) {
        font-size: 16px;
    }
`,m=i.div`
    flex-shrink: 0;
`,n=({link:r,title:a,value:s,icon:l})=>e.jsxs(c,{href:r,target:"_blank",rel:"noopener noreferrer",children:[e.jsx(m,{children:e.jsx(l,{})}),e.jsxs(d,{children:[e.jsx(p,{children:a}),e.jsx(h,{children:s})]})]}),o=r=>t.createElement("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},t.createElement("path",{d:"M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z",fill:"var(--background-primary_theme)"}),t.createElement("path",{d:"M31 17H17C15.8954 17 15 17.8954 15 19V29C15 30.1046 15.8954 31 17 31H31C32.1046 31 33 30.1046 33 29V19C33 17.8954 32.1046 17 31 17Z",stroke:"var(--background-primary)",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),t.createElement("path",{d:"M15 19L24 25L33 19",stroke:"var(--background-primary)",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),x=r=>t.createElement("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},t.createElement("path",{d:"M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z",fill:"var(--background-primary_theme)"}),t.createElement("path",{d:"M30 16H18C16.8954 16 16 16.8954 16 18V30C16 31.1046 16.8954 32 18 32H30C31.1046 32 32 31.1046 32 30V18C32 16.8954 31.1046 16 30 16Z",stroke:"var(--background-primary)",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),t.createElement("path",{d:"M20 23V28M20 20V20.01M24 28V23M28 28V25C28 24.4696 27.7893 23.9609 27.4142 23.5858C27.0391 23.2107 26.5304 23 26 23C25.4696 23 24.9609 23.2107 24.5858 23.5858C24.2107 23.9609 24 24.4696 24 25",stroke:"var(--background-primary)",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),g=r=>t.createElement("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},t.createElement("path",{d:"M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z",fill:"var(--background-primary_theme)"}),t.createElement("path",{d:"M21 31C16.7 32.4 16.7 28.5 15 28M27 33V29.5C27 28.5 27.1 28.1 26.5 27.5C29.3 27.2 32 26.1 32 21.5C31.9988 20.3049 31.5325 19.1573 30.7 18.3C31.0905 17.2619 31.0545 16.1116 30.6 15.1C30.6 15.1 29.5 14.8 27.1 16.4C25.0672 15.8705 22.9328 15.8705 20.9 16.4C18.5 14.8 17.4 15.1 17.4 15.1C16.9455 16.1116 16.9095 17.2619 17.3 18.3C16.4675 19.1573 16.0012 20.3049 16 21.5C16 26.1 18.7 27.2 21.5 27.5C20.9 28.1 20.9 28.7 21 29.5V33",stroke:"var(--background-primary)",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),u=r=>t.createElement("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},t.createElement("path",{d:"M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z",fill:"var(--background-primary_theme)"}),t.createElement("path",{d:"M34 16.01C33 16.5 32.02 16.699 31 17C29.879 15.735 28.217 15.665 26.62 16.263C25.023 16.861 23.977 18.323 24 20V21C20.755 21.083 17.865 19.605 16 17C16 17 11.818 24.433 20 28C18.128 29.247 16.261 30.088 14 30C17.308 31.803 20.913 32.423 24.034 31.517C27.614 30.477 30.556 27.794 31.685 23.775C32.0218 22.5527 32.189 21.2899 32.182 20.022C32.18 19.773 33.692 17.25 34 16.009V16.01Z",stroke:"var(--background-primary)",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),C=i.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 128px;
    padding: 128px 64px;
    background-color: var(--background-secondary_theme);
    
    @media (max-width: 600px) {
        padding: 128px 0;
    }
`,k=i.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 16px;
`,j=i.div`
    font-weight: 400;
    font-size: 32px;
    text-align: center;
`,v=i.div`
    font-weight: 400;
    font-size: 48px;
    text-align: center;
`,w=i.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(400px, 100vw), 1fr));
    gap: 40px;
`,b=()=>e.jsxs(C,{children:[e.jsxs(k,{children:[e.jsx(j,{children:"Let's get in Touch!"}),e.jsx(v,{children:"Connect With Me"})]}),e.jsxs(w,{children:[e.jsx(n,{link:"mailto:contact@jhasuraj.com",title:"Email, Official",value:"contact@jhasuraj.com",icon:o}),e.jsx(n,{link:"mailto:suraj.jha20@pccoepune.org",title:"Email, College",value:"suraj.jha20@pccoepune.org",icon:o}),e.jsx(n,{link:"mailto:jhasurajdev@gmail.com",title:"Email, Alternate",value:"jhasurajdev@gmail.com",icon:o}),e.jsx(n,{link:"https://linkedin.jhasuraj.com/",title:"LinkedIn",value:"linkedin.com/in/jhasuraj01",icon:x}),e.jsx(n,{link:"https://github.jhasuraj.com/",title:"GitHub",value:"github.com/jhasuraj01",icon:g}),e.jsx(n,{link:"https://twitter.jhasuraj.com/",title:"Twitter",value:"twitter.com/jhasuraj01",icon:u})]})]});export{b as S};
