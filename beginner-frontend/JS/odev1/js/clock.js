let userName = prompt('Please, enter your name:')
document.querySelector("#myName").innerHTML = userName


function showTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    // console.log("zurna")
    document.querySelector("#myClock").innerHTML = h + ":" + m + ":" + s;
    // console.log(document.querySelector("#myClock"))
    setTimeout(showTime, 1000);

}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}


showTime()