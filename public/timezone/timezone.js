
let date = new Date()

document.querySelector('#currentTime').innerHTML = date

let timeZone = Intl.supportedValuesOf('timeZone')

timeZone.forEach(element => {
    let option = document.createElement('option')
    option.value = element
    option.textContent = element
    document.querySelector('#country').appendChild(option)

});


const SelectCountry = () => {

    let country = document.querySelector('#country').value
    let data = date.toLocaleString("en-us", {
        timeZone: country
    })
    document.querySelector('#timezone').innerHTML = country + "  :  " + data
}
