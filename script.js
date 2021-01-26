// Async/Await w/ Try/Catch
// API docs  http://api.brewerydb.com/v2/{endpoint}/?key=be58abef0327aba1aa703a78ffa031fd



async function fetchData(brewery) {

  const url = `http://api.brewerydb.com/v2/brewery/KRB0Bo/${location}/?key=be58abef0327aba1aa703a78ffa031fd`
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