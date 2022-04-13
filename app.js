let weather = new Weather("Kenosha", "WI");

document.addEventListener("DOMContentLoaded", getNewWeather(weather));


function getNewWeather(location){
location.getWeatherGeo()
    .then(dataGeo =>{
        /* Gets Geo Location */
        weather.getWeather(dataGeo[0].lat, dataGeo[0].lon)
        .then(data =>{
            let ui = new Ui(dataGeo[0]);
            ui.newUi(data);

            /* Modal */
            let chngLocationBtn = document.getElementById("submitBtn");
            chngLocationBtn.addEventListener("click", () =>{
                let insert = document.getElementById("changeLocationOverlay");
                insert.innerHTML = 
                `
                <div id="modalWrapper"></div>
                <div id="modalBox">
                      <h2>Location</h2>
                      <form>
                          <div id="cityContainer">
                            <label for="city">City:</label>
                            <input id="city" name="city" type="text" autocomplete="off">
                          </div>
                          <div id="stateContainer">
                            <label for="state">State:</label>
                            <input id="state" name="state" type="text" autocomplete="off">
                          </div>
                          <input type="submit" id="submit" value="Submit">
                      </form>
                </div>
                `
                /* Modal Submit */
                let newLocation = document.getElementById("submit");
                newLocation.addEventListener("click", () =>{
                    let newCity = document.getElementById("city").value;
                    let newState = document.getElementById("state").value;
                    myNewWeather = new Weather(newCity, newState);
                    getNewWeather(myNewWeather);
                    let insert = document.getElementById("changeLocationOverlay");
                    insert.innerHTML = "";
                    
                });
            });


        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err))
};