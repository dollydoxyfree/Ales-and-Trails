// API URL `https://api.openbrewerydb.org/breweries/search?query=${inputValue}`


const getData = async (inputValue) => {
  const url = `https://api.openbrewerydb.org/breweries/search?query=${inputValue}`
  
  try {
    let res = await axios.get(url)
    console.log(res.data)
    const data = res.data
    // console.log(data)
    // getBrewery(data)
    // getBreweryInfo(data)
  } catch (err) {
    console.log(err)
  }
}

// getData()

function getBreweryInfo(breweries) {
  // data.forEach((brew) => {
  //   let data = url.data.data
  //   console.log(data)


//     const dataDiv = document.querySelector('.brew-data')
//     // console.log(dataDiv)
//     const brewDiv = document.createElement('div')
//     dataDiv.append(brewDiv)


//     const breweryInfo = document.createElement('div')

//     breweryInfo.innerHTML.forEach = `
//   <h1>Name: ${Object.name}</h1>`
//     console.log(breweryInfo)
//   brewDiv.append(breweryInfo)
//   return breweryInfo
  
  breweries.forEach((brew) => {
  console.log(brew)

    


    
    
})

  
}

// getBreweryInfo()



const form = document.querySelector('form')
console.log(form)

form.addEventListener('submit', (e) => {
  e.preventDefault()
  removePrevious()
  const inputValue = document.querySelector('#input-search').value
  console.log(inputValue)
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


// const getBrewery = (brew) => {
//   console.log(brew)
//   brew.forEach(brewery => {
//     let inputValue = document.querySelector('#get-brewery').value
//     console.log(inputValue)
    
//   })
// }

// getBrewery()

