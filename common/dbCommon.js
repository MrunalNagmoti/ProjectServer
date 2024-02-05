var mongo = require("mongodb")
async function getDBConnect() {
    var mongoClient = mongo.MongoClient
    var url = "mongodb+srv://u1:p1@sudata30.lxoyolm.mongodb.net/"
    var server = await mongoClient.connect(url)
    var db = server.db("school")
    return db
}

module.exports = getDBConnect


