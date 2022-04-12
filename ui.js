
let kelvinConverter = (kelvin) =>{
    let farenheight = (kelvin - 273.15) * 9/5 +32;
    return farenheight;
 }

class Ui{
    constructor(myLocation){
        this.city = myLocation.name;
        this.state = myLocation.state;
    }
    newUi(dataObject){
        let tempK = dataObject.temp;
        let feelsLikeK = dataObject.feels_like;
        let minK = dataObject.temp_min;
        let maxK = dataObject.temp_max;
        let humidity = dataObject.humidity;

        let tempF = kelvinConverter(tempK);
        let feelsLikeF = kelvinConverter(feelsLikeK);
        let minF = kelvinConverter(minK);
        let maxF = kelvinConverter(maxK);

        let wrapper = document.getElementById("mainWrapper");
        wrapper.innerHTML = `
            <h3 id="location">${this.city}, ${this.state}</h3>
            <img src="weatherAssets/clear-cloudy.png" id="icon">
            <h2 id="weatherType">Partly Cloudy</h2>
            <h1 id="weatherTemp">${tempF}</h1>
            <div class="weatherInfo">
                <p>Relative Humidity: ${humidity}</p>
            </div>
            <div class="weatherInfo">
                <p>Min Temp: ${minF}</p>
            </div>
            <div class="weatherInfo">
                <p>Max Temp: ${maxF}</p>
            </div>
            <div class="weatherInfo">
                <p>Feels Like: ${feelsLikeF}</p>
            </div>
            <button id="submitBtn">Change Location</button>
        `
    }

}