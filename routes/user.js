const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("User List")
})

router.post("/", (req, res) => {
    res.send("Create New User")
})

// router.get("/:id", (req, res) => {
//     // res.send("Get a User" + req.params.id)
//     res.send(`Get a User with ID: ${req.params.id}`)
// })

// router.put("/:id", (req, res) => {
//     res.send(`Update a User with ID: ${req.params.id}`)
// })

// router.delete("/id", (req, res) => {
//     res.send(`Delete a User with ID: ${req.params.id}`)
// })

router
    .route("/:id")
    .get((req, res) => {
        res.send(`Get a User with ID: ${req.params.id}`)
    })

    .put((req, res) => {
        res.send(`Update a User with ID: ${req.params.id}`)
    })

    .delete((req, res) => {
        res.send(`Delete a User with ID: ${req.params.id}`)
    })


module.exports = router