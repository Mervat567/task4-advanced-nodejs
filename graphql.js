const { GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLString, GraphQLInt } = require('graphql');
const { addUser, getUser } = require('./controllers/userController');
const { addBook, getBooksByUserId } = require('./controllers/bookController');

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    address: { type: GraphQLString },
  },
});

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    title: { type: GraphQLString },
    numOfPages: { type: GraphQLInt },
    userId: { type: GraphQLString },
  },
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve: (_, { id }) => getUser(id),
    },
    books: {
      type: new GraphQLList(BookType),
      args: { userId: { type: GraphQLString } },
      resolve: (_, { userId }) => getBooksByUserId(userId),
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        address: { type: GraphQLString },
      },
      resolve: (_, args) => addUser(args),
    },
    addBook: {
      type: BookType,
      args: {
        name: { type: GraphQLString },
        title: { type: GraphQLString },
        numOfPages: { type: GraphQLInt },
        userId: { type: GraphQLString },
      },
      resolve: (_, args) => addBook(args),
    },
  },
});

const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});

module.exports = schema;