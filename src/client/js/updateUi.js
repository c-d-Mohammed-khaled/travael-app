

const updateUi = async () => {
    const location = document.querySelector('#location')
    const weather = document.querySelector('#weather')
    const picture = document.querySelector('#picture')
    await fetch('http://localhost:8080/result')
    .then( res => res.json() )
    .then( res => {
        location.textContent = `My trip to: ${res.city}, ${res.country}`
        weather.textContent = `Weather: ${res.weather}`
        picture.setAttribute('src', '')
        picture.setAttribute('src', res.picture)
    })
}


export default updateUi