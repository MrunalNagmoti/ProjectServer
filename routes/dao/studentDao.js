var mongo = require('mongodb')
var getDBConnect = require("../../common/dbCommon")

async function regStdDAO(data) {
    try {
        console.log('reg DAO')
        var db = await getDBConnect()
        var collection = db.collection("students")
        var result = await collection.insertOne(data)
        // console.log(data)
        return result;
    } catch (e) {
        console.log("regStdDao", e.message)
    } finally {

    }

}

async function getStdDAO() {
    try {
        console.log('get DAO')
        var db = await getDBConnect()
        var collection = db.collection("students")
        var result = await collection.find().toArray()
        return result;
    } catch (e) {
        console.error("getStdDAO",e.message)
    } finally {

    }
}

module.exports = {
    regStdDAO,
    getStdDAO
}