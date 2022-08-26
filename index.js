const express = require("express");
const expressGraphQL = require("express-graphql").graphqlHTTP;
const cors = require("cors");
const schema = require("./schema");

const app = express();

app.use(
  "/graphql",
  expressGraphQL({
    graphiql: true,
    schema,
  }),
  cors()
);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
