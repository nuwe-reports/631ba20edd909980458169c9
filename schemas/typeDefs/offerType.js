const graphql = require('graphql')
const {GraphQLObjectType,GraphQLString,GraphQLList,GraphQLBoolean} = graphql

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

const userType = new GraphQLObjectType({
    name:"User",
    fields:()=>({
        email:{ type:GraphQLString },
        suscribed:{ type:GraphQLBoolean}
    })
})

module.exports = { offerType, userType }