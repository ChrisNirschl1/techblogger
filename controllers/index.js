const express = require('express');
const router = express.Router();
const apiRoutes = require('./apiRoutes');
const frontEndRoutes = require('./frontEndRoutes');

// router.get("/", (req,res)=>{
//     res.send('hello')
// })

router.use('/', frontEndRoutes)
router.use('/api', apiRoutes)

router.get('/sessions',(req, res) => {
    res.json(req.session);
})

module.exports = router;