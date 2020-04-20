

const tripData = {}
const loading = document.querySelector('#loading')
const description = document.querySelector('#description')
const result = document.querySelector('#result')
const place = document.querySelector('#place')
const alert = document.querySelector('#alert')


const submit = async (event) => {
    event.preventDefault()
    if(place.value === '') {
        alert.style.opacity = 1
    } else {
        loading.style.display = 'block'
        loading.style.opacity = 1
        alert.style.opacity = 0
        place.style.width = `${place.value.length+1}vw`
        description.style.opacity = 0
        await Client.geoNames(tripData)
        await Client.weatherBit(tripData)
        await Client.pixaBay(tripData)
        await Client.updateUi()
        description.style.display = 'none'
        result.style.opacity = 1
        loading.style.opacity = 0
        loading.style.display = 'none'
    }
    //await Client.checkPlace()
}

export default submit