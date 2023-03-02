// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from "!mapbox-gl";
import { useEffect, useRef, useState } from "react";
import Layout from "../../components/Layout";
import styles from './index.module.css';

export default function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(94.4424);
    const [lat, setLat] = useState(51.7197);
    const [zoom, setZoom] = useState(15);

    mapboxgl.accessToken = 'pk.eyJ1IjoiYWxpd29uayIsImEiOiJjbGJuemp4MHUwdnluM29sOTB4NDRveDc4In0.ca9oT1Xiheo19LUqkHK8lA';


    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/aliwonk/clbpdn452000014oilhmvewcu',
            center: [lng, lat],
            zoom: zoom
        });
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return (
        <Layout header={false}>
            <div className={styles.map}>
                <div ref={mapContainer} style={{width: '100%', height: '100%'}}></div>
            </div>
        </Layout>
    )
}