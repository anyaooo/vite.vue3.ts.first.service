const express = require('express')

const app = express()

const router = require('./router')

const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/login', router.login)


const port = 9000
app.listen(port, () => console.log(`service running in ${port}`))
