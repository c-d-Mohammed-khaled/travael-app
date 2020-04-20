const endPoint = 'https://api.weatherbit.io/v2.0/current?'
const apiKey = '&key=d0f5c1f734b046ab967782d301218719'

const weatherbit = async (data) => {
    const lat = `lat=${data.lat}`
    const lng = `&lon=${data.lng}`
    await fetch( endPoint+lat+lng+apiKey )
    .then( res => res.json() )
    .then( res => {
        data = {
            weather: res.data[0].weather.description
        }
        console.log(data)
        Client.postReq('http://localhost:8080/addWeather', data)
    })
}

export default weatherbit