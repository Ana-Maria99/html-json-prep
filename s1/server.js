const express = require("express")

const app = express()
app.use('/', express.static('public'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.post('/sendmessage', (request, response) => {
    response.send(request.body)
})

app.listen(8080);

module.exports = app;