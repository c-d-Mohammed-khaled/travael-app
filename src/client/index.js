
//import checkPlace from './js/checkPlace'


/* Apis */
import geoNames from './js/geoNames'
import weatherBit from './js/weatherBit'
import pixaBay from './js/pixaBay'

/* ApiKeys */
//const apiKeys = require('./js/apiKeys');
//import apiKeys from './js/apiKeys'

/* Submit */
import submit from './js/app'

/* Route */
import postReq from './js/postReq'

/* Ui */
import updateUi from './js/updateUi'

/* Styles */
import './styles/styles.scss'

/* Fonts */
import './styles/fonts/montserrat/stylesheet.scss'
import './styles/fonts/amiri/stylesheet.scss'

const submitBtn = document.querySelector('#submit')
const white = document.querySelector('#white')

submitBtn.addEventListener('click', submit)
window.addEventListener('load', () => {
    setTimeout(() => {
        white.style.display = 'none'
    }, 2000)
})
window.addEventListener('keydown', (event) => {
    if(event.code === 13) {
        submit()
    }
})
export {
    //checkPlace,
    //apiKeys,
    geoNames,
    weatherBit,
    pixaBay,
    submit,
    postReq,
    updateUi,
}