const router = require('koa-router')()
const controllers = require('../controllers')
const { graphqlKoa, graphiqlKoa } = require('apollo-server-koa')
const { makeExecutableSchema } = require('graphql-tools')

const books = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    author: 'J.K. 渔夫'
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton'
  }
]

// The GraphQL schema in string form
const typeDefs = `
  type Query { books: [Book] }
  type Book { title: String, author: String }
`

// The resolvers
const resolvers = {
  Query: { books: () => books }
}

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

// 用户信息接口
router.get('/user', controllers.user.get)

router.post('/user', controllers.user.update)
router.post('/user/remove', controllers.user.remove)
router.post('/user/create', controllers.user.create)

router.post('/graphql', graphqlKoa({ schema }))
router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }))

module.exports = router

// GraphQL客户端查询
// const bookQuery = {
// 	query: `
// 	  {
// 	    books {
// 	      title
// 	    }
// 	  }
// 	`
// }

// axios.post('http://localhost:3000/graphql', JSON.stringify(bookQuery),{
// 	// 客户端跨域设置
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   }
// }).then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })
