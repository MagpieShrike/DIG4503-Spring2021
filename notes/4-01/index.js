import Express from 'express';

const App= Express();
const port = 45030;

// Can't use GET or DELETE to access body in browser
// Insomnia allows you to break this rule -- DO NOT

// Converts the body of all incoming requests to JSON
App.use(Express.json());

// Multiple Request Parameters
App.put("/:id", (req, res) => {
    res.json({
        id: req.params.id,
        body: req.body
    });
});

App.listen(port);

/*
    3.2
        POST
        firstName, lastName, favoriteColor are on req.body

    3.3
        GET
        req.parameter
*/