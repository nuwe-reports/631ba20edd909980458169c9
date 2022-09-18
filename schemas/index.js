const offerType = require("./typeDefs/offerType.js")
let data = require("../data")
const graphql = require("graphql");
const {
    GraphQLObjectType, 
    GraphQLSchema, 
    GraphQLString, 
    GraphQLList} = graphql


const rootQuery = new GraphQLObjectType({
    name:"rootQueryType",
    fields:{
        getAllOffers:{
            type: new GraphQLList(offerType),
            resolve(parent,args){
                return data
            }
        }
    }
})

const mutation = new GraphQLObjectType({
    name:"Mutation",
    fields:{
        createOffer:{
            type:offerType,
            args:{
                title:{ type:GraphQLString },
                companyName: { type:GraphQLString },
                jobDescription: { type:GraphQLString },
                techSkills: { type:GraphQLList(GraphQLString) }, 
                companyField: { type:GraphQLString },
                companyLocation: { type:GraphQLString },
            },
            resolve(parent, args){
                data.push({
                    title: args.title,
                    companyName: args.companyName,
                    jobDescription: args.jobDescription,
                    techSkills: args.techSkills, 
                    companyField: args.companyField,
                    companyLocation: args.companyLocation,
                })
                return args
            }
        },

        deleteOffer:{
            type:offerType,
            args:{
                title:{ type:GraphQLString },
            },
            resolve(parent, args){
                console.log("primera data",data.title)
                let e = data.filter(offer=>offer.title!= args.title)
                data =[ ...e]
                return data
            }
        },

        updateOffer:{
            type:offerType,
            args:{
                title:{ type:GraphQLString },
                companyName: { type:GraphQLString },
                jobDescription: { type:GraphQLString },
                techSkills: { type:GraphQLList(GraphQLString) }, 
                companyField: { type:GraphQLString },
                companyLocation: { type:GraphQLString },
            },
            resolve(parent, args){
                const key = ""
                if(args.title == undefined)console.log("title null")
                else if(args.title != undefined)console.log("title null")
                else if(args.title != undefined)console.log("title null")
                else if(args.title != undefined)console.log("title null")
                else if(args.title != undefined)console.log("title null")
                else if(args.title != undefined)console.log("title null")
            }
        }
    }
})

module.exports =  new GraphQLSchema({ query: rootQuery, mutation:mutation })