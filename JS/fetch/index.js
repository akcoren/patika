
fetch('https://dummyjson.com/products/1')
    .then(res => res.json())
    .then(json => console.log(json))

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))


// Below one prints a Promise
fetch('https://dummyjson.com/products/1')
    .then(res => console.log("resJSON", res.json()))


// Below one prints a Response
fetch('https://dummyjson.com/products/1')
    .then(res => console.log("onlyRes", res))


console.log("onlyFetch", fetch('https://dummyjson.com/products/1'))



fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((json) => json.forEach((item) => console.log(item.email)))
    .catch((err) => console.log(err))

    
