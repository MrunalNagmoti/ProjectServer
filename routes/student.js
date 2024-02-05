var express = require('express')

var router = express.Router()

//http://localhost:2020/std/reg-std
// post

router.post('/reg-std',function(req,res){ // receive the request
    // take data from request
    // connect db
    // perform required operation
    // prepare response
    // send res back to client
    res.send("executed")
    // console.log("executed")

})
//localhost:2020/std/get-std
// put
router.get("/get-std", function (req,res) {// receive the request
    // take data from request
    // connect db
    // perform required operation
    // prepare response
    // send res back to client
    res.send("execute get-std")
    // console.log("executed get-std")
})

module.exports = router;