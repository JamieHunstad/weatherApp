class Weather {
    constructor(city, state) {
        this.apiKey = "e9cc5a0562787c38a1495b825bff2370";
        this.city = city;
        this.state = state;
    }
    
    async getWeatherGeo(){
        
        let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${this.city},${this.state},US&limit=3&appid=${this.apiKey}`);

        let responseData = await response.json();

        return responseData;
    }

    async getWeather(lat, lon) {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}`);

        let responseData = await response.json();
        
        return responseData.main;
    }
    
}