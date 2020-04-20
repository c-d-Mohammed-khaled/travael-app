const endPoint = 'https://pixabay.com/api/?image_type=photo&category=places&q='
const apiKey = '&key=16029583-bf5e5ed8613792b6ce8c7ce12'

const pixaBay = async(data) => {
    
    const country = data.country
    
    await fetch('http://localhost:8080/result')
    .then( res => res.json() )
    .then( async (res) => {
        console.log(res)
        const city = res.city
        await fetch( endPoint+city+apiKey )
        .then( res => res.json() )
        .then( async (res) => {
            data.picture = res.hits[0].webformatURL
            console.log(data)
            await Client.postReq('http://localhost:8080/addPicture', data)
        })
    })
}

export default pixaBay