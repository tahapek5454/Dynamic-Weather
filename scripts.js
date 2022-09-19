

const URL = "https://api.openweathermap.org/data/2.5/"

const KEY = "Your API Key"

var tarih = new Date();


function setBackGround() {
    hours = tarih.getHours()
    if(hours>=20 && hours<=24){
        document.body.style.backgroundImage = "url('./images/gece.png')";
    }else if(hours>=1 && hours<=5){
        document.body.style.backgroundImage = "url('./images/gece.png')";
    }else{
        document.body.style.backgroundImage = "url('./images/gokyuzu.png')";
    }
    
}

setBackGround()

let dates = document.querySelectorAll('.card-footer')

for (let i = 0; i < dates.length; i++) {
    dates[i].innerHTML = `${tarih.getDate()}.${tarih.getMonth() + 1}.${tarih.getFullYear()}`
}


let searchBar = document.querySelector('#searchBar')
searchBar.addEventListener('keypress', setQuery)

let searchBtn = document.querySelector('#searchBtn')
searchBtn.addEventListener('click', setQuery2)

function setQuery(e) {


    // console.log(searchBar.value)
    if (e.keyCode == '13') // enter
    {
        if (searchBar.value) {
            getResult(searchBar.value)
        }
    }
}
function setQuery2(e) {

    if (searchBar.value) {
        getResult(searchBar.value)
    }
}
const getResult = (citiyName) => {
    let query = `${URL}weather?q=${citiyName}&appid=${KEY}&units=metric&lang=tr`
    // console.log(query)
    fetch(query)
        .then(weather => {
            return weather.json()
        })
        .then(displayResult)
}

function displayResult(weather) {

    // console.log(weather)

    let city = document.querySelector('.city')
    city.innerHTML = `${weather.name}`

    let temp = document.querySelector('.temp')
    temp.innerHTML = `${Math.round(weather.main.temp)}'C`

    let desc = document.querySelector('.desc')
    desc.innerHTML = `${weather.weather[0].description}`

    let ownDesc = weather.weather[0].description

    let min_max = document.querySelector('.min-max')
    min_max.innerHTML = `${Math.round(weather.main.temp_min)}'C/${Math.round(weather.main.temp_max)}'C`

    let img = document.querySelector('.img-our')


    for (let i = 0; i < TYPE_CLOUD.length; i++) {

        if (ownDesc.includes(TYPE_CLOUD[i])) {
            // console.log(ownDesc.includes(TYPE_CLOUD[i]))
            // console.log(ownDesc)
            // console.log('bulutlu girim')
            img.setAttribute("src", "./images/bulutlu.png")

            break
        }

    }

    for (let i = 0; i < TYPE_SUN.length; i++) {

        if (ownDesc.includes(TYPE_SUN[i])) {
            // console.log(ownDesc)
            // console.log('gunesli girdim')
            img.setAttribute("src", "./images/gunesli.png")
            break

        }

    }

    for (let i = 0; i < TYPE_RARIN.length; i++) {

        if (ownDesc.includes(TYPE_RARIN[i])) {
            // console.log(ownDesc)
            // console.log('yagmurlu girdim')
            img.setAttribute("src", "./images/yagmurlu.png")
            break

        }

    }

    for (let i = 0; i < TYPE_SNOW.length; i++) {

        if (ownDesc.includes(TYPE_SNOW[i])) {
            // console.log(ownDesc)
            // console.log('karli girdim')
            img.setAttribute("src", "./images/karli.png")
            break

        }

    }

    for (let i = 0; i < TYPE_WINDY.length; i++) {

        if (ownDesc.includes(TYPE_WINDY[i])) {
            // console.log(ownDesc)
            // console.log('ruzgarli girdim')
            img.setAttribute("src", "./images/ruzgarli.png")
            break

        }

    }

}

let tempsCity = ['istanbul', 'london', 'moskova', 'katar', 'Bern']

const getResultForTemp = (citiyName) => {
    let query = `${URL}weather?q=${citiyName}&appid=${KEY}&units=metric&lang=tr`
    fetch(query)
        .then(weather => {
            return weather.json()
        })
        .then(displayResultForTemp)
}

let sayac = 0;

const TYPE_CLOUD = ['kapalı', 'bulutlu','bulut']
const TYPE_SUN = ['güneşli', 'açık','güneş']
const TYPE_RARIN = ['yağmurlu', 'yağışlı','yağmur']
const TYPE_SNOW = ['karlı', 'kar']
const TYPE_WINDY = ['fırtına', 'rüzgarlı','rüzgar']




function displayResultForTemp(weather) {


    let tempCities = document.querySelectorAll('.dc')
    let tempTemp = document.querySelectorAll('.dt')
    let tempDis = document.querySelectorAll('.dd')
    let tempMin_Max = document.querySelectorAll('.dm')
    let img = document.querySelectorAll('.img-temp')



    tempCities[sayac].innerHTML = `${weather.name}`


    tempTemp[sayac].innerHTML = `${Math.round(weather.main.temp)}'C`


    tempDis[sayac].innerHTML = `${weather.weather[0].description}`
    let ownDesc = weather.weather[0].description





    for (let i = 0; i < TYPE_CLOUD.length; i++) {

        if (ownDesc.includes(TYPE_CLOUD[i])) {
            // console.log(ownDesc.includes(TYPE_CLOUD[i]))
            // console.log(ownDesc)
            // console.log('bulutlu girim')
            img[sayac].setAttribute("src", "./images/bulutlu.png")
            flag = false
            break
        }

    }

    for (let i = 0; i < TYPE_SUN.length; i++) {

        if (ownDesc.includes(TYPE_SUN[i])) {
            // console.log(ownDesc)
            // console.log('gunesli girdim')
            img[sayac].setAttribute("src", "./images/gunesli.png")
            break

        }

    }

    for (let i = 0; i < TYPE_RARIN.length; i++) {

        if (ownDesc.includes(TYPE_RARIN[i])) {
            // console.log(ownDesc)
            // console.log('yagmurlu girdim')
            img[sayac].setAttribute("src", "./images/yagmurlu.png")
            break

        }

    }

    for (let i = 0; i < TYPE_SNOW.length; i++) {

        if (ownDesc.includes(TYPE_SNOW[i])) {
            // console.log(ownDesc)
            // console.log('karli girdim')
            img[sayac].setAttribute("src", "./images/karli.png")
            break

        }

    }

    for (let i = 0; i < TYPE_WINDY.length; i++) {

        if (ownDesc.includes(TYPE_WINDY[i])) {
            // console.log(ownDesc)
            // console.log('ruzgarli girdim')
            img[sayac].setAttribute("src", "./images/ruzgarli.png")
            break

        }

    }

    tempMin_Max[sayac].innerHTML = `${Math.round(weather.main.temp_min)}'C/${Math.round(weather.main.temp_max)}'C`

    sayac++
    // console.log(sayac)
    flag = true

}




function addTemps() {

    for (let i = 0; i < tempsCity.length; i++) {
        getResultForTemp(tempsCity[i])
        // console.log(tempsCity[i])

    }



}
addTemps()






