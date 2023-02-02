import axios from "axios"

export default async function getData(id) {

    const { data: user } = await axios("https://jsonplaceholder.typicode.com/users/" + id)
    const { data: posts } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + id)

    // console.log(user)
    // console.log(posts)

    return [user, posts]

}


// const data = getData(1)

// console.log(data)
// data.then(res=>console.log(res.posts))


