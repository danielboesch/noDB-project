const express = require('express')

const app = express()
const PORT = 4444

app.use(express.json())


const podCtrl = require('./controllers/podcastController')


app.get('/api/podcasts', podCtrl.getPods)
app.get('/api/subscriptions', podCtrl.getSubs)

app.post('/api/podcasts', podCtrl.subscribe)

app.delete('/api/podcasts/:id', podCtrl.unsubscribe)


//edit
app.put('/api/subscriptions/:id', podCtrl.editRating)




app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

