import DG from "2gis-maps";
import { useEffect } from "react";

const Map = () => {
    return (
        useEffect(() => {
            let map
            map = DG.map("map-container", {
                center: [55.31, 25.23],
                zoom: 5
            })
        }, [])
    )

    
}

function TwoGisMap() {
    return (
        Map
    )
}




export default TwoGisMap;