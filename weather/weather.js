const request = require('request');

var getWeather = (lat, lng, callback) => {
request({
    url: `https://api.darksky.net/forecast/335a19442befd0254d3e36d51914fa51/${lat},${lng}`,
    json: true
}, (error, response, body) => {
    if (error) {
        callback('Unable to connect to Forecast.io server.');
    } else if (response.statusCode === 400) {
        callback('Unable to fetch weatther.');
    } else if (response.statusCode === 200) {
        callback(undefined, {
            temperature: body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature
        });
    }
});
};

module.exports.getWeather = getWeather;