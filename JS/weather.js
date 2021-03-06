const API_KEY = "8a1fd8758435e7adad477d8f59561945";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {

            const city = document.querySelector('#weather span:first-child');
            const weather = document.querySelector('#weather span:nth-child(2)');
            const temp = document.querySelector('#weather span:nth-child(3)');

            city.innerText = `in@${data.name}`;
            weather.innerText = data.weather[0].main;
            temp.innerText = `NowTemp ${data.main.temp}도`;
        });
}

function onGeoErr(){    
    alert("Can't find your location, check your settings")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);

