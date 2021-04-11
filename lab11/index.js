import Express from 'express';
import CORS from 'cors';
import Database from './Database.js';

const App = Express();
const port = 45030;

App.use(Express.json());

const db = new Database();
db.connect("lab11", "books");

// works 
App.put("/books/:ISBN", async (req, res) => {
    const ISBN = req.params.ISBN;

    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;
    
    const result = await db.createOne( ISBN, title, author, description );

    res.json({ result });
});

// works
App.get("/books/:ISBN", async (req, res) => {
    const ISBN = req.params.ISBN;

    const result = await db.readOne( ISBN );

    res.json( result );
});

App.post("/books/search", (req, res) => {
    
});

// works
App.patch("/books/:ISBN", async (req, res) => {
    const ISBN = req.params.ISBN;

    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;

    const result = await db.updateOne( ISBN, title, author, description );

    res.json( result );
});

// works
App.delete("/books/:ISBN", async (req, res) => {
    const ISBN = req.params.ISBN;

    const result = await db.deleteOne( ISBN );

    res.json( result );
});

App.listen(port);