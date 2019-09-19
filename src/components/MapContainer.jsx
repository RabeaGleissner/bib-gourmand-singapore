import React, { useEffect, useRef } from "react";
import "./map.css"

const MapContainer = ({ onMount, newMapOptions }) => {
  const elementProps = { ref: useRef(), id: "google-map" }

  useEffect(() => {
    const onLoad = () => {
      console.log('onLoad');
      const map = new window.google.maps.Map(elementProps.ref.current, newMapOptions)
      onMount && onMount(map)
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
  }, [elementProps.ref, onMount, newMapOptions])

  return (
    <section
      {...elementProps}
    >
    </section>
  )
}

export default MapContainer;
