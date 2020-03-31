import './database';
import { GraphQLServer } from 'graphql-yoga';
import path from 'path';

import { config } from './config';
import { resolvers } from './graphql/resolvers';

const {
	APP: { PORT },
} = config;

const server = new GraphQLServer({
	resolvers,
	typeDefs: path.join(__dirname, 'graphql/schema.graphql'),
});

const configGraphql = { port: PORT, endpoint: '/api' };

server.start(configGraphql, ({ port }) => {
	console.log(`Server on: http://localhost:${port}`);
});
