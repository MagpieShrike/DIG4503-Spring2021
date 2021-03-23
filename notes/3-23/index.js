import MongoClient from 'mongodb';

const URL = "mongodb+srv://HalieChalkley:UHXMD3Jo0mDX5ovh@cluster0.yuzwq.mongodb.net";

MongoClient.connect(URL, {useUnifiedTopology: true})
.then(connection => {
    let database = connection.db("sample_restaurants");     // select a database
    let collection = database.collection("restaurants");    // select a collection within the database

    let cursor = collection.find({"grades.grade": "A", cuisine: "Bakery"});    // a cursor is a live version of the data
                                                                                // it gives us the most up to date version until we do something with it
    cursor.forEach(document => {
        console.log(document);      // code will keep running until the connection is closed
    }, () => {
        connection.close();         // close the connection
    });
})
.catch(error => {
    console.log("Error " + error);
});