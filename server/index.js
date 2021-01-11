import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import typeDefs  from './schema'
import resolvers from './resolvers'

const PORT = process.env.PORT || 8500
const app = express()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true
})

server.applyMiddleware({ app })

app.get('/', (req, res) => {
  res.send({ hello: 'there!' })
})

app.listen(PORT, () =>
  console.log(`Listening fdsfd at http://localhost:${PORT}/graphql`)
)