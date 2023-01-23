// console.log(document.URL)
// console.log(document.location)
// console.log(document.location.hostname)
// console.log(document.body.lastChild)
// console.log(document.body)

let str = document.getElementById('app')
console.log(str.innerHTML)
str.innerHTML = "SELAMOS"
console.log(str.innerHTML)



// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
let link = document.querySelector('div#que>ul#ullist>li#li3>a')
link.innerHTML = link.innerHTML + "ZURNA"
console.log(link)

link.style.color = 'red'
link.style.backgroundColor = 'blue'
link.classList.add('btn') // link elemanina btn class ini ekliyor.





