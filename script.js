// API docs = http://api.brewerydb.com/v2/{endpoint}/?key=be58abef0327aba1aa703a78ffa031fd

const url = 'https://cors-anywhere.herokuapp.com/https://api.brewerydb.com/v2/locations/?key=be58abef0327aba1aa703a78ffa031fd'

axios.get(url)
  .then((res) => {
    const results = res.data.data
    console.log(results)
})
  .catch((err) => {
  console.log(err)
  })



const getBrewery = async () => {
  try {
    let res = await axios.get(url)
    // console.log(res.data.data[27])
    } catch (err) {
      console.log(err)
    }
  }

getBrewery()



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