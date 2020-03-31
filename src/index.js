import './database';
import { GraphQLServer } from 'graphql-yoga';

import { config } from './config';
import { resolvers } from './graphql/resolvers';
import { typeDefs } from './graphql/typeDefs';

const {
	APP: { PORT },
} = config;

const server = new GraphQLServer({
	resolvers,
	typeDefs,
});

const configGraphql = { port: PORT, endpoint: '/api' };

server.start(configGraphql, ({ port }) => {
	console.log(`Server on: http://localhost:${port}`);
});
