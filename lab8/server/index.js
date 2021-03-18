import express from 'express';
import CORS from 'cors';

const App = express();
const port = 45030;

App.use(CORS());

const names = [
    'Cortney',
    'Dewayne',
    'Trenton',
    'Pamala',
    'Ettie',
    'Errol',
    'Lorrie',
    'Hang',
    'Lauryn',
    'Caterina',
    'Isa',
    'Marcela'
];

App.put("/people/:person", (req, res) => {
    let person = req.params.person;
    let result = {"person": person};
    names.push(person);

    res.json(result);
});

App.get("/people/:person", (req, res) => {
    let person = req.params.person;

    let result = {"person": "not found"};

    names.forEach((value) => {
        if (value == person) {
            result = {"person": value};
        }
    })

    res.json(result);
});

App.get("/search/:name", (req, res) => {
    //let result = {search: "not found"};

    let query = req.params.name;

    const result = names.filter(value => value.includes(query));

    res.json(result);
});

App.listen(port, () => {
    console.log("Server running!");
});

