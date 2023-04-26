const mapboxgl = require('mapbox-gl/dist/mapbox-gl')
mapboxgl.accessToken = "pk.eyJ1IjoieWFuY29uZ3dlbiIsImEiOiJjaml4eWgxMnowNHY0M3BvMW96cDI1bWJ6In0.QA-bmCCquo-mziBfZ8KOIQ"
const map = new mapboxgl.Map({
    container: document.querySelector('#map'),
    style: 'mapbox://styles/mapbox/streets-v10'
})