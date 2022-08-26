GraphQL REST API with Express
==================================

This is a straightforward get started for building REST APIs with GraphQL and Express.


- GraphQL HTTP Server Middleware [express-graphql](https://github.com/graphql/express-graphql)
- Json-server to store and expose the data [json-server](https://github.com/typicode/json-server)
- Fetch by AXIOS [Axios](https://github.com/axios/axios)
- CORS support via [cors](https://github.com/troygoode/node-cors)
- Hot reload with [Nodemon](https://github.com/remy/nodemon)


Get the project
---------------

```sh
# clone it
git clone https://github.com/BBanshy/graphql-express
cd graphql-express

# Install dependencies
npm install

```
Launch it !
---------------
- You need two terminal windows

```sh
# Start development live-reload server
npm start

# Start the json-server for the storage
npm run json:server

```

Endpoints:
---------------


```sh

# GraphQL endpoints
http://localhost:5000/graphql

# A.P.I.resources
Resources:
  http://localhost:3000/

  http://localhost:3000/users
  http://localhost:3000/companies
```


Mutation example:
---------------
- You can see all the mutations on the json-server [home page](http://localhost:3000)

```sh
# addUser mutation

mutation {
  addUser(firstName: "John", age: 20) {
    id
    firstName
    age
  }
}
```

