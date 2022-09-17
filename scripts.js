

const url = "https://api.openweathermap.org/data/2.5/"

const key = "bca1671cecf44178a4604c8e30cd54ec"



// let searchBar = document.querySelector('#searchBar')
// searchBar.addEventListener('keypress', setQuery)

// function setQuery(e) {
//     if (e.keyCode == '13') // enter
//     {
//         getResult(searchBar.value)
//     }
// }
// const getResult = (citiyName) => {
//     let query = `${url}weather?q=${citiyName}&appid=${key}&units=metric&lang=tr`
//     fetch(query)
//     .then(weather => {
//         return weather.json()
//     })
//     .then(displayResult)
// }

// function displayResult(weather){

//     console.log(weather)

//     let city = document.querySelector('.city')
//     city.innerHTML=`${weather.name}`

//     let temp = document.querySelector('.temp')
//     temp.innerHTML=`${Math.round(weather.main.temp)}'C`

//     let desc = document.querySelector('.desc')
//     desc.innerHTML=`${weather.weather[0].description}`

//     let min_max = document.querySelector('.min-max')
//     min_max.innerHTML=`${Math.round(weather.main.temp_min)}'C/${Math.round(weather.main.temp_max)}'C`

// }