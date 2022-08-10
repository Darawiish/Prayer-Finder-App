let masjids = require('./db.json');
let userInfo = require('./userinfodb.json')


module.exports = {
    getMasjids: (req, res) => {
        const {zip, time, city} = req.query
        let filtered = masjids.slice()
        if (zip) filtered = filtered.filter(obj => obj.zipcode === zip)
        if (time) filtered = filtered.filter(obj => obj.time.includes(time.toLowerCase()))
        if (city) filtered = filtered.filter(obj => obj.city.toLowerCase().includes(city.toLowerCase()))
        res.status(200).send(filtered)
    },
    deleteMasjids: (req, res) => {
        let index = masjids.findIndex(elem => elem.id === +req.params.id)
        masjids.splice(index, 1);
        res.status(200).send(masjids)
    },
    createMasjids: (req, res) => {
        // console.log(req, body)
        const{name, address} = req.body
    },

    adduserinfo: (req, res) => {
        
        console.log(req.body.userfirstname)
        console.log(req.body.useremail)
        
        userInfo.push(req.body)

        console.log(userInfo)

        res.status(200).send(userInfo)
    }
}



