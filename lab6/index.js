import Express from 'express';

const App = Express();
const port = 45030;

const person = {
    name: "Halie",
    color: "Blue",
};

App.get("/", function(req, res) {
    res.send("Hello World!");
});

App.get("/person", function (req, res) {
    res.json(person);
});

App.listen(port, function() {
    console.log("Server is running!");
});

