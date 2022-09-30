
let cityName = document.querySelector('.city-name');
let fDayTemp = document.querySelector('.f-temp-Day');
let imagStatus =Array.from(document.querySelectorAll(".imag-status"));
let statusDayTemp =document.querySelectorAll('.status-Day-temp'); 
let maxTemp=document.querySelectorAll('.MaxTemp');
let minTemp=document.querySelectorAll('.MinTemp');
let wind = document.querySelector('.wind');
let umbrella = document.querySelector('.umbrella');
let compass = document.querySelector('.compass');
let searchInput=document.getElementById('searchInput');
let currentcity='aswan';


// variable of Api
let conction;
let DataRespone;








searchInput.addEventListener('input',function()
{
    currentcity=searchInput.value;
    getDataApi();
}
)


async function getDataApi()
{

    conction= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=45d0d6d4e14545cca4554556222306&q=${currentcity}&days=3&aqi=no&alerts=no`);
    DataRespone= await conction.json();
     firstDay();
     nextDay()
}


getDataApi();


function firstDay()
{

    cityName.innerHTML=DataRespone.location.name;
fDayTemp.innerHTML=DataRespone.current.temp_c + `<sup>o</sup>c`
imagStatus[0].setAttribute('src','https:'+DataRespone.current.condition.icon);
statusDayTemp[0].innerHTML=DataRespone.current.condition.text;
wind.innerHTML=DataRespone.current.wind_kph;
compass.innerHTML=DataRespone.current.wind_dir;     
umbrella.innerHTML=DataRespone.current.humidity+'%';  
                     
}

 function nextDay()
{

    for(let i=0; i<=1;i++)
    {
        console.log(i);
        imagStatus[i+1].setAttribute('src','https:'+DataRespone.forecast.forecastday[i+1].day.condition.icon);
        statusDayTemp[i+1].innerHTML=DataRespone.forecast.forecastday[i+1].day.condition.text; 
        maxTemp[i].innerHTML=DataRespone.forecast.forecastday[i+1].day.maxtemp_c;
        minTemp[i].innerHTML=DataRespone.forecast.forecastday[i+1].day.mintemp_c;
    }
}




// console.log("DayName" ,DayName );
// console.log("DayDate" ,DayDate );
// console.log("cityName" ,cityName );
// console.log("fDayTemp" ,fDayTemp );
// console.log("statusDayTemp" ,statusDayTemp );
// console.log("maxTemp" ,maxTemp );
// console.log("minTemp" ,minTemp );
// console.log("imag-status" ,imagStatus );


// function()
// {

// }