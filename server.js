const express = require("express")
const cors = require("cors")

require("./app/src/config/dbConfig").getDbConnection()

const publicRoutes = require("./app/src/routes/public.routes")
const adminRoutes = require("./app/src/routes/admin.routes")

const app = express()

//middlerware 
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

//public 
app.use("/public",publicRoutes)

//admin
app.use(adminRoutes)

app.listen(9099)
console.log("server started 9099");