// console.log(fetch("https:jsonplaceholder.typicode.com/users"))


// fetch("https:jsonplaceholder.typicode.com/users")
//   .then(res => res.json())
//   .then(json => console.log(json))

// fetch("https:jsonplaceholder.typicode.com/users")
//   .then(res => console.log(typeof(res)))   // object


// console.log(typeof(fetch("https:jsonplaceholder.typicode.com/users"))) // object

fetch("https:jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
        console.log(typeof (data))
    })



/* The fetch() method takes one mandatory argument,
  the path to the resource you want to fetch. 
  It returns a Promise that resolves to the Response to 
  that request — as soon as the server responds with 
  headers — even if the server response is an 
  HTTP error status. */


/* Response is a interface of Fetch API.
Response.json() is a method of Response which returns a Promise 
that resolves to a JavaScript object*/

/* A Promise is an object representing the eventual completion or
failure of an asynchronous operation. Since most people are
 consumers of already-created promises, this guide will explain 
 consumption of returned promises before explaining how to create them. (MDN docs)  */





