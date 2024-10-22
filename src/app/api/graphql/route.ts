import { NextResponse } from 'next/server';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { ApolloServer } from 'apollo-server-micro';

// Define GraphQL schema
const typeDefs = `
  type Person {
    name: String
    gender: String
    height: String
  }

  type Query {
    people: [Person]
    person(id: Int!): Person
  }
`;

// Define resolvers for GraphQL queries
const resolvers = {
  Query: {
    people: async () => {
      const response = await fetch('https://swapi.dev/api/people/');
      const data = await response.json();
      // Map the API response to match the Person schema
      return data.results.map(({ name, gender, height }: { name: string, gender: string, height: string }) => ({
        name,
        gender,
        height,
      }));
    },
    person: async (_: any, { id }: { id: number }) => {
      const response = await fetch(`https://swapi.dev/api/people/${id}/`);
      const data = await response.json();
      // Return only the fields required by the schema
      return {
        name: data.name,
        gender: data.gender,
        height: data.height,
      };
    },
  },
};

// Create GraphQL schema
const schema = makeExecutableSchema({ typeDefs, resolvers });

// Initialize Apollo Server
const server = new ApolloServer({
  schema,
});

// Ensure Next.js handles the server response
const startServer = server.start();

export async function GET(req: Request) {
  await startServer;
  const res = new Response();
  await server.createHandler({ path: "/api/graphql" })(req as any, res);
  return res;
}

export async function POST(req: Request) {
  await startServer;
  const res = new Response();
  await server.createHandler({ path: "/api/graphql" })(req as any, res);
  return res;
}
