var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/query-test',function(req,res,next){
  const {name,loc}= req.query
  res.send(`I'm  ${name} , I'm  from ${loc}`)
})

router.get('/query-path/:name/:loc',function(req,res,next){
  const {name,loc}= req.params
  res.send(`I'm  ${name} , I'm  from ${loc}`)
})

router.put('/query-headers',function(req,res,next){
  const {name,loc}= req.headers
  res.send(`I'm  ${name} , I'm  from ${loc}`)
})

router.post('/query-body',function(req,res,next){
  const {name,loc}= req.body
  res.send(`I'm  ${name} , I'm  from ${loc}`)
})



module.exports = router;
