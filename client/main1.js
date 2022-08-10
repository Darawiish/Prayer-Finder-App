const masjidsContainer = document.querySelector('#masjids-container')
const searchZip = document.querySelector("#search-zip");
const searchTime = document.querySelector("#search-time");
const searchCity = document.querySelector("#search-city");
const form = document.querySelector('#masjids-card')


const baseURL = `/api/masjids`

document.getElementById("search").addEventListener("click", () => {
    getMasjids(searchZip.value, searchTime.value, searchCity.value)
})


const masjidsCallback = (res) => {
    console.log(res.data)
    createMasjids(res.data)

} 

const errCallback = err => console.log(err)

const getMasjids = (zip, time, city) => axios.get(`${baseURL}?zip=${zip}&time=${time}&city=${city}`).then(masjidsCallback).catch(errCallback)




function submitHandler(e) {
    
    e.preventDefault()

    //Error if statement to check length of zip code and validity. serachzip.value > 5. crosscheck with array in front end. 
    
            if (searchZip.value.length === 5 || searchZip.value.length === 0){
                getMasjids(searchZip.value, searchTime.value, searchCity.value)
            } else {
                return alert("Invalid Zip length")
            }
        searchZip.value = ""
        searchTime.value= ""
        searchCity.value= ""
}




function createMasjids(masjids) {
    masjidsContainer.innerHTML = ""
    masjids.map(masjid => { 
        const masjidsCard = document.createElement('div')
        masjidsCard.classList.add('masjids-card')
        console.log(masjid.imageUrl)
        masjidsCard.innerHTML = 
    `<img alt='masjids-cover' src='${masjid.imageUrl}' class="masjids-cover"/>
        <p class="masjids-title">${masjid.name}</p>
        <p class="masjids-address">${masjid.address}</p>
        <p class="masjids-time">${masjid.time}</p>
        <a class="masjids-url" href='${masjid.url}'target="_blank">Visit us here</a>`
    
        masjidsContainer.appendChild(masjidsCard);
    }
    )}
 

function displayMasjids(arr) {
    masjidsContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createMasjidsCard(arr[i])
    }
}



form.addEventListener('submit', submitHandler)
