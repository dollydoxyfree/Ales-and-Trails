// API docs = http://api.brewerydb.com/v2/{endpoint}/?key=be58abef0327aba1aa703a78ffa031fd


const getBreweryData= () => {
  const url = 'https://cors-anywhere.herokuapp.com/https://api.brewerydb.com/v2/locations/?key=be58abef0327aba1aa703a78ffa031fd'

  axios.get(url)
    .then((res) => {
      const results = res.data.data
      // console.log(results)

      results.forEach((brew) => {
        // console.log(brew)

        const dataDiv = document.querySelector('#brew-data')
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

        // const image = brew.brewery.images.squareMedium

        const image = document.createElement('img')

        image.setAttribute('src', brew.brewery.images.squareMedium)
        image.setAttribute('alt', 'brewery-logo')
        brewDiv.append(image)

      })
    })
    .catch((err) => {
      console.log(err)
    })
}
getBreweryData()

// const getBrewery = async () => {
//   try {
//     let res = await axios.get(url)
//     // console.log(res.data.data[27])
//     } catch (err) {
//       console.log(err)
//     }
//   }

// getBrewery()



// function showBreweryData(data) {
//   console.log(data)
//   const breweryInfo = `
//     <h1> Brewery Name: ${data.name}
//     <h2> Address: ${data.streetAddress}
//     <h2> City: ${data.locality}
//     <h2> State: ${data.region} 
//     <h4> Website: ${data.website}
//     <p>  Hours: ${data.hoursOfOperationExplicitString}
//     <p>  Notes: ${data.hoursOfOperationNotes}
//     <p> Brewery Type: ${data.locationType}`

//   // removeBrewery()

//   console.log(breweryInfo)
//   let dataContainer = document.querySelector('#brewery-data')
//   dataContainer.insertAdjacentHTML('afterend', breweryInfo)
//   return breweryInfo

//   // removeBrewery()

// }

// showBreweryData()

// const form = document.querySelector('form')
// console.log(form)
// form.addEventListener('search', (e) => {
//   e.preventDefault()

//   removeBrewery()

//   const inputValue = document.querySelector('#brewery-search').value
//   console.log(inputValue)
//   fetchData(inputValue)
// })



// removeBrewery()

// function removeBrewery() {
//   const breweryContainer = document.querySelector('#get-brew')
//   while (breweryContainer.lastChild) {
//     breweryContainer.removeChild(breweryContainer.lastChild)
//   }
// }


// removeBrewery()