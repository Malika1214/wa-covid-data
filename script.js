const map = L.map("map").setView([47.4, -120.5], 7);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: "© OpenStreetMap",
}).addTo(map);

function getColor(d) {
  return d > 2000
    ? "#800026"
    : d > 1500
    ? "#BD0026"
    : d > 1000
    ? "#E31A1C"
    : d > 500
    ? "#FC4E2A"
    : d > 200
    ? "#FD8D3C"
    : d > 100
    ? "#FEB24C"
    : d > 50
    ? "#FED976"
    : "#FFEDA0";
}

function style(feature) {
  return {
    fillColor: getColor(feature.properties.casePer10k),
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: "3",
    fillOpacity: 0.7,
  };
}

function highlightFeature(e) {
  const layer = e.target;
  layer.setStyle({ weight: 3, color: "#666", fillOpacity: 0.9 });
}

function resetHighlight(e) {
  geojson.resetStyle(e.target);
}

function onEachFeature(feature, layer) {
  layer.on({ mouseover: highlightFeature, mouseout: resetHighlight });
  layer.bindTooltip(
    `${feature.properties.name}<br>` +
      `Cases per 10k: ${feature.properties.casePer10k}<br>` +
      `Deaths per 10k: ${feature.properties.deathPer10k}<br>` +
      `Fully Vaccinated per 10k: ${feature.properties.fullyVaxPer10k}`
  );
}

let geojson;

fetch("assets/wa-covid-data-102521.geojson")
  .then((res) => res.json())
  .then((data) => {
    geojson = L.geoJson(data, { style, onEachFeature }).addTo(map);
  });

const legend = L.control({ position: "bottomright" });
legend.onAdd = function () {
  const div = L.DomUtil.create("div", "legend");
  div.innerHTML = "<b>COVID-19 Cases per <br/> 10,000 People</b><br><br>";
  const grades = [0, 50, 100, 200, 500, 1000, 1500, 2000];
  const colors = [
    "#FFEDA0",
    "#FED976",
    "#FEB24C",
    "#FD8D3C",
    "#FC4E2A",
    "#E31A1C",
    "#BD0026",
    "#800026",
  ];
  for (let i = 0; i < grades.length; i++) {
    div.innerHTML +=
      `<i style="background:${colors[i]}; width: 18px; height: 18px; float: left; margin-right: 8px; opacity: 0.7;"></i>` +
      grades[i] +
      (grades[i + 1] ? "&ndash;" + grades[i + 1] + "<br>" : " and more");
  }
  return div;
};
legend.addTo(map);
