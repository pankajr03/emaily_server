const express = require("express")
require("./services/passport")
const authRouter = require("./routes/authRouter")
const homeRouter = require("./routes/homeRouter")

const app = express()
authRouter(app)
homeRouter(app)

const PORT = process.env.PORT || 5000
app.listen(PORT)