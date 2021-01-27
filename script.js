// API docs = http://api.brewerydb.com/v2/{endpoint}/?key=be58abef0327aba1aa703a78ffa031fd
const url = "https://api.brewerydb.com/v2/locations/?key=be58abef0327aba1aa703a78ffa031fd"


// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });

axios.get(url)
  .then((res) => {
  console.log(res)
})
  .catch((err) => {
  console.log(err)
})

// const getBrewery = async () => {
//   // async function fetchData(brewery) {

//   try {
//     const apiKey= 'be58abef0327aba1aa703a78ffa031fd'
//     let res = await axios.get("http://api.brewerydb.com/v2/")
//     console.log(res.data.message)
//     // let endpont = body.querySelector('#brewery-search').value
//     let brewerySearch = Object.keys(res.data.message)
   
//     console.log(brewerySearch)
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

//   removeBrewery()

//   console.log(breweryInfo)
//   let dataContainer = document.querySelector('#brewery-data')
//   dataContainer.insertAdjacentHTML('afterend', breweryInfo)
//   return breweryInfo

//   removeBrewery()

// }

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