const endPoint = 'http://api.geonames.org/searchJSON?formatted=true&q='
const apiKey = `&username=mohammedkhaled`

const geoNames = async (data) => {
    const place = document.querySelector('#place').value
    await fetch( endPoint+place+apiKey )
    .then( res => res.json() )
    .then( res => {
        data.city = res.geonames[0].name
        data.country = res.geonames[0].countryName
        data.lat = res.geonames[0].lat
        data.lng = res.geonames[0].lng
        console.log(data)
        Client.postReq('http://localhost:8080/addCity', data)
    })
}

export default geoNames
