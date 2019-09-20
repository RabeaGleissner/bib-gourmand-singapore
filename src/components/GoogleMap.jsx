import React, { useEffect, useRef } from "react"

const GoogleMap = ({ onMount, mapOptions }) => {
  const elementProps = { ref: useRef(), id: "google-map" }

  useEffect(() => {
    const { center: { lat, lng }, styles } = mapOptions
    const onLoad = () => {
      const googleMap = new window.google.maps.Map(elementProps.ref.current, { styles })
      onMount && onMount(googleMap)
      navigator.geolocation.getCurrentPosition((position) => {
        const initialLocation = new window.google.maps.LatLng(position.coords.latitude, position.coords.longitude)
        googleMap.setCenter(initialLocation)
        googleMap.setZoom(14);
      }, (positionError) => {
        googleMap.setCenter(new window.google.maps.LatLng(lat, lng))
        googleMap.setZoom(12)
      })
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
