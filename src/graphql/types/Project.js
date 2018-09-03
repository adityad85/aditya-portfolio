const Project = `
  type project {
    name: String!
    description: String!
    technologies: [String!]
    github: String!
    website: String
  }

  type Query {
    projects: [project!]
  }
`;

export default Project;
