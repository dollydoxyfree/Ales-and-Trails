// API docs = http://api.brewerydb.com/v2/{endpoint}/?key=be58abef0327aba1aa703a78ffa031fd

// `https://api.openbrewerydb.org/breweries/search?query=${search}`


function getBreweryData () {
  const url = 'https://cors-anywhere.herokuapp.com/https://api.brewerydb.com/v2/locations/?key=be58abef0327aba1aa703a78ffa031fd'

  axios.get(url)
    .then((res) => {
      const results = res.data.data


      console.log(results)
      removePrevious()

       results.forEach((brew) => {
        // console.log(brew)

        const dataDiv = document.querySelector('.brew-data')
        // console.log(dataDiv)
        const brewDiv = document.createElement('div')
        dataDiv.append(brewDiv)

        // const breweryName = brew.brewery.name
        // const website = brew.brewery.website
        // const description = brew.brewery.description
        // const type = brew.locationTypeDisplay
        // const established = brew.brewery.established
        // const street = brew.streetAddress
        // const city = brew.locality
        // const state = brew.region
        // const zip = brew.postalCode
        // const address = street + city + state + zip

        const breweryInfo = document.createElement('div')

        breweryInfo.innerHTML =

          `
        <h1>Brewery: ${brew.brewery.name} </h1>
        <h3>Website:${brew.brewery.website}</h3>
        <p>Description: ${brew.brewery.description} </p>
        <h6>Type: ${brew.locationTypeDisplay}</h6> 
        <h5> ${brew.brewery.established} </h5>
        <h3>Address: ${brew.streetAddress} ${brew.locality} ${brew.region} ${brew.postalCode} </h3> `

        brewDiv.append(breweryInfo)

        const logo = brew.brewery.images.squareMedium

        const image = document.createElement('img')

        image.setAttribute('src', logo)
        image.setAttribute('alt', 'brewery-logo')
        brewDiv.append(image)

        // removePrevious()
        return breweryInfo

      })
    })
    .catch((err) => {
      console.log(err)
    })
}




const form = document.querySelector('form')
console.log(form)

form.addEventListener('submit', (e) => {
  e.preventDefault()
  removePrevious()
  const inputValue = document.querySelector('#input-search').value
  console.log(inputValue)
  // getBreweryData(inputValue)
  getBreweryData(inputValue)
  
})





function removePrevious() {
  const removeSearch = document.querySelector('.brew-data')
  // console.log(removeSearch.lastChild)
  while (removeSearch.lastChild) {
    removeSearch.removeChild(removeSearch.lastChild)
  }
}

removePrevious()
