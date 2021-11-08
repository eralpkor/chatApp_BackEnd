import { GraphQLServer, PubSub } from "graphql-yoga";
import db from "./db";
import { resolvers, fragmentReplacements } from "./resolvers";
import prisma from "./prisma";

const pubsub = new PubSub();

// Resolvers
const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context(request) {
    // console.log(request.request.headers)
    return {
      db,
      pubsub,
      prisma,
      request,
    };
  },
  fragmentReplacements,
});

server.start(() => {
  console.log("Server started at port: ", server.options.port); // by default port 4000
});

// prisma at port 4466
