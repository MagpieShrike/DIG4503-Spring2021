import Express from 'express';

const App = Express();
const port = 45030;

App.use(Express.json());

App.put("/teams/:team", (req, res) => {
    res.json({
        body: req.body,
        requestParameter: req.params.team
    })
});

App.get("/teams/:team", (req, res) => {
    
});

App.post("/teams/search", (req, res) => {
    res.json({
        URLParameters: req.query
    })
});

App.patch("/teams/:team", (req, res) => {
    res.json({
        body: req.body,
        requestParameter: req.params.team
    })
});

App.delete("/teams/:team", (req, res) => {
    
});

App.listen(port);