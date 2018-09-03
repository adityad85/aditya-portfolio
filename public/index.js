!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("apollo-server-express")},function(e,t){e.exports=require("merge-graphql-schemas")},function(e,t){e.exports=require("morgan")},function(e,t){e.exports=require("compression")},function(e,t){e.exports=require("cors")},function(e,t){e.exports=require("helmet")},function(e,t){e.exports=require("dotenv")},function(e,t,n){e.exports=n(11)},function(e,t){e.exports=require("babel-polyfill")},function(e,t,n){"use strict";n.r(t);n(10);var i=n(1),r=n.n(i),o=n(2),a=n(3);const s=["\n  type Query {\n    name: String!\n    email: String!\n    age: Int!\n    github: String!\n    medium: String!\n    twitter: String!\n}","\n  type project {\n    name: String!\n    description: String!\n    technologies: [String!]\n    github: String!\n    website: String\n  }\n\n  type Query {\n    projects: [project!]\n  }\n","\n  type Repo {\n    name: String!\n    description: String!\n    technologies: [String!]\n    github: String!\n    website: String\n  }\n\n  type Query {\n    repos: [Repo!]\n  }\n","\n  type Skill {\n    name: String!\n  }\n\n  type Query {\n    skills: [Skill!]\n  }\n"];var c=Object(a.mergeTypes)(s);var p={name:()=>"Aditya Kumar Khare",email:()=>"aditya85d@gmail.com",age:()=>23,github:()=>"https://github.com/adityad85",medium:()=>"https://medium.com/@adityad85",twitter:()=>"https://twitter.com/adityad85",projects:()=>[{name:"Class Insights",description:"Dashboard for instructors to get feedback from students to increase the curriculum impact",technologies:["React","Redux","Express JS","Mongo","Jest","Puppeteer","Travis","Node"],github:"https://github.com/pesto-students/project-class-insights-client",website:"http://classinsights-app.herokuapp.com"},{name:"React Snake Game",description:"Build a snake game to recall my childhood dream of building it. Built it using ES6 Best practices and linters",technologies:["React"],github:"https://github.com/adityad85/react-snake-game",website:"https://adi-react-game.netlify.com/"},{name:"GraphQL Book List React App",description:"Simple React App to learn GraphQL and use React skills to build a SPA",technologies:["React","Webpack","Babel","Graphql"],github:"https://github.com/adityad85/graphql-client",website:"https://graphql-book-app.netlify.com"},{name:"College Attendance Portal",description:"App for teachers to directly mark attendance(CRUD supported) from the app and for students to view them",technologies:["Android","Parse Dashboard"],github:"https://github.com/adityad85/College-Attendance-Portal"},{name:"Pro-U",description:"An Experience sharing platform for students so that people don't end doing same things that others have already figured out",technologies:["Android","Parse Dashboard"],github:"https://github.com/adityad85/College-Attendance-Portal"},{name:"Library of Algorithms",description:"Collection of all the algorithms that I've learned and would be updating them as i learn more.",technologies:["C++"],github:"https://github.com/adityad85/Algorithms"},{name:"Game Cracker",description:"Crack Games like HQ Trivia and Loco by searching their questions within 1 sec on google. Uese OCR (Optical Character Recognition)",technologies:["Python","Tesseract","Google Cloud Vision"],github:"https://github.com/adityad85/Game-Cracker"}],repos:()=>[{name:"React BoilerPlate",description:"Set Up react boilerplate with webpack for bundling and babel for transpiling ",technologies:["React","WebPack","Babel"],github:"https://github.com/adityad85/react-boilerplate"},{name:"Node BoilerPlate",description:"Set Up Server boilerplate in node with webpack for bundling and babel for transpiling ",technologies:["React","WebPack","Babel"],github:"https://github.com/adityad85/node-boilerplate"},{name:"Coding Problems JavaScript",description:"All the problem are solved in javascript during the technical preparation",technologies:["JavaScript"],github:"https://github.com/adityad85/Coding-Problems-Javascript-"},{name:"React Counter App",description:"Learnt Basic use of React with redux in this app",technologies:["React","Redux"],github:"https://github.com/adityad85/Counter-Sample-App",website:"https://counter-clock.netlify.com/"}],skills:()=>[{name:"git"},{name:"MERN"},{name:"MongoDB"},{name:"Express"},{name:"React"},{name:"Redux"},{name:"NodeJS"},{name:"WebPack"},{name:"Jest"},{name:"Babel"},{name:"Travis"},{name:"JavaScript"},{name:"ESLint"},{name:"C++"},{name:"Algorithms"},{name:"Data Structures"},{name:"Netlify"},{name:"Heroku"},{name:"JSDoc"},{name:"Swagger Docs"},{name:"Continuous Deployment"},{name:"Continuous Integration"},{name:"Unit, Integration, End to End Testing"}]};const l=process.env.PORT||3e3;var u={PLAYGROUND_URL:"/",DEFAULT_QUERY:"\n  query {\n    name\n    email\n    age\n    github\n    medium\n    twitter\n    skills {\n      name\n    }\n    projects {\n      name\n      description\n      technologies\n      github\n      website\n    }\n    repos {\n      name\n      description\n      technologies\n      github\n      website\n    }\n  }\n",PORT:l,URL:"https://adityakumarkhare.netlify.com"},d=n(0),g=n.n(d),m=n(4),h=n.n(m),b=n(5),f=n.n(b),y=n(6),S=n.n(y),R=n(7),v=n.n(R);const k=r()();(e=>{e.use(S()()),e.use(v()()),e.use(h()("dev")),e.use(g.a.json()),e.use(g.a.urlencoded({extended:!1})),e.use(f()())})(k),k.get("/status",(e,t)=>{t.send({message:"It's Up"})});const{DEFAULT_QUERY:P,PLAYGROUND_URL:x,URL:w}=u,A={Query:p};new o.ApolloServer({typeDefs:c,resolvers:A,playground:{settings:{"editor.theme":"dark","editor.fontSize":12,"prettier.printWidth":80,"editor.cursorShape":"line"},tabs:[{endpoint:w,query:P}]}}).applyMiddleware({app:k,path:x});var C=k,O=n(8);n.n(O).a.config();var q={NODE_ENV:"production",PORT:process.env.PORT||3e3};const{PORT:U}=q;C.listen(U,()=>{console.log(`Server running on port ${U}`)})}]);