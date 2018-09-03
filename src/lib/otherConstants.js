const PLAYGROUND_URL = '/';

const PORT = process.env.PORT || 3000;

const isProduction = process.env.NODE_ENV === 'production';

const URL = isProduction ? 'https://adityad85.now.sh' : `http://localhost:${PORT}`;

const DEFAULT_QUERY = `
  query {
    name
    email
    age
    github
    medium
    twitter
  }
`;

export default {
  PLAYGROUND_URL,
  DEFAULT_QUERY,
  PORT,
  URL,
};
