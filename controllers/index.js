const express = require('express');
const router = express.Router();
const apiRoutes = require('./apiRoutes');
// const frontRoutes = require('./frontRoutes');

// router.get("/", (req,res)=>{
//     res.send('hello')
// })

// router.use('/', frontRoutes)
router.use('/api', apiRoutes)

router.get('/sessions',(req, res) => {
    res.json(req.session);
})

module.exports = router;