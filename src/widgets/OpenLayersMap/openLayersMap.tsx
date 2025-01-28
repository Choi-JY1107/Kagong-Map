import React, { useRef, useEffect } from 'react'
import 'ol/ol.css'
import './openLayersMap.css'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import { useGeographic } from 'ol/proj'
import { DEFAULT_CENTER_LOCATION, DEFAULT_ZOOM_LEVEL } from '../../shared/constants/mapConstants'

type OpenLayersMapProps = {
  mapRef: React.MutableRefObject<Map | null>
}

const checkValidMapElement = (mapElement: React.RefObject<HTMLDivElement>): void => {
  if (!mapElement.current) throw new Error('지도 요소가 존재하지 않습니다.')
}

const OpenLayersMap: React.FC<OpenLayersMapProps> = ({ mapRef }) => {
  const mapElement = useRef<HTMLDivElement>(null)

  useGeographic()
  useEffect(() => {
    checkValidMapElement(mapElement)

    const map = new Map({
      target: mapElement.current!,
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

    mapRef.current = map 
    
    return () => {
      map.setTarget(undefined)
    }
  }, [mapRef])

  return <div ref={mapElement} className="openlayers-map"></div>
}

export default OpenLayersMap