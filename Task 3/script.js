function convertTemp() {
    const temp = document.getElementById("tempInput").value;
    const unit = document.getElementById("unit").value;
    const result = document.getElementById("result");

    if (temp === "") {
        result.innerHTML = "Please enter a value ❌";
        return;
    }

    let converted;

    switch (unit) {
        case "cToF":
            converted = (temp * 9/5) + 32;
            result.innerHTML = `${converted.toFixed(2)} °F`;
            break;

        case "fToC":
            converted = (temp - 32) * 5/9;
            result.innerHTML = `${converted.toFixed(2)} °C`;
            break;

        case "cToK":
            converted = Number(temp) + 273.15;
            result.innerHTML = `${converted.toFixed(2)} K`;
            break;

        case "kToC":
            converted = temp - 273.15;
            result.innerHTML = `${converted.toFixed(2)} °C`;
            break;

        case "fToK":
            converted = (temp - 32) * 5/9 + 273.15;
            result.innerHTML = `${converted.toFixed(2)} K`;
            break;

        case "kToF":
            converted = (temp - 273.15) * 9/5 + 32;
            result.innerHTML = `${converted.toFixed(2)} °F`;
            break;
    }
}