'use strict'
const date = new Date();

let timeId = null;

function printTime(){
    const date = new Date();
    const hh = date.getHours();
    const mm = date.getMinutes();
    const ss = date.getSeconds();

    document.getElementById("result").innerHTML = hh + " : " + mm + " : " + ss;
}


function gotime() {
    timeId = setInterval(printTime,1000);
    si = null;
}


function stoptime(){
    clearInterval(timeId);
    clearInterval(si);
}

const si = setInterval(printTime,1000);