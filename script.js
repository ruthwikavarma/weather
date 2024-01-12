function id(v){
    return document.getElementById(v)
}
    async function getWeather(v='') {
    var city = id("inp").value || v
    if(!city) return false
const apiKey = '368f1b2e8b1b45fc9e9164230231106';
const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`);
const data = await response.json();
//console.log(JSON.stringify(data));
const countryData = data.location['country'],
degreesData = data.current['temp_c'] + '°C',
dateData = data.location['localtime'],
conditionData = data.current.condition['text'],
conditionImage="https:"+data.current.condition['icon'],
regionData=data.location["name"],
windDir = data.current['wind_dir'],
ultrV = data.current['uv'],
humidity = data.current['humidity'],
pressure = data.current['pressure_mb']

id("ico").setAttribute("src",conditionImage)
id("pais").innerText=countryData
id("condicion").innerText=conditionData
id("grados").innerText=degreesData
id("region").innerText=regionData
id("fecha").innerText=dateData
return false
}
getWeather('New York')
function newBlub()
{
    var blub = document.createElement('div')

    blub.className='blub'
    blub.style.left = Math.random()*window.innerWidth+'px'
    blub.style.top = Math.random()*window.innerHeight+'px'
    id('blubs').appendChild(blub)
}
setInterval(newBlub,200)