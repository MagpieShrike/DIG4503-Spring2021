import e from 'express';
import MongoClient from 'mongodb';

const URL = "mongodb+srv://HalieChalkley:UHXMD3Jo0mDX5ovh@cluster0.yuzwq.mongodb.net";

class Database {
    constructor() {
        this.connection = null;
        this.database = null;
        this. collection = null;
    };

    async connect( database, collection ) {
        this.connection = await MongoClient.connect( URL, { useUnifiedTopology: true } );
        this.database = this.connection.db( database );
        this.collection = this.database.collection( collection );
    };

    async createOne( ISBN, title, author, description ) {
        if ( this.collection != null ) {
            return await this.collection.insertOne( { "ISBN": ISBN, "title": title, "author": author, "description": description } );
        } else {
            return "could not connect to database";
        };
    };

    async readOne( ISBN ) {
        if ( this.collection != null ) {
            const result = await this.collection.findOne( { "ISBN": ISBN } );
            if ( result != null ) {
                return result;
            } else {
                return { "book": "not found" };
            }
        } else {
            return "could not connect to database";
        };
    };

    async updateOne( ISBN, title, author, description ) {
        if ( this.collection != null ) {
            let updated = "";
            let result = "";

            if ( title != null ) {
                result = await this.collection.updateOne({"ISBN": ISBN}, {$set: {"title": title}});

                if ( author != null ) {
                    result = await this.collection.updateOne({"ISBN": ISBN}, {$set: {"author": author}});

                    if ( description != null ) {
                        // title. author, description
                        result = await this.collection.updateOne({"ISBN": ISBN}, {$set: {"description": description}});
                        updated = { "title": title, "author": author, "description": description };
                    } else {
                        // title, author
                        updated = { "title": title, "author": author };
                    }
                } else {
                    // title
                    updated = { "title": title };
                }

            } else if ( author != null ) {
                result = await this.collection.updateOne({"ISBN": ISBN}, {$set: {"author": author}});

                if ( description != null ) {
                    // author, description
                    result = await this.collection.updateOne({"ISBN": ISBN}, {$set: {"description": description}});
                    updated = { "author": author, "description": description };
                } else {
                    // author
                    updated = { "author": author };
                }
            } else if ( description != null ) {
                // description
                result = await this.collection.updateOne({"ISBN": ISBN}, {$set: {"description": description}});
                updated = { "description": description };
            } else {
                return "nothing to update";
            }

            return updated;
        } else {
            return "could not connect to database";
        };
    };

    async deleteOne( ISBN ) {
        if (this.collection != null) {
            const result = await this.collection.deleteOne( { "ISBN": ISBN } );
            return { "books": result.deletedCount };
        } else {
            return "could not connect to database";
        };
    };
};

export default Database;