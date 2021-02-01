// API URL `https://api.openbrewerydb.org/breweries/search?query=${inputValue}`


const getData = async (inputValue) => {
  const url = `https://api.openbrewerydb.org/breweries/search?query=${inputValue}`

  try {
    let res = await axios.get(url)
    const data = res.data
    getBreweryInfo(data)
  } catch (err) {
    console.log(err)
  }
}

// Pulling data from API: For Each results return and append to div below search from
function getBreweryInfo(breweries) {

  breweries.forEach(brewery => {
    //  container holding all results
    const breweriesContainer = document.querySelector('.brew-data')
    
    // container per result containing Info for each
    const breweryContainer = document.createElement('div')
    breweryContainer.classList.add('brewery')
    breweriesContainer.append(breweryContainer)

    // brewery name
    const theName = document.createElement('div')
    breweryContainer.classList.add('the-Name')
    breweryContainer.append(theName)

    theName.textContent = `
    ${brewery.name}`

    // brewery type (micro , brewpub, etc.)
    const type = document.createElement('div')
    breweryContainer.classList.add('type')
    breweryContainer.append(type)

    type.textContent = `
    ${brewery.brewery_type}`

    // address: street
    const addressOne = document.createElement('div')
    breweryContainer.classList.add('address-one')
    breweryContainer.append(addressOne)

    addressOne.textContent = `
    ${brewery.street}`

    // address: city, state
    const addressTwo = document.createElement('div')
    breweryContainer.classList.add('address-two')
    breweryContainer.append(addressTwo)
    
    addressTwo.textContent =`
    ${brewery.city},
    ${brewery.state}`
    
    // address: zip(postal code)
    const addressThree = document.createElement('div')
    breweryContainer.classList.add('address-three')
    breweryContainer.append(addressThree)

    addressThree.textContent = `
    ${brewery.postal_code}`

    // brewery phone #
    const phone = document.createElement('div')
    breweryContainer.classList.add('phone')
    breweryContainer.append(phone)

    phone.textContent = `
    ${brewery.phone}`

    //  brewery website URL
    const website = document.createElement('a')
    breweryContainer.classList.add('website')
    breweryContainer.append(website)

    website.textContent = `
    ${brewery.website_url}`

  })

}

// user perform search; merging inputValue with API endpoint
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  removePrevious()
  const inputValue = document.querySelector('#input-search').value
  getData(inputValue)
})

// clear previous appended children from user search to prevent stack up
function removePrevious() {
  const removeSearch = document.querySelector('.brew-data')
  while (removeSearch.lastChild) {
    removeSearch.removeChild(removeSearch.lastChild)
  }
}

removePrevious()