const {offerType, userType} = require("./typeDefs/offerType.js")
let data = require("../data")
let userData = require("../usersData.json")
const graphql = require("graphql");

const {transporter} = require('../config/mail.js');

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
        },
        findOffer:{
            type: new GraphQLList(offerType),
            args:{
                title:{ type:GraphQLString },
                companyName: { type:GraphQLString },
                jobDescription: { type:GraphQLString },
                techSkills: { type:GraphQLList(GraphQLString) }, 
                companyField: { type:GraphQLString },
                companyLocation: { type:GraphQLString },
            },
            resolve(parent,args){

                let offer = [] 
                
                if(args.title != undefined){

                    const offerTitle = args.title
                    offer = data.filter(offers=>offers.title === offerTitle )

                }else if(args.companyName != undefined){

                    const offerCompanyName = args.companyName
                    offer = data.filter(offers=>offers.companyName === offerCompanyName )

                }else if(args.jobDescription != undefined){
                    console.log(args)
                    const offerJobDescription = args.jobDescription
                    console.log(offerJobDescription)
                    offer = data.filter(offers=>offers.jobDescription.includes(offerJobDescription) )

                }else if(args.techSkills != undefined){

                    const offerTechSkills = args.techSkills
                    offer = data.filter(offers=>offers.techSkills.includes(offerTechSkills))

                }else if(args.companyField != undefined){

                    const offerCompanyField = args.companyField
                    offer = data.filter(offers=>offers.companyField === offerCompanyField )

                }else if(args.companyLocation != undefined){

                    const offerCompanyLocation = args.companyLocation
                    offer = data.filter(offers=>offers.companyLocation === offerCompanyLocation )

                }
                return offer
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
                newTitle:{type:GraphQLString},
                companyName: { type:GraphQLString },
                jobDescription: { type:GraphQLString },
                techSkills: { type:GraphQLList(GraphQLString) }, 
                companyField: { type:GraphQLString },
                companyLocation: { type:GraphQLString },
            },
            resolve(parent, args){
                
                let valueTitle = ""
                let valueName = ""
                let valueDesc = ""
                let valueSkills = []
                let valueField = ""
                let valueLocation = ""
                
                let offerToUpdate = []

                if(args.newTitle != undefined){
                    valueTitle = args.newTitle
                    offerToUpdate = data.map(offer=>offer.title == args.title?{...offer, 'title': valueTitle}:{...offer}) 
                    data = [...offerToUpdate]
                } 

                if(args.companyName != undefined){
                    valueName = args.companyName
                    offerToUpdate = data.map(offer=>offer.title == args.title?{...offer, 'companyName': valueName}:{...offer})  
                    data = [...offerToUpdate]
                } 
                if(args.jobDescription != undefined){
                    valueDesc = args.jobDescription
                    offerToUpdate = data.map(offer=>offer.title == args.title?{...offer, 'jobDescription': valueDesc}:{...offer})  
                     data = [...offerToUpdate]
                   
                } 
                if(args.techSkills != undefined){
                    valueSkills = args.techSkills
                    offerToUpdate = data.map(offer=>offer.title == args.title?{...offer, 'techSkills': valueSkills}:{...offer}) 
                    data = [...offerToUpdate]
                }
                if(args.companyField!= undefined){
                    valueField = args.companyField
                    offerToUpdate = data.map(offer=>offer.title == args.title?{...offer, 'companyField': valueField}:{...offer}) 
                    data = [...offerToUpdate]
                }
                if(args.companyLocation != undefined){
                    valueLocation = args.companyLocation
                    offerToUpdate = data.map(offer=>offer.title == args.title?{...offer, 'companyLocation': valueLocation}:{...offer}) 
                    data = [...offerToUpdate]
                }
                return args
            }
        },
        suscribeOfferService:{
            type: userType,
            args:{
                email:{type: GraphQLString}
            },
            resolve(parent,args){
               
                userToUpdate = userData.map(user=>user.email === args.email?{...user, 'suscribed': true }:{...user})  
                userData = [...userToUpdate]

                sendConfirmEmail = async  () =>{
                    await transporter.sendMail({
                        from: "dani@gmail.com",
                        to:  email,
                        subject: 'subscribed done',
                        html: `
                        <b>Welcome to our offer newsLetter!.</b>`
                    })
                }
                sendConfirmEmail()
              
                return args
            }
        },
        unSuscribeOfferService:{
            type:userType,
            args:{
                email:{type: GraphQLString}
            },
            resolve(parent,args){
                
                userToUpdate = userData.map(user=>user.email === args.email?{...user, 'suscribed': false }:{...user})  
                userData = [...userToUpdate]

                sendUnsuscribeEmail = async  () =>{
                    await transporter.sendMail({
                        from: "dani@gmail.com",
                        to:  email,
                        subject: 'unSubscribed done',
                        html: `
                        <b>See you soon !.</b>`
                    })
                }
                sendUnsuscribeEmail()
                
                return args
            }
        },

    }
})

module.exports =  new GraphQLSchema({ query: rootQuery, mutation:mutation })