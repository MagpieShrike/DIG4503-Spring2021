// HTTP Request Methods

import Express from 'express';
import CORS from 'cors';

const App = Express();
const port = 45030;

App.use(CORS());

let arrayExample = [
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

// Request Method: PUT | Create
App.put("/people/:person", (req, res) => {
    let person = req.params.person;
    let result = {"person": person};
    arrayExample.push(person);

    res.json(result);
});

// Request Method: GET | Read
App.get("/people/:person", (req, res) => {
    let person = req.params.person;

    let result = {"person": "not found"};

    arrayExample.forEach((value) => {
        if (value == person) {
            result = {"person": value};
        }
    })

    res.json(result);
});

// Request Method: PATCH | Update
App.patch("/people/:person", (req, res) => {
    let person = req.params.person;
    let result = {"person": "not found"};
    res.json(result);
});

// Request Method: DELETE | Delete
App.delete("/people/:person", (req, res) => {
    let person = req.params.person;
    let result = {"person": person};

    arrayExample = arrayExample.filter((value) => {
        return value != person;
    })

    res.json(result);
});

App.listen(port, () => {
    console.log("Server running!");
})

