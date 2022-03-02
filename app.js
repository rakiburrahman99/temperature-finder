const API_KEY = `93329de620a83ba3cc5e2b38d1c6622d`;

const searchTemp = () => {
    const city = document.getElementById('input-temp').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data))
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemp = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temp', temperature.main.temp);
    setInnerText('weather', temperature.weather[0].main);

    //set weather icon:
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const weatherIcon = document.getElementById('img-weather');
    weatherIcon.setAttribute('src', url);
}