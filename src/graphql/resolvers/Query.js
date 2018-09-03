const name = () => (
  'Aditya Kumar Khare'
);

const email = () => (
  'aditya85d@gmail.com'
);

const age = () => (
  23
);

const github = () => (
  'https://github.com/adityad85'
);

const medium = () => (
  'https://medium.com/@adityad85'
);

const twitter = () => (
  'https://twitter.com/adityad85'
);

const projects = () => (
  [
    {
      name: 'Class Insights',
      description: 'Dashboard for instructors to get feedback from students to increase the curriculum impact',
      technologies: [
        'React',
        'Redux',
        'Express JS',
        'Mongo',
        'Jest',
        'Puppeteer',
        'Travis',
        'Node',
      ],
      github: 'https://github.com/pesto-students/project-class-insights-client',
      website: 'http://classinsights-app.herokuapp.com',
    },
    {
      name: 'React Snake Game',
      description: 'Build a snake game to recall my childhood dream of building it. Built it using ES6 Best practices and linters',
      technologies: [
        'React',
      ],
      github: 'https://github.com/adityad85/react-snake-game',
      website: 'https://adi-react-game.netlify.com/',
    },
    {
      name: 'GraphQL Book List React App',
      description: 'Simple React App to learn GraphQL and use React skills to build a SPA',
      technologies: [
        'React',
        'Webpack',
        'Babel',
        'Graphql',
      ],
      github: 'https://github.com/adityad85/graphql-client',
      website: 'https://graphql-book-app.netlify.com',
    },
    {
      name: 'College Attendance Portal',
      description: 'App for teachers to directly mark attendance(CRUD supported) from the app and for students to view them',
      technologies: [
        'Android',
        'Parse Dashboard',
      ],
      github: 'https://github.com/adityad85/College-Attendance-Portal',
    },
    {
      name: 'Pro-U',
      description: 'An Experience sharing platform for students so that people don\'t end doing same things that others have already figured out',
      technologies: [
        'Android',
        'Parse Dashboard',
      ],
      github: 'https://github.com/adityad85/College-Attendance-Portal',
    },
    {
      name: 'Library of Algorithms',
      description: 'Collection of all the algorithms that I\'ve learned and would be updating them as i learn more.',
      technologies: [
        'C++',
      ],
      github: 'https://github.com/adityad85/Algorithms',
    },
    {
      name: 'Game Cracker',
      description: 'Crack Games like HQ Trivia and Loco by searching their questions within 1 sec on google. Uese OCR (Optical Character Recognition)',
      technologies: [
        'Python',
        'Tesseract',
        'Google Cloud Vision',
      ],
      github: 'https://github.com/adityad85/Game-Cracker',
    },
  ]
);

const repos = () => (
  [
    {
      name: 'React BoilerPlate',
      description: 'Set Up react boilerplate with webpack for bundling and babel for transpiling ',
      technologies: [
        'React',
        'WebPack',
        'Babel',
      ],
      github: 'https://github.com/adityad85/react-boilerplate',
    },
    {
      name: 'Node BoilerPlate',
      description: 'Set Up Server boilerplate in node with webpack for bundling and babel for transpiling ',
      technologies: [
        'React',
        'WebPack',
        'Babel',
      ],
      github: 'https://github.com/adityad85/node-boilerplate',
    },
    {
      name: 'Coding Problems JavaScript',
      description: 'All the problem are solved in javascript during the technical preparation',
      technologies: [
        'JavaScript',
      ],
      github: 'https://github.com/adityad85/Coding-Problems-Javascript-',
    },
    {
      name: 'React Counter App',
      description: 'Learnt Basic use of React with redux in this app',
      technologies: [
        'React',
        'Redux',
      ],
      github: 'https://github.com/adityad85/Counter-Sample-App',
      website: 'https://counter-clock.netlify.com/',
    },
  ]
);

const skills = () => (
  [
    { name: 'git' },
    { name: 'MERN' },
    { name: 'MongoDB' },
    { name: 'Express' },
    { name: 'React' },
    { name: 'Redux' },
    { name: 'NodeJS' },
    { name: 'WebPack' },
    { name: 'Jest' },
    { name: 'Babel' },
    { name: 'Travis' },
    { name: 'JavaScript' },
    { name: 'ESLint' },
    { name: 'C++' },
    { name: 'Algorithms' },
    { name: 'Data Structures' },
    { name: 'Netlify' },
    { name: 'Heroku' },
    { name: 'JSDoc' },
    { name: 'Swagger Docs' },
    { name: 'Continuous Deployment' },
    { name: 'Continuous Integration' },
    { name: 'Unit, Integration, End to End Testing' },
  ]
);

export default {
  name,
  email,
  age,
  github,
  medium,
  twitter,
  projects,
  repos,
  skills,
};
