function Temp(){
    let city=document.getElementById("search").value;
  
  
    var api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4b37bcc9f0afc6e48380ef2d3cc1b78b&units=metric`;
    fetch (api)
    .then(function(response){
        return response.json();
    })
    .then(function (weatherObj) {
      document.getElementById("cityName").textContent = weatherObj.name + ","
      document.getElementById("country").textContent = weatherObj.sys.country;
    document.getElementById("temp").innerHTML =`${weatherObj.main.temp}<sup> <sup>o</sup>C</sup>`;
    document.getElementById("wind").innerHTML = `${weatherObj.wind.speed}<sub>km/h</sub>`;
    document.getElementById("cloud").innerHTML =` ${weatherObj.clouds.all}%`;
    document.getElementById("visibility").innerHTML = `${weatherObj.visibility}`;
    document.getElementById("sea").innerHTML=`${weatherObj.main.sea_level}`;
        document.getElementById("feels").innerHTML=`${weatherObj.main.feels_like}`;
    })


}


function bhavnagar(){
    let city="bhavnagar";
    var api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4b37bcc9f0afc6e48380ef2d3cc1b78b&units=metric`;
    fetch (api)
    .then(function(response){
        return response.json();
    })
    .then(function (weatherObj) {
      document.getElementById("cityName").textContent = weatherObj.name + ","
      document.getElementById("country").textContent = weatherObj.sys.country
    document.getElementById("temp").innerHTML =`${weatherObj.main.temp}<sup> <sup>o</sup>C</sup>`
    document.getElementById("wind").innerHTML = `${weatherObj.wind.speed}<sub>km/h</sub>`
    document.getElementById("cloud").innerHTML =` ${weatherObj.clouds.all}%`
    document.getElementById("visibility").innerHTML = `${weatherObj.visibility}`
    document.getElementById("sea").innerHTML=`${weatherObj.main.sea_level}`
        document.getElementById("feels").innerHTML=`${weatherObj.main.feels_like}`
    })
}