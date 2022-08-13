const express = require("express")
const app = express()

const userRouter = require("./routes/user")
app.use("/users", userRouter)

app.listen(9000)

app.get("/", (req, res) => {
    res.send("Index Page")
})



