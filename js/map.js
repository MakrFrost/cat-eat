// ! Карта

const map = L.map("map").setView([50.45313571642444, 30.450107729190155], 9);

// ! Иконка на карте

var catIcon = L.icon({
  iconUrl: "../img/logo-desktop.png",

  iconSize: [60, 50],
  shadowAnchor: [1, 1],
  popupAnchor: [0, -20],
});

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

L.marker([50.45313571642444, 30.450107729190155], { icon: catIcon })
  .addTo(map)
  .bindPopup("CAT ENERGY")
  .openPopup();
