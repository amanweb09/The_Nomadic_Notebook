const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

//BUILT-IN MIDDLEWARE
console.log(path.join(__dirname, '../public'));     //for reaching the public directory

const staticPath = path.join(__dirname, '../public');
app.use(express.static(staticPath));

//ENDPOINTS
app.get('/', (req, res) => {
    res.status(200).send('index.html');
});

app.get('/about', (req, res) => {
    res.status(200).send('about.html')
});

//SERVER LISTENING
app.listen(port, () => {
    console.log(`Server established on http://localhost:${port}`)
})