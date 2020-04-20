const endPoint = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?inputtype=textquery&fields=place_id&input='
const apiKey = '&key=AIzaSyA_8NYuKlETa8uIXSmL09qlzACJtcVAKmo'

const checkPlace = () => {
    const place = document.querySelector('#place').value
    fetch( endPoint+place+apiKey )
    .then( res => res.json() )
    .then( res => {
        console.log(res)
    })
}

export default checkPlace