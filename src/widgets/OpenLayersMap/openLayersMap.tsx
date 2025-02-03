import React, { useRef, useEffect } from 'react'
import 'ol/ol.css'
import './openLayersMap.module.css'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import { useGeographic } from 'ol/proj'
import { DEFAULT_CENTER_LOCATION, DEFAULT_ZOOM_LEVEL } from '../../shared/constants/mapConstants'
import { NO_MAP_ELEMENT_ERROR_MESSAGE } from '../../shared/constants/errorConstants'
import { Cafe } from '../../entities/cafe'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import Feature from 'ol/Feature'
import Point from 'ol/geom/Point'
import { Style, Icon } from 'ol/style'

type OpenLayersMapProps = {
  mapRef: React.MutableRefObject<Map | null>
  cafes: Cafe[] // ✅ 추가: 카페 리스트
}

const checkValidMapElement = (mapElement: React.RefObject<HTMLDivElement>): void => {
  if (!mapElement.current) throw new Error(NO_MAP_ELEMENT_ERROR_MESSAGE)
}

const OpenLayersMap: React.FC<OpenLayersMapProps> = ({ mapRef, cafes }) => {
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

  // ✅ 마커 추가 기능 유지
  useEffect(() => {
    if (!mapRef.current) return

    const vectorSource = new VectorSource()

    cafes.forEach((cafe) => {
      const feature = new Feature({
        geometry: new Point([cafe.lon, cafe.lat]), // ✅ 카페 위치 추가
      })

      feature.setStyle(
        new Style({
          image: new Icon({
            src: '/marker.png', // ✅ 마커 아이콘 (public/marker.png 추가 필요)
            scale: 0.03,
          }),
        })
      )

      vectorSource.addFeature(feature)
    })

    const vectorLayer = new VectorLayer({ source: vectorSource })
    mapRef.current.addLayer(vectorLayer)

    return () => {
      mapRef.current?.removeLayer(vectorLayer)
    }
  }, [cafes, mapRef])

  return <div ref={mapElement} className="openlayers-map" style={{ width: '100%', height: '100%' }}></div>
}

export default OpenLayersMap