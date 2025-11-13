
# Global Earthquake Map

An interactive web mapping application visualizing global seismic activity and world cities using GeoJSON data and Mapbox GL JS. 

## Features

- **Interactive Map Visualization**: View earthquakes and city data on responsive maps
- **Dual View System**: 
  - `earthquake.html`: Earthquake data for Japan region
  - `index.html`: Major world cities and countries
- **Data Filtering**: Sortable tables for both datasets
- **Responsive Design**: Mobile-friendly with adaptive layouts
- **Asynchronous Data Loading**: Efficient GeoJSON data fetching

## Live Demo

- **Main Application**: https://malika1214.github.io/global-earthquake-map/
- **Earthquake Example**: https://malika1214.github.io/global-earthquake-map/earthquake.html

## Data Sources

- Earthquake data from USGS
- Japan administrative boundaries
- Major world cities population data
- Country boundary approximations

## Technologies

- HTML5, CSS3, JavaScript (ES6+)
- Mapbox GL JS v2.5.0
- GeoJSON format
- Async/Await pattern

## Project Structure
```
global-earthquake-map/
├── index.html (main deliverable)
├── earthquake.html (practice example)
├── README.md
└── assets/
    ├── earthquakes.geojson
    ├── japan.json
    ├── world-cities.geojson
    └── major-countries.geojson
```

## Author

Malika Ali - University of Washington  
GEOG 328 - Web GIS (Fall 2025)
