import{r,j as e,s as i}from"./main-7ac49189.js";const d="_text_uwn3w_1",h={text:d,"roll-up":"_roll-up_uwn3w_1"},P=({sentences:t})=>{const[s,a]=r.useState(t[0]);return r.useEffect(()=>{let o=0;const l=setInterval(()=>{o=(o+1)%t.length,a(t[o])},1500);return()=>clearInterval(l)},[t]),e.jsx("div",{className:h.text,children:s},s)},u=i.a`
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
`,m=i.div`
    display: flex;
    flex-direction: column;
`,g=i.div`
    font-weight: 500;
    font-size: 14px;
    @media (max-width: 400px) {
        font-size: 13px;
    }
`,x=i.div`
    font-weight: 400;
    font-size: 20px;
    text-overflow: ellipsis;
    @media (max-width: 400px) {
        font-size: 16px;
    }
`,b=i.div`
    flex-shrink: 0;
`,n=({link:t,title:s,value:a,icon:o})=>e.jsxs(u,{href:t,target:"_blank",rel:"noopener noreferrer",children:[e.jsx(b,{children:e.jsx(o,{})}),e.jsxs(m,{children:[e.jsx(g,{children:s}),e.jsx(x,{children:a})]})]}),p=t=>r.createElement("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},r.createElement("path",{d:"M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z",fill:"var(--background-primary_theme)"}),r.createElement("path",{d:"M31 17H17C15.8954 17 15 17.8954 15 19V29C15 30.1046 15.8954 31 17 31H31C32.1046 31 33 30.1046 33 29V19C33 17.8954 32.1046 17 31 17Z",stroke:"var(--background-primary)",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M15 19L24 25L33 19",stroke:"var(--background-primary)",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),j=t=>r.createElement("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},r.createElement("path",{d:"M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z",fill:"var(--background-primary_theme)"}),r.createElement("path",{d:"M30 16H18C16.8954 16 16 16.8954 16 18V30C16 31.1046 16.8954 32 18 32H30C31.1046 32 32 31.1046 32 30V18C32 16.8954 31.1046 16 30 16Z",stroke:"var(--background-primary)",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M20 23V28M20 20V20.01M24 28V23M28 28V25C28 24.4696 27.7893 23.9609 27.4142 23.5858C27.0391 23.2107 26.5304 23 26 23C25.4696 23 24.9609 23.2107 24.5858 23.5858C24.2107 23.9609 24 24.4696 24 25",stroke:"var(--background-primary)",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),C=t=>r.createElement("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},r.createElement("path",{d:"M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z",fill:"var(--background-primary_theme)"}),r.createElement("path",{d:"M21 31C16.7 32.4 16.7 28.5 15 28M27 33V29.5C27 28.5 27.1 28.1 26.5 27.5C29.3 27.2 32 26.1 32 21.5C31.9988 20.3049 31.5325 19.1573 30.7 18.3C31.0905 17.2619 31.0545 16.1116 30.6 15.1C30.6 15.1 29.5 14.8 27.1 16.4C25.0672 15.8705 22.9328 15.8705 20.9 16.4C18.5 14.8 17.4 15.1 17.4 15.1C16.9455 16.1116 16.9095 17.2619 17.3 18.3C16.4675 19.1573 16.0012 20.3049 16 21.5C16 26.1 18.7 27.2 21.5 27.5C20.9 28.1 20.9 28.7 21 29.5V33",stroke:"var(--background-primary)",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),w=i.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 128px;
    padding: 128px 64px;
    ${({showThemeBg:t})=>t?"background-color: var(--background-secondary_theme);":""}
    
    @media (max-width: 600px) {
        padding: 128px 0;
    }
`,v=i.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 16px;
`,f=i.div`
    font-weight: 400;
    font-size: 32px;
    text-align: center;
`,k=i.div`
    font-weight: 400;
    font-size: 48px;
    text-align: center;
`,y=i.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(600px, 100vw), 1fr));
    gap: 40px;
`,R=({showThemeBg:t=!1})=>e.jsxs(w,{showThemeBg:t,children:[e.jsxs(v,{children:[e.jsx(f,{children:"Let's get in Touch!"}),e.jsx(k,{children:"Connect With Me"})]}),e.jsxs(y,{children:[e.jsx(n,{link:"mailto:contact@jhasuraj.com",title:"Email, Official",value:"contact@jhasuraj.com",icon:p}),e.jsx(n,{link:"mailto:jhasurajdev@gmail.com",title:"Email, Alternate",value:"jhasurajdev@gmail.com",icon:p}),e.jsx(n,{link:"https://linkedin.jhasuraj.com/",title:"LinkedIn",value:"linkedin.com/in/jhasuraj01",icon:j}),e.jsx(n,{link:"https://github.jhasuraj.com/",title:"GitHub",value:"github.com/jhasuraj01",icon:C})]})]}),E=t=>r.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z",fill:"var(--background-primary_theme)"})),S=t=>r.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},r.createElement("rect",{width:24,height:24,rx:12,fill:"var(--background-primary_theme)"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.88906 16.1109C7.78908 16.0109 7.73291 15.8753 7.73291 15.7339C7.73291 15.5924 7.78908 15.4568 7.88906 15.3568L14.9792 8.26666H10.4C10.2585 8.26666 10.1229 8.21047 10.0229 8.11045C9.92285 8.01043 9.86666 7.87478 9.86666 7.73333C9.86666 7.59188 9.92285 7.45623 10.0229 7.35621C10.1229 7.25619 10.2585 7.2 10.4 7.2H16.2667C16.4081 7.2 16.5438 7.25619 16.6438 7.35621C16.7438 7.45623 16.8 7.59188 16.8 7.73333V13.6C16.8 13.7414 16.7438 13.8771 16.6438 13.9771C16.5438 14.0771 16.4081 14.1333 16.2667 14.1333C16.1252 14.1333 15.9896 14.0771 15.8895 13.9771C15.7895 13.8771 15.7333 13.7414 15.7333 13.6V9.0208L8.64426 16.1109C8.59472 16.1606 8.53587 16.2 8.47107 16.2269C8.40628 16.2538 8.33681 16.2676 8.26666 16.2676C8.19651 16.2676 8.12705 16.2538 8.06225 16.2269C7.99746 16.2 7.9386 16.1606 7.88906 16.1109Z",fill:"var(--background-primary)"})),M=t=>r.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},r.createElement("rect",{width:24,height:24,rx:12,fill:"var(--background-primary_theme)"}),r.createElement("path",{d:"M6.6665 9.33333C6.6665 8.97971 6.80698 8.64057 7.05703 8.39052C7.30708 8.14048 7.64621 8 7.99983 8H11.9998C12.3535 8 12.6926 8.14048 12.9426 8.39052C13.1927 8.64057 13.3332 8.97971 13.3332 9.33333V14.6667C13.3332 15.0203 13.1927 15.3594 12.9426 15.6095C12.6926 15.8595 12.3535 16 11.9998 16H7.99983C7.64621 16 7.30708 15.8595 7.05703 15.6095C6.80698 15.3594 6.6665 15.0203 6.6665 14.6667V9.33333ZM14.6665 10.6667L16.1945 9.13867C16.2876 9.04527 16.4064 8.98161 16.5358 8.95575C16.6651 8.92988 16.7992 8.94297 16.9212 8.99337C17.0431 9.04376 17.1473 9.12918 17.2206 9.23883C17.294 9.34848 17.3331 9.47742 17.3332 9.60933V14.3907C17.3331 14.5226 17.294 14.6515 17.2206 14.7612C17.1473 14.8708 17.0431 14.9562 16.9212 15.0066C16.7992 15.057 16.6651 15.0701 16.5358 15.0442C16.4064 15.0184 16.2876 14.9547 16.1945 14.8613L14.6665 13.3333V10.6667Z",fill:"var(--background-primary)"})),L=i.a`
    display: flex;
    flex-direction: column;
    padding: 8px 0 0;
    gap: 16px;
    min-width: 300px;
    border-top: 2px solid var(--border-primary_theme);
`,_=i.div`
    display: flex;
    gap: 16px;
`,z=i.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex-grow: 1;
`,W=i.div`
    font-size: 24px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
`,V=i.div`
    font-size: 16px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
`,A=i.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
`,F=i.div`
    font-size: 14px;
    display: flex;
    padding: 8px 12px;
    color: var(--color-secondary_theme);
    background: var(--background-primary_theme);
    border-radius: 34px;
`,B=i.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,D=i.img`
    box-sizing: border-box;
    width: 100%;
    aspect-ratio: 3 / 2;
    object-fit: cover;
`,G=({title:t,subtitle:s,links:a,tags:o,thumbnail:l})=>e.jsxs(L,{href:a.project,target:"new",rel:"noopener noreferrer",children:[e.jsxs(_,{children:[e.jsxs(z,{children:[e.jsx(W,{children:t}),e.jsx(V,{children:s}),o?e.jsxs(A,{children:[" ",o.map(c=>e.jsx(F,{children:c},c))," "]}):e.jsx(e.Fragment,{})]}),e.jsxs(B,{children:[a.project&&e.jsx("a",{className:"hvr-buzz-out",href:a.project,target:"_blank",rel:"noopener noreferrer",children:e.jsx(S,{})}),a.github&&e.jsx("a",{className:"hvr-buzz-out",href:a.github,target:"_blank",rel:"noopener noreferrer",children:e.jsx(E,{})}),a.youtube&&e.jsx("a",{className:"hvr-buzz-out",href:a.youtube,target:"_blank",rel:"noopener noreferrer",children:e.jsx(M,{})})]})]}),e.jsx(D,{src:l,loading:"lazy"})]}),N=[{title:"Certifier Dapp - BlockChain",subtitle:"Web3 / Ethereum / Dapp",links:{github:"https://github.com/aachal01/certifier-dapp"},thumbnail:"https://miro.medium.com/max/1400/0*M-p2nZwJZYzwnDBc.png",tags:["truffle","solidity","react"]},{title:"FilePad: File Explorer & Editor",subtitle:"Web Frontend / Clean Architecture / PWA",links:{project:"https://jhasuraj.com/filepad/",github:"https://github.com/jhasuraj01/filepad"},thumbnail:"https://user-images.githubusercontent.com/44930179/239702956-c18f625e-5c26-496e-b7fa-5615d79ac96e.png",tags:["typescript","react","dsa"]},{title:"Medistore - Inventory",subtitle:"Full Stack / GCP / DBMS",links:{github:"https://github.com/jhasuraj01/medistore",project:"https://medistore.jhasuraj.com/"},thumbnail:"https://www.sosinventory.com/wp-content/uploads/2020/10/warehouse-management-software.png",tags:["graphql","firestore","react"]},{title:"DSA - NPM Package (Ts/Js)",subtitle:"Open Source / DSA / OOP",links:{project:"https://www.npmjs.com/package/@anorcle/dsa",github:"https://github.com/anorcle/dsa"},thumbnail:"https://images-na.ssl-images-amazon.com/images/I/51Nv6BP9YSL.jpg",tags:["typescript","jest","typedoc"]},{title:"Anorcle Notes - Cloud Project",subtitle:"Full Stack / Serverless / DBMS",links:{project:"https://notes.anorcle.com/"},thumbnail:"https://clickup.com/blog/wp-content/uploads/2020/01/note-taking.png",tags:["dynamodb","s3","lit"]},{title:"Online Sudoku Web Game",subtitle:"Web Frontend / DSA / Game",links:{project:"https://jhasuraj.com/sudoku/",github:"https://github.com/jhasuraj01/sudoku"},thumbnail:"https://t4.ftcdn.net/jpg/00/01/31/81/360_F_1318176_WoOuwog3nfY4wpCiaxLqjbzrEk7MNt.jpg",tags:["react","typescript","redux"]},{title:"College Event Certification",subtitle:"Web Backend / DBMS",links:{project:"https://eventspccoe.web.app/",youtube:"https://youtu.be/3Odx0EeYmmQ"},thumbnail:"https://admissions.cofc.edu/explore/campusvisits/events/header-events-02.jpg",tags:["firestore","firebase auth"]},{title:"CRA Template - Redux Typescript Router",subtitle:"Open Source / Front End",links:{project:"https://www.npmjs.com/package/cra-template-redux-typescript-router",github:"https://github.com/jhasuraj01/cra-template-redux-typescript-router"},thumbnail:"https://miro.medium.com/max/696/0*-hl5tR5sBHW-ME7d",tags:["typescript","react","router"]},{title:"Randomized Video Feedback Collection",subtitle:"Data Analysis / DBMS",links:{project:"https://eventspccoe.web.app/issac-phy-portal/"},thumbnail:"https://www.ubisecure.com/wp-content/uploads/2019/12/General-Election-piece.png",tags:["firestore","lit","spreedsheet"]},{title:"Randomized Maze Generator",subtitle:"Web Frontend / DSA",links:{project:"https://jhasuraj.com/maze/",github:"https://github.com/jhasuraj01/maze"},thumbnail:"https://miro.medium.com/max/1204/1*IilXELmcI0cq6Q-weNco3Q.png",tags:["typescript","NextJs","scss"]},{title:"Document Change Tracker - DocFlow",subtitle:"Front End / DSA",links:{project:"https://jhasuraj.com/docflow/",github:"https://github.com/jhasuraj01/docflow"},thumbnail:"https://www.docscorp.com/globalassets/aaimages/hero-images/blog/blg-hd-cd-beyond-redline.jpg",tags:["typescript","NextJs","scss"]},{title:"Linear Equation Solver 3.0",subtitle:"Web Frontend / Matrix Math",links:{project:"https://jhasuraj.com/les/",github:"https://github.com/jhasuraj01/les"},thumbnail:"https://www.wikihow.com/images/thumb/2/23/Graph-Linear-Equations-Step-1-Version-2.jpg/v4-460px-Graph-Linear-Equations-Step-1-Version-2.jpg",tags:["javascript","css","html"]},{title:"Password Generator - PWA",subtitle:"Web Frontend / PWA",links:{project:"https://jhasuraj.com/password-generator/",github:"https://github.com/jhasuraj01/password-generator"},thumbnail:"https://cdn.wethegeek.com/wp-content/uploads/2021/08/Best-Password-Generator-Apps-For-Android.jpg",tags:["javascript","scss"]},{title:"Notepad Web App - Text Editor",subtitle:"Web Frontend / Browser API",links:{project:"https://jhasuraj.com/notepad/",github:"https://github.com/jhasuraj01/notepad"},thumbnail:"https://as1.ftcdn.net/v2/jpg/01/83/63/40/1000_F_183634000_JYxLy40QgF19lhNoKGHlLDp8yByAkrXt.jpg",tags:["webpack","javascript","scss"]}];export{G as P,P as R,R as S,N as p};
