const weather = new Weather("Robins", "IA");

weather.getWeatherGeo()
    .then(dataGeo =>{
        console.log(dataGeo);
        console.log(dataGeo[0].lat);
        weather.getWeather(dataGeo[0].lat, dataGeo[0].lon)
        .then(data =>{
            console.log(data);
            let ui = new Ui(dataGeo[0]);
            ui.newUi(data);
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));