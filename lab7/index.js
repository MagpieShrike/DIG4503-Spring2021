import Express from 'express';

const App = Express();
const port = 45030;

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

App.get("/people/:person", (req, res) => {
    let result = {name: "not found"};

    let arrayResult = [];

    names.forEach((value) => {
        if(value.includes(req.params.person)) {
            arrayResult.push(value);
        }
    });

    if (arrayResult.length > 0) {
        result = {name: arrayResult};
    }

    res.json(result);
});

App.get("/search/:name", (req, res) => {
    let result = {search: "not found"};

    let query = req.params.name;

    let filter = names.filter(el => 
        el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
      

    if (filter.length > 0) {
        result = {search: filter};
    }

    res.json(result);
});

App.listen(port, () => {
    console.log("Server running!");
});