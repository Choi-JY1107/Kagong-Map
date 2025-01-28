import { useRef, useEffect } from 'react'
import 'ol/ol.css'
import './openLayersMap.css'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import { useGeographic } from 'ol/proj'
import { DEFAULT_CENTER_LOCATION, DEFAULT_ZOOM_LEVEL } from '../../shared/constants/mapConstants'

const OpenLayersMap = () => {
  const mapElement = useRef<HTMLDivElement>(null)

  useGeographic()

  useEffect(() => {
    if (!mapElement.current) return

    const map = new Map({
      target: mapElement.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: DEFAULT_CENTER_LOCATION,
        zoom: DEFAULT_ZOOM_LEVEL,
      }),
    })

    return () => {
      map.setTarget(undefined)
    }
  }, [])

  return (
    <div className="openlayers-container">
      <div ref={mapElement} className="openlayers-map"></div>
    </div>
  )
}

export default OpenLayersMap