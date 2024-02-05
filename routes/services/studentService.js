var { regStdDAO,getStdDAO}=require('../dao/studentDao')

async function regStdService(req){
    const { data } = req.body
    console.log('reg service')
    var result = await regStdDAO(data)
    return result;
}

async function getStdService(){
    console.log('get service')
    var result= await getStdDAO()
    return result;
}

module.exports={
    regStdService,
    getStdService
}