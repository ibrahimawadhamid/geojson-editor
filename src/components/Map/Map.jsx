import React, {Component} from 'react';
import L from 'leaflet';
import "./Map.css";

class Map extends Component {
    componentDidMount() {
        const mbAttr = `${process.env.REACT_APP_NAME} v-${process.env.REACT_APP_VERSION}`,
            mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

        const grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', attribution: mbAttr}),
            darkscale   = L.tileLayer(mbUrl, {id: 'mapbox/dark-v9', attribution: mbAttr}),
            streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11',   attribution: mbAttr});

        // create map
        this.map = L.map('map', {
            center: [25, 25],
            zoom: 4,
            layers: [grayscale]
        });
        var baseLayers = {
            "Grayscale": grayscale,
            "Darkscale": darkscale,
            "Streets": streets
        };

        L.control.layers(baseLayers).addTo(this.map);
    }

    render() {
        return (
            <div id="map" className="map"></div>
        )
    }
}


export default Map;