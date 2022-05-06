const path = require('path')
const express = require('express')
const hbs = require('hbs')
const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const NodeGeocoder = require('node-geocoder');
 
const options = {
  provider: 'google', 
  // Optional depending on the providers
  httpAdapter: 'https', // Default
  apiKey: 'ccf70a5c58a84bc4bbc004d14ddd2e6f', // for Mapquest, OpenCage, Google Premier
  formatter: null         // 'gpx', 'string', ...
};
 
const geocoder = NodeGeocoder(options);


const app = express()
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

// Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res)=> {
    res.render('index')
})

app.get('/weather', (req, res)=> {
    if(!req.query.address && !req.query.latitude && !req.query.longitude){
        return res.send({
            error: 'Loading..'
        })
        // req.query.address = 'Nagpur'
    }else if(!req.query.address){
        
        location = {}
        forecast(req.query.longitude, req.query.latitude, (error, ForecastData) => {
            if(error){
                return res.send({error})
            }
            res.send({
                forecast: ForecastData
            })
        })
    }
    else if(!req.query.longitude && !req.query.latitude){
        geocode(req.query.address, (error, {longitude, latitude, location} = {}) =>{
            if(error){
                return res.send({error})
            }
            forecast(longitude, latitude, (error, ForecastData) => {
                if(error){
                    return res.send({error})
                }
                res.send({
                    forecast: ForecastData
                })
            })
        })
    }
})

app.listen(port, () => {
    console.log('Server is up on port '+port)
})