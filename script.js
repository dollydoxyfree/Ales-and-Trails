// API docs  http://api.brewerydb.com/v2/{endpoint}/?key=be58abef0327aba1aa703a78ffa031fd

async function fetchData(brewery) {

  const url = `http://api.brewerydb.com/v2/brewery/KRB0Bo/${endpoint}/?key=be58abef0327aba1aa703a78ffa031fd`
  try {
    let res = await axios.get(url)
    console.log(res.data[0])
    const data = res.data[0]
    removeBrewery()
    showBreweryData(data)
  } catch (err) {
    console.log(err)
  }
}

function showBreweryData(data) {
  console.log(data)
  const breweryInfo = `
    <h1> Brewery Name: ${data.name}
    <h2> Address: ${data.streetAddress}
    <h2> City: ${data.locality}
    <h2> State: ${data.region} 
    <h4> Website: ${data.website}
    <p>  Hours: ${data.hoursOfOperationExplicitString}
    <p>  Notes: ${data.hoursOfOperationNotes}
    <p> Brewery Type: ${data.locationType}`
  
  removeBrewery()

  console.log(breweryInfo)
  let dataContainer = document.querySelector('#brewery-data')
  dataContainer.insertAdjacentHTML('afterend', breweryInfo)
  return breweryInfo

  removeBrewery()
  
}

const form = document.querySelector('form')
 console.log(form)
 form.addEventListener('submit', (e) => {
   e.preventDefault()

   removeBrewery()

   const inputValue = document.querySelector('#brewery-search').value
   console.log(inputValue)
   fetchData(inputValue)
 })

 removeBrewery()
    
function removeBrewery() {
  const breweryContainer = document.querySelector('#brewery-data')
  while (breweryContainer.lastChild) {
    breweryContainer.removeChild(breweryContainer.lastChild)
  }
}

removeBrewery()