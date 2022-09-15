const graphql = require('graphql')
const {GraphQLObjectType,GraphQLString} = graphql

const OfferType = new GraphQLObjectType({
    name:'Offer',
    fields:()=>({
        title:{ type:GraphQLString },
        companyName: { type:GraphQLString },
        jobDescription: { type:GraphQLString },
        techSkills: { type:GraphQLString }, 
        companyField: { type:GraphQLString },
        companyLocation: { type:GraphQLString },
    })
})

module.export = OfferType 