const express = require("express");

const expressGraphQL = require("express-graphql").graphqlHTTP;
const cors = require('cors')


const app = express();


app.use(

  "/graphql",

  expressGraphQL({

    graphiql: true,

  }),
  cors()

);


const PORT = 5000;


app.listen(PORT, () => {

  console.log(`Server listening on http://localhost:${PORT}`);

});
