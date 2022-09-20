<div align="center">
Talent-Squad Backend challenge
</div>

### Project Description

Back-end challenge offered by [Talent Squad](https://barcelonadigitaltalent.com/talent-squad/) through the [NUWE](https://nuwe.io/dev) challenge platform.
API that simulates a job offer site where you can list, filter offers by type and in the case of companies create delete and edit all their fields.

### Used technologies

I have used GraphQL to test the improvements it offers with respect to the REST APIs, as email sending I have used Nodemailer, and for route authentication I have used Express jwt.

### How to Use the Project

1. Clone the repo
   ```sh
   git clone https://github.com/Da-zeros/Talent-Squad-Backend.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run it 
   ```js
   npm run dev;
   
To make the calls to the API I have used GraphiQl the interface that includes GraphQl, I have implemented a jwt for the authentication of the routes, but as there is no front-end that sends me this by request, if you uncomment the midleware isAuth the routes will not work as the route is protected.
   
<details>
  <summary>Queries and Mutate</summary>
   <ul>
   <li>Queries</li>
      <ol>
         <li><a href="#get-all-offers">Get all offers</a></li>
         <li><a href="#find-offer">Find offer</a></li>
      </ol>
   <li>Mutate</li>
      <ol>
         <li><a href="#create-offer">Create offer<a/></li>
         <li><a href="#delete-offer">Delete offer<a/></li>
         <li><a href="#update-offer">Update offer<a/></li>
         <li><a href="#subscribe">Subscribe<a/></li>
         <li><a href="#unsubscribe">Unsubscribe<a/></li>
      </ol>
</ul>
</details>

### Get all offers
```sh
query{
  getAllOffers
}
```
### Find offer
```sh
As a arg you can use : title, companyName, jobDescription, companyField, companyLocation, techSkills

query{
 findOffer(title:"Backend developer") 
}
```

### Create offer

mutation{
  createOffer(title:"",companyName:"",jobDescription:"",companyField:"",companyLocation:"", techSkills:[])
}

### Delete offer

mutation{
	deleteOffer(title:"")
}

### Update offer

You can update many arguments as you want

mutation{
  updateOffer(title:"",companyName:"",jobDescription:"",companyField:"",companyLocation:"", techSkills:[])
}

### Subscribe

mutation{
	suscribeOfferService(email:"")
}

### Unsubscribe

mutation{
	unSuscribeOfferService(email:"")
}

### How to Contribute to the Project

Any contribution or help to improve this challenge is welcome.

