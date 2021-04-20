import Express from 'express';
import CORS from 'cors';

const App = Express();
const port = 45030;

App.use( CORS() );
App.use( Express.json() );

// PUT: "/parts/:sku" ( Request Body )
App.put("/parts/:sku", (req, res) => {
    const sku = req.params.sku;
    
    const title = req.body.title;
    const description = req.body.description;

    res.json({
        sku: sku,
        title: title,
        description: description
    });
});

// Get: "/parts/:sku"
App.get("/parts/:sku", (req, res) => {
    const sku = req.params.sku;

    res.json ({ sku: sku });
});

App.patch("/parts/:sku", (req, res) => {
    const sku = req.params.sku;

    // req. body

    res.json;
});

App.delete("/parts/:sku", (req, res) => {
    const sku = req.params.sku;

    res.json;
});

App.listen( port );