const PLAYGROUND_URL = '/';

const PORT = process.env.PORT || 3000;

const isProduction = process.env.NODE_ENV === 'production';

const URL = isProduction ? 'https://adityakumarkhare.netlify.com' : `http://localhost:${PORT}`;

const DEFAULT_QUERY = `
  query {
    name
    email
    age
    github
    medium
    twitter
    skills {
      name
    }
    projects {
      name
      description
      technologies
      github
      website
    }
    repos {
      name
      description
      technologies
      github
      website
    }
  }
`;

export default {
  PLAYGROUND_URL,
  DEFAULT_QUERY,
  PORT,
  URL,
};
