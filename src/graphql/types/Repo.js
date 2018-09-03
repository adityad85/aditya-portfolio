const Repo = `
  type Repo {
    name: String!
    description: String!
    technologies: [String!]
    github: String!
    website: String
  }

  type Query {
    repos: [Repo!]
  }
`;

export default Repo;
