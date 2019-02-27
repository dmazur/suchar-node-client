const express = require('express');
const randomSucharGenerator = require('random-suchar-generator/randomSucharGenerator');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    return randomSucharGenerator().then(
        suchar => {
            res.send(suchar);
        },
        error => {
            res.status(503);
            res.send(`Error: ${error}`);
        }
    )
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
