
let kelvinConverter = (kelvin) =>{
    let farenheight = Math.floor((kelvin - 273.15) * 9/5 +32);
    return farenheight;
 }

class Ui{
    constructor(myLocation){
        this.city = myLocation.name;
        this.state = myLocation.state;
    }
    newUi(dataObject){
        let tempK = dataObject.main.temp;
        let feelsLikeK = dataObject.main.feels_like;
        let minK = dataObject.main.temp_min;
        let maxK = dataObject.main.temp_max;
        let humidity = dataObject.main.humidity;
        let description = dataObject.weather[0].description;

        let tempF = kelvinConverter(tempK);
        let feelsLikeF = kelvinConverter(feelsLikeK);
        let minF = kelvinConverter(minK);
        let maxF = kelvinConverter(maxK);

        let wrapper = document.getElementById("mainWrapper");
        wrapper.innerHTML = `
            <h3 id="location">${this.city}, ${this.state}</h3>
            <img src="weatherAssets/clear-cloudy.png" id="icon">
            <h2 id="weatherType">${description}</h2>
            <h1 id="weatherTemp">${tempF}&deg;</h1>
            <div class="weatherInfo">
                <p>Relative Humidity: ${humidity}</p>
            </div>
            <div class="weatherInfo">
                <p>Min Temp: ${minF}&deg;</p>
            </div>
            <div class="weatherInfo">
                <p>Max Temp: ${maxF}&deg;</p>
            </div>
            <div class="weatherInfo">
                <p>Feels Like: ${feelsLikeF}&deg;</p>
            </div>
            <button id="submitBtn">Change Location</button>
        `
    }

}