// Base WMS URL for GeoServer
const wmsUrl = "https://www.gis-geoserver.polimi.it/geoserver/gisgeoserver_10/wms";

// Base maps
const osm = new ol.layer.Tile({
  title: "OSM",
  type: "base",
  visible: true,
  source: new ol.source.OSM()
});

const esri = new ol.layer.Tile({
  title: "ESRI Satellite",
  type: "base",
  visible: false,
  source: new ol.source.XYZ({
    attributions: "Tiles © Esri",
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
  })
});

// Overlay WMS layers
function createOverlay(name, visible = false) {
  return new ol.layer.Image({
    visible: visible,
    source: new ol.source.ImageWMS({
      url: wmsUrl,
      params: {
        'LAYERS': `gisgeoserver_10:${name}`,
        'STYLES': '',
        'FORMAT': 'image/png',
        'TRANSPARENT': true
      },
      ratio: 1,
      serverType: 'geoserver'
    })
  });
}

// Create overlay layers
const overlays = {
  no2dec2022: createOverlay("Romania_CAMS_no2_2022_12_d", true),
  landcover2022: createOverlay("Romania_LC_reclassified_2022"),
  avgno22022: createOverlay("Romania_average_no2_2022"),
  aad2022: createOverlay("Romania_no2_2017-2021_AAD_map_2022"),
  bivariate2020: createOverlay("Romania_no2_2020_bivariate.gpkg"),
  chart2020: createOverlay("Romania_no2_2020_chart.gpkg"),
  conc2020: createOverlay("Romania_no2_concentration_map_2020"),
  avgno22013: createOverlay("romania_average_no2_2013_resampled")
};

// Initialize map
const map = new ol.Map({
  target: "map",
  layers: [
    osm,
    esri,
    ...Object.values(overlays)
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([24.9, 45.9]),
    zoom: 6
  })
});

// Handle basemap switch
document.querySelectorAll('input[name="basemap"]').forEach(input => {
  input.addEventListener("change", () => {
    osm.setVisible(input.value === "osm");
    esri.setVisible(input.value === "esri");
  });
});

// Handle overlay toggle
document.querySelectorAll("input.overlay").forEach(input => {
  input.addEventListener("change", () => {
    const layer = overlays[input.value];
    if (layer) {
      layer.setVisible(input.checked);
    }
  });
});

// Error handling for WMS layers
Object.values(overlays).forEach(layer => {
  layer.getSource().on('imageloaderror', function(event) {
    console.error('WMS layer failed to load:', event);
    document.getElementById('errorMessage').textContent = 'Some layers failed to load. Check console for details.';
    document.getElementById('errorMessage').style.display = 'block';
  });
});

// Show loading indicator while map loads
document.getElementById('loadingIndicator').style.display = 'block';
map.once('rendercomplete', function() {
  document.getElementById('loadingIndicator').style.display = 'none';
});