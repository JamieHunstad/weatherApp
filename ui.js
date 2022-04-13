
 //Add Switch statement here for images
let kelvinConverter = (kelvin) =>{
    let farenheight = Math.floor((kelvin - 273.15) * 9/5 +32);
    return farenheight;
 }

 //Add Switch statement here for images
let imagePicker = (thisWeatherType) => {
    switch (thisWeatherType) {
    case 'Clear':
        return "weatherAssets/sunny.png";
        break;
    case 'Drizzle':
    case 'Rain':
        return "weatherAssets/drizzle.png";
        break;
    case 'Snow':
        return "weatherAssets/snow.png";
        break;
    case 'Thunderstorm':
        return "weatherAssets/thunderstorms.png";
        break;
    case 'Clouds':
         return "weatherAssets/clear-cloudy.png";
        break;
    default:
        return "weatherAssets/clear-cloudy.png";
}
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
        let weatherType = dataObject.weather[0].main;
        let description = dataObject.weather[0].description;

        let tempF = kelvinConverter(tempK);
        let feelsLikeF = kelvinConverter(feelsLikeK);
        let minF = kelvinConverter(minK);
        let maxF = kelvinConverter(maxK);
        let weatherPic = imagePicker(weatherType);

        let wrapper = document.getElementById("mainWrapper");
        wrapper.innerHTML = `
            <h3 id="location">${this.city}, ${this.state}</h3>
            <img src=${weatherPic} id="icon">
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