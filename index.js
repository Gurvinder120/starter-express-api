const express = require('express');
const cors = require("cors");
app.use(cors())
const app = express()
app.post('/demo', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.listen(process.env.PORT || 3000)
