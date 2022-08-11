const infoForm = document.querySelector('#personal-info')
const username = document.querySelector('#add-name')
const useremail = document.querySelector('#add-email')

const baseURL = `/api/masjids`

const errCallback = err => console.log(err)


const userInfo = (body) => axios.post(`${baseURL}/userinfo`, body).then(data => {console.log(data)}).catch(errCallback)


function addInfo(e) {
   
    e.preventDefault()
    
    console.log(username.value)
    console.log(useremail.value)

    let bodyobj = {
        userfirstname: username.value,
        useremail: useremail.value
    }
    alert(`"User ${username.value}, ${useremail.value} has been successfully added:"`)

    userInfo(bodyobj)

    useremail.value= ""
    username.value= ""
}



infoForm.addEventListener('submit', addInfo)
