import React, { useEffect, useRef } from "react";

const MapContainer = ({ onMount }) => {
  const elementProps = { ref: useRef(), id: "google-map" }
  const newMapOptions = {
    center: {
      lat: 1.312708,
      lng: 103.857289,
    },
    zoom: 8,
    disableDefaultUI: true,
  };

  useEffect(() => {
    const onLoad = () => {
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
      style={{ width: '400px', height: '300px'}}>
    </section>
  )
}

export default MapContainer;
