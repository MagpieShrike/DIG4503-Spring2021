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
    
    const result = await db.createOne( ISBN, title, author, description )

    // change output?
    res.json({ result });
});

App.get("/books/:ISBN", (req, res) => {
    const ISBN = req.params.ISBN;

    const result = 4;

    res.json({book: "Not Found"});
});

App.post("/books/search", (req, res) => {
    
});

App.patch("/books/:ISBN", (req, res) => {
    const ISBN = req.params.ISBN;

    res.json(ISBN);
});

// works
App.delete("/books/:ISBN", async (req, res) => {
    const ISBN = req.params.ISBN;

    const result = await db.deleteOne(ISBN);

    res.json(result);
});

App.listen(port);