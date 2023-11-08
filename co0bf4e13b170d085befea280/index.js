let btn = document.getElementById("btn")
let input = document.getElementById("input")
let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

btn.addEventListener("click", function() {
    let baseValue = input.value
    length.innerHTML = `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet`
    volume.innerHTML = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons`
    mass.innerHTML = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3)} pounds`
})