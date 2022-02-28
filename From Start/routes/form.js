const express = require('express');
const router = express.Router();



router.post('/', (req, res, next) => {
    res.send("Form Submit")
})

// Agar request URL sa hit horahi hy to get ki request hogi

router.get('/', (req, res, next) => {
    res.send(`
    <form form action="/form" method="POST">
    <input name="data"/>
    <button>Submit</button>
    </form>
        `)
})



module.exports = router;