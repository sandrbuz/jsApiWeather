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


fetch('http://api.openweathermap.org/data/2.5/weather?id=536203&appid=655fdcf1aed1280abf8e870e95b28149')

    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
    })