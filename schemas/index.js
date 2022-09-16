const OfferType = require("./typeDefs/offerType")
const offerData = require("../data")
const graphql = require('graphql')
const {
    GraphQLObjectType, 
    GraphQLSchema, 
    GraphQLInt, 
    GraphQLString, 
    GraphQLList} = graphql


const rootQuery = new GraphQLObjectType({
    name:"rootQueryType",
    fields:{
        getAllOffers:{
            type: new GraphQLList(OfferType),
            resolve(parent,args){
                return offerData
            }
        }
    }

})

const mutation = new GraphQLObjectType({
    name:"Mutation",
    fields:{
        createOffer:{
            type:OfferType,
            arg:{
                title:{ type:GraphQLString },
                companyName: { type:GraphQLString },
                jobDescription: { type:GraphQLString },
                techSkills: { type:GraphQLString }, 
                companyField: { type:GraphQLString },
                companyLocation: { type:GraphQLString },
            },
            resolve(parent, args){
                
                offerData.push({
                    id: offerData.length + 1,
                    title: args.title,
                    companyName: args.companyName,
                    jobDescription: args.jobDescription,
                    techSkills: args.jobDescription, 
                    companyField: args.companyField,
                    companyLocation: args.companyLocation,
                })
                return args
            }
        }
    }

})

module.exports =  new GraphQLSchema({ query: rootQuery, mutation:mutation })