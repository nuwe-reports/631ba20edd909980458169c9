const express = require('express')
const cors = require('cors')

const { isAuthenticated } = require("./midleware/jwt.middleware.js")

const { graphqlHTTP } = require('express-graphql')
const schema = require('./schemas/index.js')

const app = express()
const port = 4000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use(
    "/graphql",isAuthenticated,
    graphqlHTTP({
        schema,
        graphiql:true
    })
)

app.listen(port, () => {
    console.log(`Running a Server on http://localhost:${port}`)
})

