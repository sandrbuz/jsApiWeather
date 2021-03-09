fetch('api.openweathermap.org/data/2.5/weather?id=536203&appid=655fdcf1aed1280abf8e870e95b28149')

    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
    })

    .catch(function () {

    });