const addRestaurants = (restaurants) => map => {
  console.log('adding markers')
  restaurants.forEach((restaurant, index) => {
    const marker = new window.google.maps.Marker({
      map,
      position: restaurant.coords,
      label: `${index + 1}`,
      title: restaurant.name,
    })
    marker.addListener('click', () => {
      console.log('clicked on marker')
    })
  })
}

const restaurants = [
  {
    coords: {
      lat: 1.312708,
      lng: 103.857289,
    },
    name: 'Restaurant name',
  }
]

if (typeof window !== 'undefined') {
  window.initMap = function() {
    const map = new window.google.maps.Map(document.getElementById('google-map'), {
      center:  {
        lat: 1.312708,
        lng: 103.857289,
      },
      zoom: 9,
      disableDefaultUI: true,
    })
    const marker = new window.google.maps.Marker({position: {
      lat: 1.312708,
      lng: 103.857289,
    }, map: map});
  }
  addRestaurants(restaurants)
}
