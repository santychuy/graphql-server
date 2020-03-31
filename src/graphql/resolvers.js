import {
	getUsers,
	createUser,
	findUser,
	deleteUser,
} from '../controllers/users.controller';

export const resolvers = {
	Query: {
		getUsers,
		findUser,
	},
	Mutation: {
		createUser,
		deleteUser,
	},
};
