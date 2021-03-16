// async function getResponse() {
//     let response = await fetch('api.openweathermap.org/data/2.5/weather?id=536847&appid=655fdcf1aed1280abf8e870e95b28149')

//     let content = await response.json()
//     console.log(content)


// }

// getResponse()




// -----------------------------------------------------------------------



// let test = fetch('api.openweathermap.org/data/2.5/weather?id=536847&appid=655fdcf1aed1280abf8e870e95b28149')

// let content = test.json();


// console.log(test);


// ---------------------------------------------------------------------------


// let test = fetch('api.openweathermap.org/data/2.5/weather?id=536847&appid=655fdcf1aed1280abf8e870e95b28149')
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     });

// -----------------------------------------------------------------------------------


// fetch('http://api.openweathermap.org/data/2.5/weather?id=536203&appid=655fdcf1aed1280abf8e870e95b28149')

//     .then(function (resp) { return resp.json() })
//     .then(function (data) {
// console.log(data);
// document.querySelector('.Spb-city').textContent = data.name;
// document.querySelector('.Spb-temp').innerHTML = Math.round(data.main.temp - 273) + '&deg';
// document.querySelector('.Spb-weather').textContent = data.weather[0]['description'];
// document.querySelector('.Spb-icon').innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.weather[0]['icon'] + '@2x.png">';

// https://openweathermap.org/img/wn/04n@2x.png  (ссылка на иконку)
// })

// .catch(function () {
//catch any errors
// })
// ---------------------------------------------------------------------------------------------

// arrow function BELLOW

// const city = 536203;
// fetch(`http://api.openweathermap.org/data/2.5/weather?id=${city}&appid=655fdcf1aed1280abf8e870e95b28149`)

//     .then(resp => resp.json())
//     .then(data => console.log(data))


// .then(function (resp) { console.log(resp.json()) })
// .then(function (data) {
// console.log(data);
// document.querySelector('.Spb-city').textContent = data.name;
// document.querySelector('.Spb-temp').innerHTML = Math.round(data.main.temp - 273) + '&deg';
// document.querySelector('.Spb-weather').textContent = data.weather[0]['description'];
// document.querySelector('.Spb-icon').innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.weather[0]['icon'] + '@2x.png">';

// https://openweathermap.org/img/wn/04n@2x.png  (ссылка на иконку)
// })

// .catch(function () {
//catch any errors
// })
// ----------------------------------------------------------------------------------------


// buttons requests






// buttons[0].addEventListener('click', function (event) {

//     const cityName = event.target.textContent;
//     console.log(cityName);
//     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=655fdcf1aed1280abf8e870e95b28149`)
//         .then(resp => resp.json())
//         .then(data => console.log(data))

// })
// buttons[1].addEventListener('click', function (event) {

//     const cityName = event.target.textContent;
//     console.log(cityName);
//     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=655fdcf1aed1280abf8e870e95b28149`)
//         .then(resp => resp.json())
//         .then(data => console.log(data))

// })
// buttons[2].addEventListener('click', function (event) {

//     const cityName = event.target.textContent;
//     console.log(cityName);
//     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=655fdcf1aed1280abf8e870e95b28149`)
//         .then(resp => resp.json())
//         .then(data => console.log(data))

// })
const buttons = document.querySelectorAll('.city-btn');

for (i = 0; i < buttons.length; i += 1) {

    buttons[i].addEventListener('click', function (event) {

        const cityName = event.target.textContent;
        console.log(cityName);
        ;
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=655fdcf1aed1280abf8e870e95b28149`)
            .then(resp => resp.json())
            .then(data => {
                // console.log(data)
                document.querySelector('.city').textContent = data.name;
                document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) + '&deg';
                document.querySelector('.weather').textContent = data.weather[0]['description'];
                document.querySelector('.icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
            })


    })
}

