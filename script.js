// API docs = http://api.brewerydb.com/v2/{endpoint}/?key=be58abef0327aba1aa703a78ffa031fd


const getBreweryData = () => {
  const url = 'https://cors-anywhere.herokuapp.com/https://api.brewerydb.com/v2/locations/?key=be58abef0327aba1aa703a78ffa031fd'

  axios.get(url)
    .then((res) => {
      const results = res.data.data
      results.splice(42, 1)

      // console.log(results)
      removePrevious()

      results.forEach((brew) => {
        // console.log(brew)

        const dataDiv = document.querySelector('.brew-data')
        // console.log(dataDiv)
        const brewDiv = document.createElement('div')
        dataDiv.append(brewDiv)

        const breweryName = brew.brewery.name
        const website = brew.brewery.website
        const description = brew.brewery.description
        const type = brew.locationTypeDisplay
        const established = brew.brewery.established
        const street = brew.streetAddress
        const city = brew.locality
        const state = brew.region
        const zip = brew.postalCode
        const address = street + city + state + zip

        const breweryInfo = document.createElement('div')
        breweryInfo.textContent = `${breweryName} ${website} ${description} ${type} ${established} ${address} `
        brewDiv.append(breweryInfo)

        const logo = brew.brewery.images.squareMedium

        const image = document.createElement('img')

        image.setAttribute('src', logo)
        image.setAttribute('alt', 'brewery-logo')
        brewDiv.append(image)

        // removePrevious()

      })
    })
    .catch((err) => {
      console.log(err)
    })
}


const button = document.querySelector('button')
// console.log(button)
button.addEventListener('click', getBreweryData)

function removePrevious() {
  const removeSearch = document.querySelector('.brew-data')
  console.log(removeSearch.lastChild)
  while (removeSearch.lastChild) {
    removeSearch.removeChild(removeSearch.lastChild)
  }
}

removePrevious()

