import { mergeTypes } from 'merge-graphql-schemas';

import Query from './Query';
import Project from './Project';
import Repo from './Repo';
import Skills from './Skils';

const types = [
  Query,
  Project,
  Repo,
  Skills,
];

export default mergeTypes(types);
