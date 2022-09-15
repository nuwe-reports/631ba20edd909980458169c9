import express from 'express'
import cors from 'cors'
import { data } from './data.js'

import { graphqlHTTP } from 'express-graphql'
import { makeExecutableSchema } from '@graphql-tools/schema'

const app = express()
const port = 4000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/',(req,res) =>{
    res.send(data)
})

app.listen(port, () => {
    console.log(`Running a Server on http://localhost:${port}`)
})

