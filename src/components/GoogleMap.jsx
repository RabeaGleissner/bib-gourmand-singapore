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
      const googleMap = new window.google.maps.Map(elementProps.ref.current, { styles, disableDefaultUI: true, zoomControl: true, gestureHandling: 'greedy' })
      onMount && onMount(googleMap)
      try {
        const { coords } = await getCurrentPosition()
        const initialLocation = new window.google.maps.LatLng(coords.latitude, coords.longitude)
        const userLocation = [coords.latitude, coords.longitude]
        const isInSingapore = isInsidePolygon(userLocation, singaporePolygon)
        if (!isInSingapore) {
          throw new Error('not in Singapore')
        }
        googleMap.setCenter(initialLocation)
        googleMap.setZoom(15);
        const crossHairs = document.createElement(`button`)
        crossHairs.className += `google-map-cross-hairs`
        const mapElement = document.getElementById(`map`)
        mapElement.appendChild(crossHairs)
        crossHairs.onclick = () => {
          googleMap.setCenter(initialLocation)
          googleMap.setZoom(16);
        }
      } catch (error) {
        googleMap.setCenter(new window.google.maps.LatLng(lat, lng))
        googleMap.setZoom(13)
      }
    }
    if (!window.google) {
      const script = document.createElement(`script`)
      script.type = `text/javascript`
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_GOOGLE_API_KEY}&callback`
      const headScript = document.getElementsByTagName(`script`)[0]
      headScript.parentNode.insertBefore(script, headScript)
      script.addEventListener(`load`, onLoad)
      return () => script.removeEventListener(`load`, onLoad)
    } else {
      onLoad()
    }
  }, [elementProps.ref, onMount, mapOptions])

  return (
    <section {...elementProps}>
    </section>
  )
}

export default GoogleMap
