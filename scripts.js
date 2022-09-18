

const URL = "https://api.openweathermap.org/data/2.5/"

const KEY = "bca1671cecf44178a4604c8e30cd54ec"

var tarih = new Date();


let dates = document.querySelectorAll('.card-footer')

for(let i =0; i<dates.length; i++){
    dates[i].innerHTML = `${tarih.getDate()}.${tarih.getMonth()+1}.${tarih.getFullYear()}`
}


let searchBar = document.querySelector('#searchBar')
searchBar.addEventListener('keypress', setQuery)

let searchBtn = document.querySelector('#searchBtn')
searchBtn.addEventListener('click', setQuery2)

function setQuery(e) {

    
    console.log(searchBar.value)
    if (e.keyCode == '13') // enter
    {
        if(searchBar.value){
            getResult(searchBar.value)
        }
    }
}
function setQuery2(e){
    
    if(searchBar.value){
        getResult(searchBar.value)
    }
}
const getResult = (citiyName) => {
    let query = `${URL}weather?q=${citiyName}&appid=${KEY}&units=metric&lang=tr`
    console.log(query)
    fetch(query)
        .then(weather => {
            return weather.json()
        })
        .then(displayResult)
}

function displayResult(weather) {

    console.log(weather)

    let city = document.querySelector('.city')
    city.innerHTML = `${weather.name}`

    let temp = document.querySelector('.temp')
    temp.innerHTML = `${Math.round(weather.main.temp)}'C`

    let desc = document.querySelector('.desc')
    desc.innerHTML = `${weather.weather[0].description}`

    let min_max = document.querySelector('.min-max')
    min_max.innerHTML = `${Math.round(weather.main.temp_min)}'C/${Math.round(weather.main.temp_max)}'C`

}

let tempsCity=['istanbul','london','moskova','katar','Bern']

const getResultForTemp = (citiyName) => {
    let query = `${URL}weather?q=${citiyName}&appid=${KEY}&units=metric&lang=tr`
    fetch(query)
        .then(weather => {
            return weather.json()
        })
        .then(displayResultForTemp)      
}

let sayac = 0;


function displayResultForTemp(weather) {

    
    let tempCities = document.querySelectorAll('.dc')
    let tempTemp = document.querySelectorAll('.dt')
    let tempDis = document.querySelectorAll('.dd')
    let tempMin_Max = document.querySelectorAll('.dm')
    let img = document.querySelectorAll('.img-temp')

   
    
    tempCities[sayac].innerHTML = `${weather.name}`

    
    tempTemp[sayac].innerHTML = `${Math.round(weather.main.temp)}'C`

    
    tempDis[sayac].innerHTML = `${weather.weather[0].description}`

    console.log(img[sayac].setAttribute("src","./images/bulutlu.png"))

    
    tempMin_Max[sayac].innerHTML = `${Math.round(weather.main.temp_min)}'C/${Math.round(weather.main.temp_max)}'C`

    sayac++
    console.log(sayac)

}




function addTemps(){
   
    for(let i =0; i<tempsCity.length; i++){
        getResultForTemp(tempsCity[i])
        console.log(tempsCity[i])
        
    }

    

}
addTemps()






