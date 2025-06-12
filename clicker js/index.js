let pats = document.querySelector(`.pats-cost`)
let parsedPats = parseFloat(pats.innerHTML)


// upgrade 1
let PatPowerLevel = document.querySelector(`.pat-power-level`)


let PatPowerIncrease = document.querySelector(`.pat-power-increase`)
let parsedPatPowerIncrease = parseFloat(PatPowerIncrease.innerHTML)

let powerCost = document.querySelector(`.power-cost`)
let ParsedPowerCost = parseFloat(powerCost.innerHTML) 
// 

// upgrade 2
let AutoLevel = document.querySelector(`.auto-patter-level`)


let AutoIncrease = document.querySelector(`.auto-patter-increase`)
let parsedAutoIncrease = parseFloat(AutoIncrease.innerHTML)

let AutoCost = document.querySelector(`.auto-cost`)
let ParsedAutoCost = parseFloat(AutoCost.innerHTML) 
// 

let ppc = 1;
let pps = 0;


function addpats() {
    pats.innerHTML = Math.round(parsedPats += ppc)
}

function BuyPower() {
if (parsedPats >= ParsedPowerCost){

    pats.innerHTML = Math.round(parsedPats -= ParsedPowerCost)

    PatPowerLevel.innerHTML ++

    parsedPatPowerIncrease = parseFloat((parsedPatPowerIncrease * 1.03).toFixed(2))
    PatPowerIncrease.innerHTML = parsedPatPowerIncrease
    ppc += parsedPatPowerIncrease

    ParsedPowerCost *= 1.18;
    powerCost.innerHTML = Math.round(ParsedPowerCost)


}
}

function BuyAuto() {
if (parsedPats >= ParsedAutoCost){

    pats.innerHTML = Math.round(parsedPats -= ParsedAutoCost)

    AutoLevel.innerHTML ++

    parsedAutoIncrease = parseFloat((parsedAutoIncrease * 1.03).toFixed(2))
    AutoIncrease.innerHTML = parsedAutoIncrease
    pps += parsedAutoIncrease

    ParsedAutoCost *= 1.18;
    AutoCost.innerHTML = Math.round(ParsedAutoCost)


    }
}

setInterval(() => {
parsedPats += pps /10
pats.innerHTML = Math.round(parsedPats)
},100)