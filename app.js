const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql');
const connection=require("./connection/dbConnection")
connection()

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(3000, () => {
  console.log("server is up on port 3000")

})