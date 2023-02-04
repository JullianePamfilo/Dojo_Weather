console.log("page loading...")

function loadWeatherReport(element) {
    alert("Loading weather report...");
}

var unit = document.querySelector("#unit-choice").value;
var temps = document.getElementsByClassName("temps");

for (let i = 0; i < temps.length; i++) {
    console.log(temps[i].innerHTML)
}

function changeUnit(element) {
    unit = element.value;
    convertToFarenheit()
}

function convertToFarenheit() {
    if (unit == 'F')
        for (let i = 0; i < temps.length; i++) {
            temps[i].innerHTML = Math.trunc(Math.round(temps[i].innerHTML * 1.8 + 32));
        } else {
        for (let i = 0; i < temps.length; i++) {
            temps[i].innerHTML = Math.trunc(Math.round(temps[i].innerHTML - 32) * .5556);
        }
}
}



var cookiesNotice = document.querySelector("#cookies-notification");

function cookiesHide(cookiesNotice) {
    cookiesNotice.classList.add("hide");
}