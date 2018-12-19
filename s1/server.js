const express = require("express")

const app = express()
app.use('/', express.static('public'))

app.post('/sendmessage', (request, response) => {
    
})

app.listen(8080);

module.exports = app;