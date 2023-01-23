let items = [ 10,20,30,40]
console.log("items - defined",items)


// Array: add element to the end -> push
items.push(50)
console.log("50 is pushed to items", items)

// Array: add element to the beginning -> unshift
items.unshift(5)
console.log("5 is added to the beginning", items)

// Array: remove the last element -> pop
// it returns the last element
let lastItem = items.pop()
console.log("pop: removed the last item", items)
console.log("pop: returns the last item", lastItem)

// Array: remove the first item -> shift
let firstItem = items.shift()
console.log("shift: removed the first item", items)
console.log("shift: returns the first item", firstItem)

// Array: change element at the arbitrary location
items[0] = 31
console.log("changed first element by using: items[0]",items)

// Array: change last element of the array
items[items.length-1] = 1000
console.log("changed the last element by using: items[items.length-1]",items)

// Array: add elements to a given index
items.splice(2,0,"item1","item2")
console.log("add elements to a given index",items)

// Array: remove elements from the given index
let splicedItems = items.splice(2,2)
console.log("remove elements from a given index",items)
console.log("removed items retuned", splicedItems)

//array.splice(start,deleteCount,item1,item2,itemN)
//splice function removes the number of "deleteCount" elements 
// starting from the index "start" and add the rest of the 
// elements
// if delete count is 0 only inserts elements
// if no item is given, it only deletes elements.

let fruits = ["banana","cherry","peach","apricot","pear"]
console.log(fruits)

let names = ["george","smith","anna","carol","keith"]
console.log(names)

// arrays can be an element of another array
items.unshift(fruits)
items.push(names)
console.log(items)

items.pop()
items.shift()
console.log("items:",items)
items.unshift("lorem")
items.push("ipsum")

// indexof
console.log("items:",items)
console.log("indexof 'ipsum':",items.indexOf("ipsum"))

// array copy
let copyItems = items
console.log("copied with  copyItems = items")
copyItems.pop()

// we pop the element from copy item but items array has poped too.

console.log("items:",items)
console.log("copyItems:",copyItems)


// array copy with slice
copyItems = items.slice()
console.log("copied with  copyItems = items.slice()")

copyItems.pop()
copyItems.pop()
copyItems.pop()

console.log("items:",items)
console.log("copyItems:",copyItems)
// In ES6 and newer versions this can be used too
// copyItems = [...items] 

let allItems1 = [fruits,items, names]
console.log(allItems1)
fruits.pop() // this removes item from allItems1 too
console.log(allItems1) 


let allItems2 = [[...fruits],...items,[...names]]
console.log(allItems2)
fruits.pop() // this does not removes item from allItems1 too
console.log("fruits:",fruits)
console.log(allItems2) 

// please note that ... three dot operator, spreads array and adds elements of 
// spreaded array as an individual array
// ex:
// x = [1,2,3,4]
// y = ["a","b","c","d"]
// z = [x,y] -> soft copy, if x or y changes z also changes or vice versa
// z = [[1,2,3,4],["a","b","c","d"]]
//
// z = [...x,...y] -> hard copy, x, y and z are independent of each other
// z = [1,2,3,4,"a","b","c","d"]
//

//Array to string
console.log("names.toString:",names.toString())
console.log("names.join('---'):",names.join('---'))


