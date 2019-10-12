import React, { useEffect, useRef } from "react"
import isInsidePolygon from "../vendor/point-inside-polygon";
const singaporePolygon = [
  [1.352083, 103.819836],
  [1.352443, 103.694146],
  [1.301645, 103.752511],
  [1.275559, 103.819802],
  [1.272127, 103.849328],
  [1.314001, 103.911813],
  [1.367545, 103.988717],
  [1.427265, 103.891213],
  [1.42246, 103.839715] ,
  [1.384706, 103.802636],
  [1.388825, 103.745645],
  [1.352306, 103.694755],
]

const getCurrentPosition = (options = {}) => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

const GoogleMap = ({ onMount, mapOptions }) => {
  const elementProps = { ref: useRef(), id: "google-map" }

  useEffect(() => {
    const { center: { lat, lng }, styles } = mapOptions
    const onLoad = async () => {
      const googleMap = new window.google.maps.Map(elementProps.ref.current, { styles })
      onMount && onMount(googleMap)
      try {
        const position = await getCurrentPosition()
        const initialLocation = new window.google.maps.LatLng(position.coords.latitude, position.coords.longitude)
        const isInSingapore = isInsidePolygon(initialLocation, singaporePolygon)
        if (!isInSingapore) {
          throw new Error('not in Singapore')
        }
        googleMap.setCenter(initialLocation)
        googleMap.setZoom(14);
      } catch (error) {
        googleMap.setCenter(new window.google.maps.LatLng(lat, lng))
        googleMap.setZoom(13)
      }
    }
    if (!window.google) {
      const script = document.createElement(`script`)
      script.type = `text/javascript`
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyALmPN6OhR0hNc2Iz2bPKbB7e8qNOflmV4&callback`
      const headScript = document.getElementsByTagName(`script`)[0]
      headScript.parentNode.insertBefore(script, headScript)
      script.addEventListener(`load`, onLoad)
      return () => script.removeEventListener(`load`, onLoad)
    } else {
      onLoad()
    }
  }, [elementProps.ref, onMount, mapOptions])

  return (
    <section
      {...elementProps}
    >
    </section>
  )
}

export default GoogleMap
