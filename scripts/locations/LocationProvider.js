let locations = []

export const getLocations = () => {
    return fetch("http://localhost:8088/locations")
        .then(res => res.json())
        .then((locationData) => {
            locations = locationData
        })
}

export const useLocations = () => {
    return locations.slice()
}

