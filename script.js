// API docs = http://api.brewerydb.com/v2/{endpoint}/?key=be58abef0327aba1aa703a78ffa031fd



const getBreweryData = () => {
  const url = 'https://cors-anywhere.herokuapp.com/https://api.brewerydb.com/v2/locations/?key=be58abef0327aba1aa703a78ffa031fd'

  axios.get(url)
    .then((res) => {
      const results = res.data.data
      

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

        breweryInfo.textContent = `
        Brewery: ${breweryName} 
        Website:${website}
        Description: ${description} 
        Type: ${type} 
        ${established}
        Address: ${address} `

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


const form = document.querySelector('form')
console.log(form)

form.addEventListener('submit', (e) => {
  e.preventDefault()
    removePrevious()
  const inputValue = document.querySelector('#input-search').value
  console.log(inputValue)
  getBreweryData(inputValue)
  
})





// const button = document.querySelector('submit')
// // console.log(button)
// button.addEventListener('click', getBreweryData)

function removePrevious() {
  const removeSearch = document.querySelector('.brew-data')
  // console.log(removeSearch.lastChild)
  while (removeSearch.lastChild) {
    removeSearch.removeChild(removeSearch.lastChild)
  }
}

removePrevious()

