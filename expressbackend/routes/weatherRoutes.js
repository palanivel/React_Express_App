const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')
const {getWeather} = require('../controllers/weathercontroller')

const wurl = 'https://weatherapi-com.p.rapidapi.com/current.json?q=India';
const headers =  {
  'X-RapidAPI-Key': "165035c059msha521d902363008dp154342jsn43878f5db4c0",
  'X-RapidAPI-Host': "weatherapi-com.p.rapidapi.com"
}
async function getWeatherDetailsByCountry(){
const result = await fetch(wurl, {
  method: 'GET',
  headers: headers,
})
const resultJson = await result.json();
return resultJson;
} 

router.get('/', async function(req,res) {
  const getWeather = await getWeatherDetailsByCountry();
  res.json(getWeather);
})

module.exports = router; 