const express = require("express")
const cors = require("cors")
const dotEnv = require("dotenv")


dotEnv.config()


const app = express()
const PORT = process.env.PORT || 5050


app.use(express.json())
app.use(cors())


app.get("/getData", (req, res) => {
    res.send("server is running")
})



app.listen(PORT, () => {
    console.log(`Server is listening to PORT ${PORT}...`)
})