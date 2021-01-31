// API URL `https://api.openbrewerydb.org/breweries/search?query=${inputValue}`


const getData = async (inputValue) => {
  const url = `https://api.openbrewerydb.org/breweries/search?query=${inputValue}`

  try {
    let res = await axios.get(url)
    // console.log(res.data)
    const data = res.data
    // console.log(data)
    // getBrewery(data)
    getBreweryInfo(data)
  } catch (err) {
    console.log(err)
  }
}

// getData()

function getBreweryInfo(breweries) {



  breweries.forEach(brewery => {
    // console.log(brewery)



    const breweriesContainer = document.querySelector('.brew-data')
    // console.log(dataDiv)
    const breweryContainer = document.createElement('div')
    breweryContainer.classList.add('brewery')
    breweriesContainer.append(breweryContainer)
    
    const theName = document.createElement('div')
    breweryContainer.classList.add('the-Name')
    breweryContainer.append(theName)

    const type = document.createElement('div')
    breweryContainer.classList.add('type')
    breweryContainer.append(type)

    const addressOne = document.createElement('div')
    breweryContainer.classList.add('address-one')
    breweryContainer.append(addressOne)

    const addressTwo = document.createElement('div')
    breweryContainer.classList.add('address-two')
    breweryContainer.append(addressTwo)

    const addressThree = document.createElement('div')
    breweryContainer.classList.add('address-three')
    breweryContainer.append(addressThree)

    const phone = document.createElement('div')
    breweryContainer.classList.add('phone')
    breweryContainer.append(phone)

    const website = document.createElement('a')
    breweryContainer.classList.add('website')
    breweryContainer.append(website)


    theName.textContent = `
    ${brewery.name}`

    addressOne.textContent = `
    ${brewery.street}`

    addressTwo.textContent =
      `
    ${brewery.city},
    ${brewery.state}`

    addressThree.textContent = `
    ${brewery.postal_code}`

    // type.textContent = `
    // ${brewery.brewery_type}`

    phone.textContent = `
    ${brewery.phone}`

    website.textContent = `
    ${brewery.website_url}`



      


    // const brewName = brewery.name
    // const street = brewery.street
    // const city = brewery.city
    // const state = brewery.state
    // const zip = brewery.postal_code
    // const type = brewery.brewery_type
    // const phone = brewery.phone
    // const website = brewery.website_url



    // console.log(brewName, street, city, state, zip, type, phone, website)
    
    // const breweryInfo = document.createElement('div')
    // breweryInfo.textContent = 
      
    // `
    // ${brewName}
    // ${street} 
    // ${city}
    // ${state}
    // ${zip}
    // ${type}
    // ${phone}
    // ${website}`

    // dataDiv.append(breweryInfo)
    
   

  })


}

// getBreweryInfo()



const form = document.querySelector('form')
// console.log(form)

form.addEventListener('submit', (e) => {
  e.preventDefault()
  removePrevious()
  const inputValue = document.querySelector('#input-search').value
  // console.log(inputValue)
  // getBreweryInfo(inputValue)

  getData(inputValue)
})





function removePrevious() {
  const removeSearch = document.querySelector('.brew-data')
  // console.log(removeSearch.lastChild)
  while (removeSearch.lastChild) {
    removeSearch.removeChild(removeSearch.lastChild)
  }
}

removePrevious()



