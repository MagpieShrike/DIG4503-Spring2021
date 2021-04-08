import Express from 'express';
import Database from './Database.js';

const App = Express();
const port = 45030;

// Allows us to use request bodies and translates it out of JSON
App.use(Express.json());

// Creating a new Database object
const db = new Database();
// Connect to MongoDB server
db.connect("portfolio2", "HalieChalkley");

// PUT ( App.put() ) -> Database.createOne() -> collection.insertOne()
App.put("/games/:id", (req, res) => {
    // Request parameter id
    const id = req.params.id;

    // Request body properties
    const title = req.body.title;
    const rating = req.body.rating;
    const review = req.body.review;

    res.json({
        id: id,
        title: title,
        rating: rating,
        review: review
    });
});

// GET ( App.get() ) -> Database.readOne() -> collection.findOne()
App.get("/games/:id", (req, res) => {
    const id = req.params.id;

    res.json({game: "not found"});
});

// PATCH ( App.patch() ) -> Database.updateOne() -> collection.updateOne()
App.patch("/games/:id", async (req, res) => {
    const id = req.params.id;

    // Request body properties
    const title = req.body.title;
    const rating = req.body.rating;
    const review = req.body.review;

    const result = await db.updateOne(id, title);

    res.json(result);
});

// DELETE ( App.delete() ) -> Database.deleteOne() -> collection.deleteOne()
App.delete("/games/:id", async (req, res) => {
    // Request parameter
    const id = req.params.id;

    // Talk to database code
    const result = await db.deleteOne(id);

    res.json(result);
});

App.listen(port);