import MongoClient from 'mongodb';

class Database {
    constructor() {
        this.connection = null;
        this.database = null;
        this.collection = null;
    }

    async connect() {
        // Wait for the connect() method to finish.
        this.connection = await MongoClient.connect(url, { useUnifiedTopology: true });
        // Select a database.
        this.database = this.connection.db("<Database>");
        // Select a collection.
        this.collection = this.database.collection("<Collection>");
    }

    async createOne() {
        await this.collection.insertOne({
            "name": "Dan"
        });
    }

    close() {
        if(this.connection != null) {
            this.connection.close();
        }
    }
}

export default Database;