// footer content for dates modified and copyright year
const today = new Date();
currentyear.innerHTML = today.getFullYear();
lastmodified.innerHTML = document.lastModified;

// get windchill
const temp = 5;
const wind = 13;
function windChill(temp, wind) {
    if (temp <= 10 && wind > 4.8) {
        return Math.round(13.12 + 0.6215 * temp - (11.37 * wind**0.16) + 0.3965*temp*(wind**0.16)) + '°C';
    }
    else {
        return "N/A";
    }
}

document.getElementById("windChill").innerHTML = windChill(temp, wind);