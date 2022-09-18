const graphql = require('graphql')
const {GraphQLObjectType,GraphQLString,GraphQLList} = graphql

const offerType = new GraphQLObjectType({
    name:"Offer",
    fields:()=>({
        title:{ type:GraphQLString },
        companyName: { type:GraphQLString },
        jobDescription: { type:GraphQLString },
        techSkills: { type:GraphQLList(GraphQLString) }, 
        companyField: { type:GraphQLString },
        companyLocation: { type:GraphQLString },
    })
})

module.exports = offerType 