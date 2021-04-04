import MongoClient from 'mongodb';

const URL = "mongodb+srv://HalieChalkley:UHXMD3Jo0mDX5ovh@cluster0.yuzwq.mongodb.net";

class Database {
    constructor() {
        this.connection = null;
        this.database = null;
        this.collection = null;
    }

    async connect() {
        // Wait for the connect() method to finish.
        this.connection = await MongoClient.connect( URL, { useUnifiedTopology: true });
        //console.log(this.connection);   // is never called, readOne runs before connect?
        // Select a database.
        this.database = this.connection.db("lab10");
        // Select a collection.
        this.collection = this.database.collection("people");
    }

    async createOne(person) {
        this.connect();
        if(this.collection != null) {
            return await this.collection.insertOne(person);
        }
        console.log(this.collection); // returns null, collection was not overwritten
    }

     async readOne(person) {
        this.connect();
        if(this.collection != null) {
            return await this.collection.findOne({firstName: person}).catch({person: "not found"});
        }
        console.log(this.collection); // returns null, collection was not overwritten
        // doesn't work even when connection is forced
    }

    close() {
        if(this.connection != null) {
            this.connection.close();
        }
    }
}

export default Database;