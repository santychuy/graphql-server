import { GraphQLServer } from 'graphql-yoga';
import path from 'path';

import resolvers from './graphql/resolvers';

const server = new GraphQLServer({
	resolvers,
	typeDefs: path.join(__dirname, 'graphql/schema.graphql'),
});

export default server;
