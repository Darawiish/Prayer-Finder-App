const express = require('express');
const cors = require ('cors')

const app = express ();

app.use(express.json());
app.use(cors());


const {getMasjids, deleteMasjids, createMasjids, adduserinfo} = require('./controller.js')



app.get('/api/masjids', getMasjids)
app.delete('/api/masjids/:id', deleteMasjids)
app.post('/api/masjids', createMasjids)
// app.put('/api/masjids/:id', updateMasjids)

app.post('/api/masjids/userinfo', adduserinfo)
const port = process.env.PORT || 4004 


app.listen(port, () => console.log(`Listening on port ${port}`))

