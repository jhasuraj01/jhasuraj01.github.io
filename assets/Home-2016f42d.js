import{r,i as m,o as w,a as k,s as n,L as u,j as e,u as L,b}from"./main-7ac49189.js";import{R as v,P as S,p as E,S as M}from"./projects-a64c4a5f.js";var I=function(t){r.useEffect(t,[])};const Z=I;var A=function(t){var o=r.useRef(t);o.current=t,Z(function(){return function(){return o.current()}})};const P=A;var R=function(t){var o=r.useRef(0),i=r.useState(t),a=i[0],s=i[1],c=r.useCallback(function(h){cancelAnimationFrame(o.current),o.current=requestAnimationFrame(function(){s(h)})},[]);return P(function(){cancelAnimationFrame(o.current)}),[a,c]};const T=R;var z=function(t,o){t===void 0&&(t=1/0),o===void 0&&(o=1/0);var i=T({width:m?window.innerWidth:t,height:m?window.innerHeight:o}),a=i[0],s=i[1];return r.useEffect(function(){if(m){var c=function(){s({width:window.innerWidth,height:window.innerHeight})};return w(window,"resize",c),function(){k(window,"resize",c)}}},[]),a};const y=z,p=[{duration:"Aug 2024 - Present",company:"Uber",role:"Software Engineer 1",description:"Contributing to Uber's internal developer tool, Slate, by empowering developers to run end-to-end tests in the production environment during the development phase, significantly boosting platform reliability and enhancing developer productivity.",location:"Bengaluru, Karnataka, India",skills:"React, Go, SQL",type:"Full Time"},{duration:"Jul 2024 - Aug 2024",company:"Barclays",role:"Technology Graduate Developer, BA3",description:"Completed Barclays Foundational Training. Interacted with Business Analysts, System Analysts, DevOps, and the Delivery Team. Studied the System Architecture of Barclays Partner Finance.",location:"Pune, Maharashtra, India",skills:"Software Engineering",type:"Full Time"},{duration:"Aug 2023 - Jun 2024",company:"Cypherock",role:"Full Stack Developer Intern",description:"Working with Cypherock X1 hardware wallet & adding new features in cySync Desktop App. Developed AI-powered automation tools for Lead Generation with 85% success rate.",location:"Singapore • Remote",skills:"TypeScript, React.js, Node.js, Blockchain",type:"Internship"},{duration:"Jun 2023 - Aug 2023",company:"Barclays",role:"Backend Developer Summer Intern",description:"Developed Synchronous and Asynchronous APIs using AWS Lambda, API Gateway, S3, SNS, SES, State Machine, Event Bridge, AWS X-Ray, AWS Cognito, Cloud Formation, DynamoDB, and Java Spring Boot. Implemented end-to-end traceability and logic to catch and notify errors in a live environment.",location:"Pune, Maharashtra, India",skills:"Amazon Web Services (AWS), Java Spring Boot",type:"Internship"},{duration:"Jan 2022 - May 2023",company:"CodeChef",role:"Educator",description:'I am working as an educator at CodeChef. My job in this role is to solve competitive programming problems and create video editorials to help beginners learn and understand basic math, data structures, and algorithms to develop problem-solving skills. I have helped thousands of participants by creating over 130+ video editorials for problems with difficulty up to "CodeChef Easy".',location:"India • Remote",skills:"Problem Solving, Communication, Teaching, Competitive Programming, Data Structures, Algorithms",type:"Part Time"},{duration:"Feb 2022 - Apr 2022",company:"CloudRocks pvt. ltd. (Cloudbloq)",role:"Software Engineer Intern",description:"During this internship, I worked with modern technologies like ReactJs & NodeJs. Majorly I had Enhanced User Authentication Flow and Implemented Analytic Viewer. I worked closely with senior developers and my mentor at CloudBloq to implement new features and fixed various bugs in the frontend and backend.",location:"India • Remote",skills:"Node.js, React.js, SCSS, React-Saga",type:"Internship"},{duration:"Jun 2021 - Dec 2021",company:"MythView",role:"Freelance Backend Engineer",description:"Implemented User Authentication System, Multi-Account (Personal & Community), Likes and infinitely nested comment on users post, News-Feed generation from followed accounts.",location:"India • Remote",skills:"Node.js, Express.js, Cloud Firestore, GraphQL, Cloud Storage, Stoplight Studio",type:"Freelance"}],B=n.section`
    background-color: var(--background-secondary_theme);
`,_=n.div`
    padding: 72px 0;
    font-weight: 700;
    font-size: 64px;
    text-align: center;

    @media (max-width: 650px) {
        font-size: max(10vw, 32px);
        padding: max(10vw, 32px) 0;
    }
`,D=n.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
    padding: 48px;
    padding-top: 0;

    @media (max-width: 500px) {
        padding: 16px;
        padding-top: 0;
    }

`,F=n.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 32px;
    gap: 16px;
    max-width: 1000px;
    background-color: var(--background-primary);
    border-bottom: 2px solid var(--color-primary_theme);
    border-radius: 8px;
`,W=n.div`
    display: flex;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;
`,$=n.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`,V=n.div`
    font-size: 24px;
`,G=n.div`
    font-size: 20px;
`,H=n.div`
    font-size: 16px;
`,J=n.div`
    font-size: 14px;
`,N=n(u)`
    align-self: flex-end;
    font-size: 16px;
    text-align: right;
    color: var(--color-primary_theme);
`,Q=({duration:t,company:o,role:i,description:a,location:s,link:c,skills:h})=>e.jsxs(F,{children:[e.jsxs(W,{children:[e.jsx("span",{children:t}),e.jsx("span",{children:s})]}),e.jsxs($,{children:[e.jsx(V,{children:o}),e.jsx(G,{children:i})]}),e.jsx(H,{children:a}),e.jsxs(J,{children:[e.jsx("b",{children:"Skills:"})," ",h," "]}),c&&e.jsx(N,{to:c,children:"Learn More"})]}),U=()=>e.jsxs(B,{children:[e.jsx(_,{children:"Experience"}),e.jsx(D,{children:p.map(t=>e.jsx(Q,{...t},t.company))})]}),q=t=>r.createElement("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},r.createElement("path",{d:"M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z",fill:"none"}),r.createElement("path",{d:"M21 31C16.7 32.4 16.7 28.5 15 28M27 33V29.5C27 28.5 27.1 28.1 26.5 27.5C29.3 27.2 32 26.1 32 21.5C31.9988 20.3049 31.5325 19.1573 30.7 18.3C31.0905 17.2619 31.0545 16.1116 30.6 15.1C30.6 15.1 29.5 14.8 27.1 16.4C25.0672 15.8705 22.9328 15.8705 20.9 16.4C18.5 14.8 17.4 15.1 17.4 15.1C16.9455 16.1116 16.9095 17.2619 17.3 18.3C16.4675 19.1573 16.0012 20.3049 16 21.5C16 26.1 18.7 27.2 21.5 27.5C20.9 28.1 20.9 28.7 21 29.5V33",stroke:"var(--background-primary_theme)",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Y=t=>r.createElement("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},r.createElement("path",{d:"M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z",fill:"none"}),r.createElement("path",{d:"M30 16H18C16.8954 16 16 16.8954 16 18V30C16 31.1046 16.8954 32 18 32H30C31.1046 32 32 31.1046 32 30V18C32 16.8954 31.1046 16 30 16Z",stroke:"var(--background-primary_theme)",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M20 23V28M20 20V20.01M24 28V23M28 28V25C28 24.4696 27.7893 23.9609 27.4142 23.5858C27.0391 23.2107 26.5304 23 26 23C25.4696 23 24.9609 23.2107 24.5858 23.5858C24.2107 23.9609 24 24.4696 24 25",stroke:"var(--background-primary_theme)",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),K=t=>r.createElement("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},r.createElement("path",{d:"M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z",fill:"none"}),r.createElement("path",{d:"M31 17H17C15.8954 17 15 17.8954 15 19V29C15 30.1046 15.8954 31 17 31H31C32.1046 31 33 30.1046 33 29V19C33 17.8954 32.1046 17 31 17Z",stroke:"var(--background-primary_theme)",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M15 19L24 25L33 19",stroke:"var(--background-primary_theme)",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),O=t=>r.createElement("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},r.createElement("path",{d:"M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z",fill:"none"}),r.createElement("path",{d:"M34 16.01C33 16.5 32.02 16.699 31 17C29.879 15.735 28.217 15.665 26.62 16.263C25.023 16.861 23.977 18.323 24 20V21C20.755 21.083 17.865 19.605 16 17C16 17 11.818 24.433 20 28C18.128 29.247 16.261 30.088 14 30C17.308 31.803 20.913 32.423 24.034 31.517C27.614 30.477 30.556 27.794 31.685 23.775C32.0218 22.5527 32.189 21.2899 32.182 20.022C32.18 19.773 33.692 17.25 34 16.009V16.01Z",stroke:"var(--background-primary_theme)",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),X="/assets/profile-fdeda934.webp",e1=n.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 32px;
    gap: 9px;
    border: 2px solid var(--border-secondary);
    border-radius: 16px;
`,t1=n.div`
    font-size: 18px;
    font-weight: 400;
    @media (max-width: 600px) {
        font-size: max(4vw, 16px);
    }
`,r1=n.div`
    font-size: 40px;
    text-align: center;
    color: var(--color-primary_theme);
`,d=({title:t,data:o})=>e.jsxs(e1,{children:[e.jsx(r1,{children:o}),e.jsx(t1,{children:t})]}),n1={profileLink:"https://leetcode.jhasuraj.com",problemsCount:481,maxContestRating:2001.6592754053825},o1={profileLink:"https://geeksforgeeks.jhasuraj.com",problemsCount:73},i1={profileLink:"https://codechef.jhasuraj.com",maxRating:1938,problemsCount:275,stars:"4★"},a1={profileLink:"https://codeforces.jhasuraj.com",maxRating:1449,problemsCount:130,rank:"specialist"},s1={profileLink:"https://interviewbit.jhasuraj.com"},l1={profileLink:"https://hackerearth.jhasuraj.com"},C={leetcode:n1,gfg:o1,codechef:i1,codeforces:a1,interviewbit:s1,hackerearth:l1},c1=[{platform:"LeetCode",problemsCount:C.leetcode.problemsCount,profileLink:C.leetcode.profileLink},{platform:"CodeChef",problemsCount:C.codechef.problemsCount,profileLink:C.codechef.profileLink},{platform:"GeeksForGeeks",problemsCount:C.gfg.problemsCount,profileLink:C.gfg.profileLink},{platform:"CodeForces",problemsCount:C.codeforces.problemsCount,profileLink:C.codeforces.profileLink},{platform:"InterviewBit",problemsCount:6,profileLink:C.interviewbit.profileLink+"/solved-problems"},{platform:"HackerEarth",problemsCount:8,profileLink:C.hackerearth.profileLink}],C1=()=>{let t=0;return c1.forEach(o=>t+=o.problemsCount),t-=t%10,t};function j(t,o){if(isNaN(t.getTime()))return"Invalid date format";if(t>o)return"Start date is in the future";let i=o.getFullYear()-t.getFullYear(),a=o.getMonth()-t.getMonth();return o.getDate()-t.getDate()<0&&(a-=1),a<0&&(i-=1,a+=12),i===0&&a===0?"~ 0":i===0?`${a} month${a!==1?"s":""}`:a===0?`${i} year${i!==1?"s":""}`:i<5?`${i} year${i!==1?"s":""} ${a} month${a!==1?"s":""}`:`${i} year${i!==1?"s":""}`}const d1=n.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 16px;
    
    @media (min-width: 1200px) {
        grid-template-columns: repeat(2, minmax(300px, 1fr));
    }
`,p1=()=>e.jsxs(d1,{children:[e.jsx(d,{title:"Software Engineering",data:j(new Date("Feb 3, 2019"),new Date)}),e.jsx(d,{title:"Total Companies",data:new Set(p.map(t=>t.company)).size.toString()}),e.jsx(d,{title:"DSA Problems Solved",data:`+${C1()}`}),e.jsx(d,{title:"Research Papers",data:"5"})]}),h1=["Engineer!","Learner!","Traveller!"],m1=n.section`
    display: flex;
    align-items: flex-start;

    @media (max-width: 1200px) {
        flex-direction: column;
        gap: 32px;
        padding-top: 40px;
    }
`,x1=n.div`
    position: sticky;
    top: 120px;
    flex: 1 2 45%;
    background-color: var(--background-secondary_theme);

    @media (max-width: 1200px) {
        flex: auto;
        width: calc(50% + min(200px, 40vw) + 24px);
        position: initial;
        top: initial;
    }
`,f1=n.div`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    flex: 1 1 55%;
    padding: 0 96px;
    gap: 32px;
    
    @media (max-width: 1300px) {
        padding: 0 48px;
    }

    @media (max-width: 1200px) {
        padding: 0 32px;
    }
`,g1=n.div`
    font-size: 48px;
    font-weight: 200;
    margin: 28px 0;

    @media (max-width: 600px){
        font-size: 36px;
    }

    @media (max-width: 400px){
        font-size: 28px;
    }
`,u1=n.span`
    color: var(--color-primary_theme);
`,v1=n.div`
    cursor: crosshair;
    user-select: none;
    span, strong {
        transition: all 150ms ease-in-out;
    }

    &:hover {
        span {
            opacity: 0.5;
        }
        strong {
            color: var(--color-primary_theme)
        }
    }
`,y1=n.div`
    display: flex;
    flex-direction: column;
    float: left;
    padding: 16px;
    & > * {
        transition: all 250ms ease-in;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
            transition: all 250ms ease-out;
            background-color: var(--background-primary);
            border-radius: 50%;
        }
    }
`,j1=n.img`
    position: relative;
    float: right;
    width: 350px;
    height: auto;
    max-width: 80vw;
    transform: translate3d(-5%, -5%, 0) scale3d(1.1, 1.1, 1);
`,w1=()=>{const{width:t}=y(),{themeName:o,toggleTheme:i}=L(),a=new Date("20 Aug, 2024"),s=new Date;return e.jsxs(m1,{children:[e.jsxs(x1,{children:[t>600&&e.jsxs(y1,{children:[e.jsx("a",{href:"mailto:contact@jhasuraj.com",target:"_blank",rel:"noopener noreferrer",children:e.jsx(K,{})}),e.jsx("a",{href:"https://linkedin.jhasuraj.com",target:"_blank",rel:"noopener noreferrer",children:e.jsx(Y,{})}),e.jsx("a",{href:"https://github.jhasuraj.com",target:"_blank",rel:"noopener noreferrer",children:e.jsx(q,{})}),e.jsx("a",{href:"https://twitter.jhasuraj.com",target:"_blank",rel:"noopener noreferrer",children:e.jsx(O,{})}),e.jsx(b,{duration:200,toggled:o==="dark",toggle:i,style:{aspectRatio:"1/1",fontSize:"24px",color:"var(--color-primary_theme)"}})]}),e.jsx(j1,{loading:"lazy",src:X,alt:"",width:1318,height:1957})]}),e.jsxs(f1,{children:[e.jsxs(g1,{children:[e.jsx("span",{children:"I am"})," ",e.jsx(u1,{children:e.jsx(v,{sentences:h1})})]}),e.jsxs(v1,{children:[e.jsx("span",{children:"I graduated with "}),e.jsx("strong",{children:"BTech. Information Technology "}),e.jsx("span",{children:"with Honors in "}),e.jsx("strong",{children:"Blockchain "}),e.jsx("span",{children:" Technology from Pimpri-Chinchwad College of Engineering, Pune. My final CGPA is "}),e.jsx("strong",{children:"9.11/10. "}),e.jsx("span",{children:"Currently, I am working at "}),e.jsxs("strong",{children:[p[0].company," "]}),e.jsx("span",{children:"as "}),e.jsxs("strong",{children:[p[0].role," "]}),e.jsx("span",{children:"with total "}),e.jsxs("strong",{children:[j(a,s)," "]}),e.jsx("span",{children:"of full-time experience. "}),e.jsx("span",{children:"I am an AI enthusiast and like to work on complex problems & high scale applications. I love to explore and generally feel excited to learn new things about anything, whether technology related or not."})]}),e.jsx(p1,{})]})]})},k1=t=>r.createElement("svg",{width:172,height:172,viewBox:"0 0 172 172",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},r.createElement("g",{clipPath:"url(#clip0_736_455)"},r.createElement("path",{d:"M144.713 43.2068C146.352 40.8499 147.122 37.8553 146.496 34.6756C144.911 26.6136 135.484 23.0526 128.892 27.5834C106.683 11.4103 75.7488 7.50358 48.6661 23.1172C-0.223175 51.3024 -0.223175 122.148 48.6661 150.333C97.5554 178.519 158.999 143.096 158.999 86.7254C158.999 70.005 153.593 55.1278 144.713 43.2068ZM51.4996 145.441C6.37087 119.423 6.37087 54.0274 51.4996 28.0101C76.3322 13.6937 104.673 17.1573 125.143 31.8372C122.205 37.6501 124.828 45.2702 131.619 47.5614C134.733 48.6119 137.848 48.247 140.434 46.9309C148.466 57.8715 153.345 71.4661 153.345 86.7254C153.345 138.76 96.6283 171.458 51.4996 145.441Z",fill:"var(--background-primary_theme)"}),r.createElement("circle",{cx:84.999,cy:87.2253,r:34,fill:"var(--background-primary_theme)"})),r.createElement("path",{d:"M114.085 131.125L112.654 130.78L114.265 124.396C114.314 124.183 114.421 124.027 114.586 123.928C114.76 123.824 114.949 123.799 115.153 123.853C115.367 123.902 115.523 124.009 115.622 124.174C115.72 124.339 115.745 124.528 115.696 124.742L114.085 131.125ZM115.256 134.197C115.062 134.328 114.864 134.379 114.662 134.348C114.464 134.302 114.299 134.181 114.167 133.987L108.043 124.937C107.911 124.742 107.864 124.549 107.901 124.356C107.941 124.149 108.058 123.979 108.253 123.848C108.447 123.716 108.643 123.674 108.842 123.72C109.043 123.751 109.21 123.863 109.341 124.058L115.466 133.108C115.597 133.303 115.643 133.503 115.603 133.711C115.566 133.903 115.45 134.065 115.256 134.197ZM119.942 130.929C119.878 131.14 119.752 131.296 119.563 131.398C119.39 131.503 119.197 131.523 118.987 131.46L114.046 129.954L114.382 128.452L119.434 129.979C119.644 130.042 119.797 130.164 119.893 130.344C119.992 130.509 120.008 130.704 119.942 130.929Z",fill:"var(--color-primary)"}),r.createElement("path",{d:"M101.932 140.102C101.11 140.332 100.324 140.352 99.5735 140.162C98.8305 139.96 98.1852 139.592 97.6376 139.058C97.0974 138.511 96.7142 137.831 96.4878 137.02C96.2556 136.188 96.2291 135.398 96.4082 134.65C96.5872 133.902 96.94 133.261 97.4664 132.727C97.99 132.182 98.6576 131.797 99.4693 131.57C100.076 131.401 100.663 131.365 101.233 131.461C101.799 131.546 102.347 131.764 102.877 132.115C103.067 132.239 103.165 132.394 103.173 132.58C103.18 132.767 103.11 132.952 102.963 133.137C102.848 133.28 102.698 133.361 102.515 133.379C102.329 133.386 102.144 133.338 101.96 133.234C101.307 132.841 100.606 132.748 99.8562 132.957C99.3322 133.104 98.9042 133.356 98.5723 133.714C98.2375 134.062 98.0173 134.484 97.9116 134.978C97.8059 135.473 97.8348 136.013 97.9981 136.598C98.1529 137.153 98.4034 137.615 98.7498 137.983C99.1065 138.349 99.5262 138.603 100.009 138.745C100.489 138.877 101.001 138.867 101.545 138.715C101.905 138.615 102.207 138.487 102.451 138.33C102.703 138.16 102.916 137.951 103.09 137.703C103.217 137.524 103.367 137.404 103.538 137.345C103.707 137.276 103.874 137.279 104.04 137.355C104.254 137.45 104.398 137.587 104.47 137.767C104.539 137.936 104.522 138.112 104.418 138.296C103.87 139.191 103.042 139.793 101.932 140.102Z",fill:"var(--color-primary)"}),r.createElement("path",{d:"M83.5017 142.384C82.6175 142.339 81.8387 142.113 81.1653 141.705C80.503 141.286 79.9917 140.737 79.6312 140.056C79.2818 139.366 79.1292 138.589 79.1731 137.726C79.2176 136.853 79.4378 136.095 79.8337 135.453C80.2407 134.801 80.7787 134.305 81.4475 133.965C82.1168 133.615 82.8723 133.461 83.7139 133.504C84.5448 133.546 85.249 133.769 85.8266 134.172C86.4047 134.565 86.8317 135.094 87.1075 135.759C87.3945 136.415 87.5166 137.163 87.4737 138.005C87.4634 138.207 87.3855 138.374 87.2399 138.506C87.0949 138.626 86.9159 138.681 86.7028 138.671L80.2632 138.342L80.3283 137.064L86.72 137.39L86.0421 137.804C86.0586 137.271 85.9762 136.791 85.795 136.365C85.6143 135.929 85.3437 135.579 84.9834 135.315C84.623 135.051 84.1765 134.905 83.6439 134.878C83.0367 134.847 82.5079 134.954 82.0575 135.198C81.6179 135.442 81.2742 135.793 81.0266 136.251C80.7796 136.697 80.6411 137.214 80.6113 137.799C80.5814 138.385 80.688 138.914 80.931 139.386C81.174 139.857 81.523 140.238 81.9782 140.529C82.4333 140.819 82.9645 140.979 83.5717 141.01C83.902 141.027 84.2405 140.986 84.5874 140.886C84.9454 140.776 85.2351 140.646 85.4563 140.497C85.622 140.388 85.7955 140.339 85.9766 140.348C86.1689 140.347 86.3313 140.409 86.4638 140.533C86.6367 140.702 86.7237 140.882 86.7245 141.075C86.7254 141.267 86.6318 141.428 86.4436 141.557C86.0668 141.826 85.6021 142.038 85.0496 142.191C84.5077 142.345 83.9917 142.409 83.5017 142.384Z",fill:"var(--color-primary)"}),r.createElement("path",{d:"M63.347 134.362C63.1276 134.279 62.9697 134.139 62.8732 133.943C62.7905 133.74 62.7909 133.529 62.8743 133.31L65.6042 126.131C65.6914 125.902 65.8314 125.744 66.024 125.657C66.2267 125.575 66.4377 125.575 66.657 125.658C66.8863 125.746 67.0442 125.886 67.1307 126.078C67.2172 126.271 67.2169 126.482 67.1297 126.711L64.3997 133.89C64.3163 134.109 64.1764 134.267 63.9799 134.363C63.7873 134.45 63.5763 134.45 63.347 134.362ZM68.356 139.691C68.1367 139.607 67.9788 139.468 67.8823 139.271C67.7996 139.068 67.7999 138.857 67.8834 138.638L69.2825 134.959C69.4986 134.391 69.5702 133.887 69.4973 133.449C69.4244 133.01 69.2408 132.638 68.9463 132.332C68.6656 132.02 68.2959 131.777 67.8373 131.602C67.4186 131.443 67.0075 131.384 66.6041 131.424C66.2006 131.465 65.8442 131.592 65.5349 131.805C65.2293 132.008 65.0064 132.294 64.8661 132.663L63.9239 132.305C64.1628 131.677 64.5247 131.176 65.0095 130.801C65.5082 130.42 66.0767 130.185 66.7151 130.097C67.3534 130.009 68.0016 130.09 68.6597 130.34C69.3476 130.602 69.9039 130.984 70.3285 131.488C70.7669 131.986 71.0326 132.578 71.1255 133.264C71.2285 133.953 71.1226 134.712 70.8079 135.539L69.4088 139.218C69.3254 139.438 69.1804 139.594 68.974 139.686C68.7814 139.773 68.5754 139.774 68.356 139.691ZM62.2095 137.353C61.9901 137.27 61.8322 137.13 61.7358 136.934C61.6531 136.731 61.6534 136.52 61.7368 136.301L64.2734 129.631C64.3606 129.401 64.5005 129.243 64.6932 129.157C64.8958 129.074 65.1068 129.075 65.3262 129.158C65.5555 129.245 65.7134 129.385 65.7999 129.578C65.8864 129.77 65.886 129.981 65.7988 130.211L63.2622 136.881C63.1788 137.1 63.0389 137.258 62.8424 137.354C62.6498 137.441 62.4388 137.441 62.2095 137.353Z",fill:"var(--color-primary)"}),r.createElement("path",{d:"M50.7027 130.227C50.037 129.693 49.5621 129.066 49.2781 128.346C49.0091 127.624 48.9316 126.886 49.0458 126.129C49.175 125.372 49.5031 124.664 50.0303 124.007C50.5708 123.333 51.1969 122.85 51.9086 122.56C52.6202 122.269 53.3466 122.181 54.0878 122.297C54.8357 122.405 55.5383 122.722 56.1957 123.249C56.6866 123.643 57.0593 124.099 57.3135 124.617C57.5745 125.127 57.7171 125.7 57.7413 126.334C57.7511 126.561 57.6826 126.732 57.5358 126.846C57.3891 126.961 57.1975 127.013 56.9609 127.001C56.7777 126.991 56.6254 126.916 56.5039 126.778C56.3891 126.631 56.3202 126.453 56.2971 126.243C56.2364 125.483 55.9023 124.86 55.2948 124.373C54.8704 124.032 54.4159 123.832 53.9312 123.771C53.4532 123.702 52.9825 123.769 52.5191 123.972C52.0558 124.175 51.6339 124.513 51.2536 124.988C50.8932 125.437 50.6644 125.91 50.5672 126.406C50.4784 126.909 50.5169 127.398 50.683 127.873C50.8557 128.34 51.1626 128.75 51.6036 129.103C51.8948 129.337 52.1753 129.507 52.4451 129.614C52.7298 129.719 53.0238 129.771 53.327 129.768C53.5469 129.766 53.7309 129.818 53.879 129.923C54.0338 130.02 54.1286 130.158 54.1634 130.336C54.2114 130.566 54.1837 130.762 54.0803 130.925C53.9835 131.08 53.8301 131.169 53.6202 131.192C52.5739 131.269 51.6014 130.948 50.7027 130.227Z",fill:"var(--color-primary)"}),r.createElement("path",{d:"M39.3171 106.086C39.4601 106.419 39.5093 106.763 39.4646 107.119C39.4157 107.465 39.2898 107.78 39.0869 108.065C38.8741 108.353 38.6011 108.569 38.2678 108.712C37.9247 108.859 37.5802 108.909 37.2342 108.86C36.8742 108.805 36.5569 108.674 36.2823 108.467C35.9937 108.254 35.78 107.986 35.6412 107.663C35.4982 107.329 35.456 106.988 35.5147 106.638C35.5636 106.292 35.6895 105.976 35.8925 105.692C36.0913 105.398 36.3573 105.179 36.6906 105.036C37.0141 104.897 37.3537 104.85 37.7094 104.895C38.0512 104.934 38.3713 105.058 38.6697 105.266C38.9541 105.469 39.1699 105.742 39.3171 106.086Z",fill:"var(--color-primary)"}),r.createElement("path",{d:"M39.4672 81.7758C39.3936 82.551 39.1364 83.2284 38.6956 83.808C38.2442 84.3865 37.6722 84.8251 36.9795 85.1236C36.2773 85.4105 35.5067 85.5141 34.6678 85.4344C33.8289 85.3547 33.0931 85.092 32.4604 84.6462C31.8287 84.1897 31.353 83.6142 31.0333 82.9195C30.7039 82.2132 30.5786 81.4459 30.6573 80.6176C30.7359 79.7893 31.003 79.0647 31.4584 78.4436C31.9032 77.8216 32.4783 77.3512 33.1836 77.0324C33.8899 76.7031 34.6625 76.5782 35.5014 76.6579L35.4424 77.2791C36.2812 77.3588 37.018 77.6109 37.6527 78.0355C38.2778 78.4484 38.7576 78.9815 39.092 79.6347C39.4158 80.2869 39.5408 81.0006 39.4672 81.7758ZM38.0639 81.3211C38.1154 80.7795 38.0338 80.2843 37.8193 79.8353C37.5942 79.3853 37.2702 79.017 36.8474 78.7305C36.414 78.4429 35.9159 78.2723 35.3531 78.2189C34.7797 78.1644 34.2584 78.2381 33.7892 78.44C33.3094 78.6409 32.9219 78.9416 32.6267 79.3421C32.3209 79.7417 32.1422 80.2122 32.0908 80.7538C32.0404 81.2847 32.1272 81.7805 32.3513 82.2411C32.5658 82.69 32.8893 83.0636 33.3217 83.3618C33.7445 83.6484 34.2426 83.819 34.816 83.8734C35.3788 83.9269 35.9001 83.8532 36.38 83.6523C36.8502 83.4398 37.2382 83.1338 37.544 82.7343C37.8402 82.3231 38.0135 81.852 38.0639 81.3211ZM39.7886 77.8848C39.7664 78.1184 39.6734 78.3078 39.5096 78.4529C39.3362 78.5865 39.1327 78.6421 38.8991 78.6199L36.462 78.3885L34.8024 77.9255L35.5014 76.6579L39.0534 76.9953C39.287 77.0174 39.4759 77.1157 39.62 77.2902C39.7546 77.4529 39.8107 77.6511 39.7886 77.8848Z",fill:"var(--color-primary)"}),r.createElement("path",{d:"M42.6769 68.1564C42.5091 68.5948 42.2409 68.9375 41.8722 69.1847C41.5035 69.4319 41.0787 69.572 40.5978 69.605C40.1069 69.6341 39.5925 69.5457 39.0546 69.3398L30.8957 66.2172C30.6766 66.1334 30.5239 65.995 30.4378 65.8021C30.3517 65.6093 30.3506 65.4033 30.4345 65.1841C30.5184 64.965 30.6568 64.8123 30.8496 64.7263C31.0425 64.6402 31.2485 64.6391 31.4676 64.7229L39.6265 67.8455C39.9951 67.9866 40.3256 68.0332 40.6181 67.9852C40.9105 67.9372 41.0987 67.8037 41.1826 67.5845L41.3256 67.2109C41.4018 67.0117 41.5326 66.879 41.7178 66.8128C41.9068 66.7367 42.1109 66.7406 42.3301 66.8245C42.5492 66.9083 42.6923 67.0716 42.7594 67.3143C42.8264 67.5569 42.8027 67.8277 42.6883 68.1265L42.6769 68.1564Z",fill:"var(--color-primary)"}),r.createElement("path",{d:"M47.2522 59.6109C46.9974 60.0051 46.6641 60.285 46.2522 60.4506C45.8403 60.6162 45.3958 60.6654 44.9185 60.5981C44.4322 60.5251 43.9472 60.3323 43.4635 60.0196L36.1269 55.277C35.9298 55.1496 35.8091 54.9827 35.7647 54.7762C35.7204 54.5697 35.7619 54.3679 35.8893 54.1708C36.0167 53.9738 36.1837 53.8531 36.3901 53.8087C36.5966 53.7644 36.7984 53.8059 36.9955 53.9333L44.3321 58.6759C44.6635 58.8901 44.9773 59.004 45.2733 59.0176C45.5694 59.0312 45.7811 58.9394 45.9085 58.7423L46.1257 58.4064C46.2415 58.2273 46.3968 58.1245 46.5917 58.098C46.7924 58.0627 46.9913 58.1087 47.1884 58.2361C47.3855 58.3635 47.4917 58.5528 47.5071 58.8041C47.5225 59.0553 47.4433 59.3153 47.2696 59.5841L47.2522 59.6109Z",fill:"var(--color-primary)"}),r.createElement("path",{d:"M61.7391 50.1272C61.534 50.2412 61.3227 50.2672 61.1051 50.2051C60.902 50.1471 60.7435 50.0156 60.6295 49.8105L57.0846 43.4335C56.6845 42.6918 56.489 41.934 56.4981 41.1601C56.5073 40.3862 56.7075 39.6707 57.099 39.0138C57.4853 38.3475 58.042 37.8123 58.7692 37.408C59.5057 36.9986 60.2589 36.8057 61.0287 36.8293C61.7933 36.8436 62.5066 37.0512 63.1687 37.452C63.8402 37.8476 64.3806 38.4136 64.7901 39.1501C65.1995 39.8867 65.409 40.6367 65.4185 41.4003C65.4321 42.1493 65.2645 42.8466 64.9155 43.4921C64.5613 44.1284 64.044 44.6356 63.3634 45.014C62.8133 45.3197 62.243 45.4903 61.6525 45.5257C61.0661 45.5465 60.5009 45.4519 59.9569 45.2417L62.0559 49.0175C62.1699 49.2226 62.1979 49.4267 62.14 49.6298C62.0872 49.8422 61.9536 50.008 61.7391 50.1272ZM62.384 43.9108C62.8595 43.6465 63.2215 43.2988 63.4701 42.8678C63.7134 42.4274 63.8335 41.9518 63.8302 41.4411C63.8311 40.9158 63.6943 40.4061 63.4196 39.912C63.1397 39.4085 62.7791 39.0232 62.3377 38.756C61.9004 38.4743 61.4331 38.3253 60.9358 38.3088C60.4333 38.283 59.9443 38.4023 59.4688 38.6666C59.0027 38.9258 58.6433 39.2781 58.3906 39.7237C58.1421 40.1547 58.022 40.6303 58.0304 41.1504C58.0337 41.6611 58.1752 42.1682 58.4551 42.6717C58.7297 43.1658 59.0857 43.5537 59.523 43.8354C59.9551 44.1078 60.4224 44.2568 60.9249 44.2826C61.4315 44.2939 61.9179 44.17 62.384 43.9108Z",fill:"var(--color-primary)"}),r.createElement("path",{d:"M74.0091 35.023C73.8851 34.3951 73.9264 33.8053 74.1328 33.2536C74.3476 32.6893 74.6877 32.209 75.1531 31.8128C75.6185 31.4165 76.1652 31.1564 76.7931 31.0325C77.421 30.9086 77.9073 30.9213 78.2521 31.0707C78.6053 31.2076 78.7731 31.4245 78.7556 31.7215C78.7532 31.8742 78.7131 32.0017 78.6354 32.104C78.5662 32.1938 78.476 32.2605 78.3651 32.3042C78.2541 32.3478 78.1275 32.3674 77.9852 32.3628C77.2886 32.359 76.6848 32.4672 76.1738 32.6877C75.6629 32.9081 75.2814 33.2063 75.0294 33.5822C74.7879 33.9561 74.7146 34.3837 74.8096 34.865L74.0091 35.023ZM75.0843 40.3884C74.8331 40.438 74.6271 40.4134 74.4663 40.3146C74.3034 40.2055 74.1961 40.02 74.1445 39.7584L72.7597 32.7418C72.7101 32.4906 72.74 32.2836 72.8491 32.1207C72.9583 31.9578 73.1385 31.8516 73.3897 31.802C73.6513 31.7504 73.8583 31.7802 74.0107 31.8914C74.1716 31.9902 74.2778 32.1704 74.3294 32.432L75.7142 39.4486C75.7638 39.6998 75.734 39.9068 75.6248 40.0697C75.526 40.2305 75.3459 40.3368 75.0843 40.3884Z",fill:"var(--color-primary)"}),r.createElement("path",{d:"M90.7228 39.4872C89.8637 39.3947 89.1254 39.1275 88.5079 38.6855C87.8914 38.233 87.4277 37.6573 87.1167 36.9587C86.8174 36.2506 86.714 35.4671 86.8065 34.608C86.9001 33.7384 87.1679 32.9948 87.6098 32.3772C88.0636 31.7501 88.6392 31.2864 89.3367 30.986C90.0353 30.675 90.8141 30.5657 91.6732 30.6582C92.5216 30.7495 93.254 31.0215 93.8705 31.474C94.488 31.916 94.9465 32.491 95.2457 33.1991C95.5568 33.8978 95.6655 34.6819 95.5718 35.5515C95.4794 36.4106 95.2116 37.1542 94.7685 37.7824C94.3265 38.4 93.7562 38.8643 93.0576 39.1753C92.3601 39.4757 91.5818 39.5797 90.7228 39.4872ZM90.8769 38.0555C91.4284 38.1148 91.9299 38.0401 92.3815 37.8312C92.8332 37.6223 93.1996 37.3077 93.4809 36.8874C93.7727 36.4683 93.9501 35.967 94.0129 35.3837C94.0756 34.8004 94.009 34.2729 93.8131 33.8013C93.6288 33.3201 93.3383 32.9294 92.9415 32.6293C92.5447 32.3291 92.0705 32.1493 91.519 32.0899C90.9676 32.0306 90.466 32.1053 90.0144 32.3142C89.5628 32.523 89.1905 32.8424 88.8975 33.2721C88.6056 33.6913 88.4283 34.1925 88.3655 34.7758C88.3027 35.3591 88.3693 35.8866 88.5653 36.3583C88.7612 36.83 89.0576 37.2159 89.4544 37.5161C89.8513 37.8163 90.3254 37.9961 90.8769 38.0555Z",fill:"var(--color-primary)"}),r.createElement("path",{d:"M98.5858 44.7181C98.3677 44.6315 98.2188 44.4863 98.1391 44.2824C98.0554 44.0885 98.0569 43.8825 98.1435 43.6644C98.2341 43.4364 98.3763 43.2806 98.5702 43.1969C98.7641 43.1133 98.9701 43.1147 99.1882 43.2014C99.5848 43.3588 99.9672 43.4074 100.335 43.3471C100.7 43.2967 101.025 43.1563 101.312 42.9258C101.608 42.6993 101.834 42.3927 101.987 42.0061L104.905 34.6602C104.995 34.4322 105.137 34.2764 105.331 34.1927C105.535 34.113 105.746 34.1164 105.964 34.2031C106.192 34.2936 106.348 34.4359 106.432 34.6298C106.515 34.8237 106.512 35.0346 106.421 35.2626L103.504 42.6085C103.232 43.2925 102.838 43.8362 102.322 44.2395C101.816 44.6468 101.241 44.8948 100.598 44.9836C99.9505 45.0822 99.2798 44.9937 98.5858 44.7181ZM106.49 32.8796C106.222 32.7733 106.027 32.5866 105.903 32.3195C105.794 32.0464 105.792 31.7761 105.898 31.5084C106.005 31.2407 106.189 31.0501 106.452 30.9366C106.729 30.8171 107.002 30.8105 107.269 30.9168C107.537 31.0231 107.726 31.2128 107.835 31.4858C107.959 31.7529 107.967 32.0203 107.861 32.288C107.755 32.5557 107.563 32.7492 107.286 32.8688C107.023 32.9823 106.758 32.9859 106.49 32.8796Z",fill:"var(--color-primary)"}),r.createElement("path",{d:"M114.011 48.7262C113.3 48.1985 112.778 47.5782 112.444 46.8652C112.124 46.15 112.003 45.4093 112.08 44.643C112.172 43.8746 112.476 43.1434 112.991 42.4496C113.512 41.7473 114.116 41.2386 114.801 40.9237C115.501 40.6066 116.224 40.492 116.969 40.58C117.72 40.6595 118.434 40.9503 119.111 41.4525C119.779 41.9483 120.242 42.5242 120.499 43.1799C120.762 43.8272 120.824 44.5042 120.685 45.211C120.56 45.9157 120.247 46.6063 119.745 47.283C119.624 47.4457 119.467 47.5414 119.273 47.5702C119.085 47.5903 118.906 47.5368 118.734 47.4097L113.557 43.5668L114.319 42.539L119.459 46.3532L118.665 46.322C118.974 45.8874 119.171 45.4426 119.257 44.9878C119.348 44.5244 119.317 44.083 119.164 43.6635C119.01 43.244 118.719 42.8753 118.291 42.5574C117.803 42.1951 117.303 41.9906 116.793 41.9441C116.292 41.904 115.811 42.0056 115.352 42.249C114.898 42.4838 114.497 42.8367 114.147 43.3078C113.798 43.7789 113.593 44.2781 113.534 44.8053C113.475 45.3326 113.554 45.8431 113.772 46.337C113.99 46.8308 114.343 47.2589 114.831 47.6213C115.097 47.8183 115.402 47.9715 115.746 48.0807C116.105 48.1877 116.417 48.2405 116.684 48.2392C116.882 48.2403 117.054 48.2949 117.2 48.403C117.361 48.5088 117.462 48.6502 117.503 48.8271C117.553 49.0636 117.525 49.2621 117.42 49.4227C117.314 49.5832 117.147 49.6651 116.918 49.6684C116.456 49.6835 115.952 49.6018 115.407 49.4232C114.87 49.2509 114.405 49.0186 114.011 48.7262Z",fill:"var(--color-primary)"}),r.createElement("path",{d:"M123.95 59.0657C123.455 58.3711 123.168 57.6388 123.09 56.8688C123.027 56.1012 123.153 55.369 123.469 54.6723C123.799 53.9781 124.307 53.3862 124.993 52.8967C125.696 52.3948 126.43 52.1006 127.193 52.0142C127.957 51.9277 128.68 52.0409 129.362 52.3536C130.053 52.6602 130.643 53.1564 131.132 53.8424C131.498 54.3546 131.732 54.8947 131.836 55.4627C131.949 56.0245 131.931 56.6141 131.782 57.2315C131.729 57.4522 131.617 57.5978 131.445 57.6684C131.272 57.739 131.074 57.7365 130.85 57.6607C130.676 57.6012 130.55 57.4883 130.47 57.3221C130.4 57.1497 130.382 56.9593 130.417 56.751C130.564 56.0034 130.412 55.3127 129.96 54.6788C129.644 54.236 129.261 53.9197 128.811 53.7298C128.37 53.5337 127.898 53.4702 127.397 53.5394C126.896 53.6087 126.398 53.8199 125.904 54.173C125.435 54.5076 125.086 54.9005 124.858 55.3518C124.636 55.8117 124.54 56.2928 124.571 56.795C124.61 57.291 124.794 57.7691 125.123 58.2293C125.339 58.5332 125.563 58.7732 125.794 58.9494C126.039 59.128 126.308 59.2571 126.601 59.3366C126.813 59.395 126.976 59.4948 127.09 59.6363C127.212 59.7715 127.266 59.9296 127.251 60.1106C127.235 60.345 127.155 60.5266 127.011 60.6555C126.876 60.7782 126.704 60.8221 126.496 60.7873C125.468 60.5773 124.62 60.0035 123.95 59.0657Z",fill:"var(--color-primary)"}),r.createElement("path",{d:"M130.162 71.3484C129.985 70.8454 129.951 70.3483 130.061 69.8573C130.181 69.3628 130.421 68.9218 130.782 68.5345C131.144 68.1473 131.601 67.8562 132.154 67.6613L139.353 65.1265C139.574 65.0485 139.78 65.0552 139.971 65.1465C140.161 65.2377 140.295 65.394 140.373 65.6154C140.451 65.8367 140.445 66.0426 140.353 66.2331C140.262 66.4235 140.106 66.5577 139.884 66.6357L132.686 69.1705C132.283 69.3122 131.985 69.5416 131.791 69.8586C131.598 70.1756 131.557 70.4951 131.671 70.817L131.852 71.3301C131.915 71.5112 131.898 71.6869 131.8 71.8573C131.705 72.0377 131.547 72.1668 131.325 72.2448C131.104 72.3227 130.893 72.301 130.692 72.1795C130.494 72.0682 130.349 71.8817 130.257 71.6201L130.162 71.3484ZM135.637 65.6545C135.563 65.4432 135.563 65.2509 135.638 65.0776C135.712 64.9043 135.84 64.7858 136.021 64.722C136.223 64.6512 136.407 64.6599 136.573 64.7482C136.74 64.8364 136.861 64.9862 136.935 65.1975L138.163 68.6837C138.237 68.895 138.237 69.0873 138.162 69.2606C138.088 69.4339 137.95 69.556 137.749 69.6268C137.567 69.6906 137.394 69.6783 137.227 69.5901C137.06 69.5018 136.939 69.352 136.865 69.1407L135.637 65.6545Z",fill:"var(--color-primary)"}),r.createElement("path",{d:"M132.271 82.7398C132.221 81.9949 132.286 81.2955 132.466 80.6418C132.657 79.9981 132.917 79.4887 133.244 79.1137C133.404 78.9425 133.591 78.8603 133.805 78.8672C134.03 78.8839 134.219 78.9781 134.369 79.1496C134.554 79.3509 134.637 79.5537 134.619 79.7581C134.612 79.9724 134.534 80.1594 134.384 80.3193C134.194 80.5139 134.022 80.8142 133.868 81.2203C133.725 81.6362 133.671 82.089 133.704 82.5785C133.746 83.1958 133.878 83.6572 134.102 83.9627C134.327 84.2789 134.599 84.4315 134.919 84.4205C135.239 84.4095 135.505 84.2364 135.718 83.9012C135.931 83.5767 136.084 82.9944 136.177 82.1542C136.317 81.0649 136.583 80.261 136.975 79.7426C137.369 79.2348 137.874 78.96 138.491 78.9181C139.034 78.8813 139.492 79.0106 139.864 79.306C140.248 79.6008 140.542 79.9924 140.746 80.4811C140.961 80.969 141.087 81.4843 141.123 82.0271C141.171 82.7295 141.102 83.3596 140.915 83.9175C140.728 84.4754 140.449 84.9274 140.077 85.2734C139.917 85.4339 139.74 85.5153 139.548 85.5177C139.366 85.5193 139.206 85.4393 139.067 85.2777C138.938 85.1154 138.887 84.9157 138.914 84.6787C138.941 84.4417 139.023 84.2383 139.161 84.0686C139.398 83.7852 139.555 83.4859 139.629 83.1708C139.704 82.8557 139.728 82.4959 139.701 82.0915C139.669 81.6233 139.562 81.2296 139.38 80.9105C139.199 80.6021 138.954 80.4583 138.645 80.4793C138.453 80.4923 138.281 80.5521 138.128 80.6587C137.986 80.7752 137.862 80.9868 137.754 81.2934C137.657 81.5994 137.57 82.0436 137.492 82.6262C137.386 83.4352 137.227 84.0768 137.013 84.5511C136.8 85.0359 136.535 85.3907 136.219 85.6152C135.913 85.8391 135.548 85.9655 135.122 85.9943C134.633 86.0275 134.182 85.9245 133.77 85.6851C133.359 85.4564 133.019 85.0946 132.75 84.5997C132.482 84.1154 132.323 83.4954 132.271 82.7398Z",fill:"var(--color-primary)"}),r.createElement("path",{d:"M132.49 105.762C132.635 105.429 132.853 105.157 133.143 104.946C133.429 104.745 133.744 104.621 134.091 104.575C134.447 104.532 134.791 104.583 135.123 104.728C135.466 104.878 135.737 105.095 135.938 105.381C136.145 105.68 136.267 106.001 136.304 106.343C136.347 106.699 136.297 107.039 136.157 107.361C136.012 107.694 135.791 107.958 135.496 108.155C135.21 108.357 134.894 108.481 134.548 108.527C134.198 108.584 133.856 108.54 133.524 108.395C133.201 108.254 132.934 108.038 132.723 107.749C132.518 107.473 132.389 107.155 132.337 106.794C132.29 106.448 132.341 106.104 132.49 105.762Z",fill:"var(--color-primary)"}),r.createElement("defs",null,r.createElement("clipPath",{id:"clip0_736_455"},r.createElement("rect",{width:147,height:147,fill:"var(--background-primary)",transform:"translate(11.999 13.2253)"})))),L1=n.div`

    font-size: max(10vw, 32px);
    padding: max(10vw, 32px) 0;
    text-align: center;

    @media (min-width: 744px) {
        width: 265px;
        height: 142px;
        font-size: 64px;
        font-weight: 700;
        padding: 32px 0;
        margin-left: 64px;
        text-align: left;
    }
`,b1=n.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
`,S1=n.div`
    position: relative;
    display: flex;
    justify-content: space-evenly;
    gap: 48px;
    padding: 0 48px;
    flex-wrap: wrap;
`,E1=n.div`
    flex: 1 0 300px;
    max-width: 400px;
    @media (min-width: 744px) {
        transform: translateY(${t=>t.top}%);
    }
`,M1=({projects:t})=>{const i=t.length-1,a=s=>-20*s-i*-20/2;return e.jsx(S1,{children:t.map((s,c)=>e.jsx(E1,{top:a(c),children:e.jsx(S,{...s})},s.title))})},I1=n(u)`
    position: relative;
    top: -28px;
    display: block;
    width: 171.48px;
    height: 171.48px;
    margin: 56px 0;
    margin-left: auto;
    margin-right: 20%;

    @media (min-width: 744px) {
        margin-right: 120px;
    }
`,Z1=()=>{const{width:t}=y(),o=t>1450?4:2,i=[],a=E.slice(0,4);for(let s=0;s<a.length/o;++s){i.push([]);for(let c=0;c<o;++c)i[s].push(a[s*o+c])}return e.jsxs("section",{children:[e.jsx(L1,{children:"Latest Projects"}),e.jsx(b1,{children:i.map(s=>e.jsx(M1,{projects:s},s[0].title))}),e.jsx(I1,{to:"projects",children:e.jsx(k1,{})})]})},A1=n.div`
    display: flex;
    flex-direction: column;
    padding: 72px 0;
    gap: 72px;
    ${({showThemeBg:t})=>t?"background-color: var(--background-secondary_theme);":""}
`,P1=n.div`
    font-weight: 700;
    font-size: 64px;
    text-align: center;

    @media (max-width: 650px) {
        font-size: max(10vw, 32px);
    }
`,R1=n.div`
    font-weight: 700;
    font-size: 24px;
    padding: 0 16px;
    color: var(--color-primary_theme);
    text-align: center;

    @media (max-width: 500px) {
        font-size: 20px;
    }
`,T1=n.div`
    display: flex;
    margin: 0 auto;

    @media (max-width: 900px) {
        flex-direction: column;
        gap: 32px;
    }
`,g=n.div`
    background-color: var(--border-secondary_theme);
    flex-basis: 2px;
    align-self: stretch;
`,x=n.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 300px;
    text-align: center;
`,f=n.div`
    font-weight: 500;
    font-size: 20px;
`,l=n.div`
    font-size: 16px;
`,z1=({showThemeBg:t=!1})=>e.jsxs(A1,{showThemeBg:t,children:[e.jsx(P1,{children:"Skills"}),e.jsx(R1,{children:"Data Structures and Algorithms, AWS Cloud, Typescript"}),e.jsxs(T1,{children:[e.jsxs(x,{children:[e.jsx(f,{children:"Programming Language"}),e.jsx(l,{children:"Go"}),e.jsx(l,{children:"C / C++"}),e.jsx(l,{children:"TypeScript"}),e.jsx(l,{children:"Python"}),e.jsx(l,{children:"Java"})]}),e.jsx(g,{}),e.jsxs(x,{children:[e.jsx(f,{children:"Devops & Cloud"}),e.jsx(l,{children:"AWS Serverless Framework"}),e.jsx(l,{children:"Google Cloud Platform"}),e.jsx(l,{children:"Docker / Kubernetes"}),e.jsx(l,{children:"Terraform / Ansible"}),e.jsx(l,{children:"Jenkins / Github Actions"})]}),e.jsx(g,{}),e.jsxs(x,{children:[e.jsx(f,{children:"Tech & Frameworks"}),e.jsx(l,{children:"Rest / GraphQL / gRPC"}),e.jsx(l,{children:"React / NodeJS"}),e.jsx(l,{children:"Java Spring Boot"}),e.jsx(l,{children:"SQL: MySQL / Postgresql"}),e.jsx(l,{children:"NoSQL: MongoDB / DynamoDB"})]})]})]}),B1=["Like - Photography!","Sports - Badminton!","Weekends - Cycling!"],_1=n.div`
    display: flex;
    padding: 100px 0;
    justify-content: center;
    align-content: center;
`,W1=()=>(r.useLayoutEffect(()=>{window.scrollTo({top:0,left:0,behavior:"instant"})},[]),e.jsxs(e.Fragment,{children:[e.jsx(w1,{}),e.jsx(_1,{children:e.jsx(v,{sentences:B1})}),e.jsx(U,{}),e.jsx(Z1,{}),e.jsx(z1,{showThemeBg:!0}),e.jsx(M,{})]}));export{W1 as default};
