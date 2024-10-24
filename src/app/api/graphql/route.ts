import { NextResponse, NextRequest } from 'next/server';
import { ApolloServer } from 'apollo-server-micro';
import { makeExecutableSchema } from '@graphql-tools/schema';

// Define GraphQL schema
const typeDefs = `
  type Person {
    name: String
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
      try {
        const response = await fetch('https://swapi.dev/api/people/');
        const data = await response.json();
        // Map to return only name and height
        return data.results?.map(({ name, height }: { name: string, height: string }) => ({
          name,
          height,
        })) || [];
      } catch (error) {
        console.error("Error fetching people:", error);
        return [];
      }
    },
    person: async (_: any, { id }: { id: number }) => {
      try {
        const response = await fetch(`https://swapi.dev/api/people/${id}/`);
        const data = await response.json();
        // Return only name and height
        return {
          name: data.name,
          height: data.height,
        };
      } catch (error) {
        console.error(`Error fetching person with id ${id}:`, error);
        return null;
      }
    },
  },
};

// Create GraphQL schema
const schema = makeExecutableSchema({ typeDefs, resolvers });

// Initialize Apollo Server
const server = new ApolloServer({ schema });
const startServer = server.start();

// Next.js API Route Handlers
export async function GET(req: NextRequest) {
  await startServer;
  const res = NextResponse.next(); // Use Next.js's response helper
  await server.createHandler({ path: "/api/graphql" })(req as any, res as any);
  return res;
}

export async function POST(req: NextRequest) {
  await startServer;
  const res = NextResponse.next();
  await server.createHandler({ path: "/api/graphql" })(req as any, res as any);
  return res;
}
