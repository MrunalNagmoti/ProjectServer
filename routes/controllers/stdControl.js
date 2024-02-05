var express = require('express')

var router = express.Router()


var { getStdService, regStdService  } = require('../services/studentService')

//http://localhost:2020/stdCtl/reg-std
// post

router.post('/reg-std',async function(req,res){ // receive the request
    // take data from request
    console.log('get reg controller')
    var result = await regStdService(req)
    res.send(result)
    // console.log("executed")

})

//http://localhost:2020/stdCtl/get-std
// get

router.get("/get-std", async function (req,res) {// receive the request
    // take data from request
    console.log('get-std controller')
    var result = await getStdService()
    // return result;
    res.send(result)
    
})

module.exports = router;