import { Prisma } from 'prisma-binding';
import { fragmentReplacements } from './resolvers';

const prisma = new Prisma({ 
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'http://localhost:4466',
  secret: 'thisissecret',
  fragmentReplacements
});

export { prisma as default };
