const { urlencoded } = require('express');
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

//BUILT-IN MIDDLEWARE

//console.log(path.join(__dirname, '../public'));     //for reaching the public directory
const staticPath = path.join(__dirname, '../public');
app.use(express.static(staticPath));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../public/views'));
console.log(path.join(__dirname, '../public/views'));


//ENDPOINTS
app.get('/', (req, res) => {
    res.status(200).render('index.hbs');
});

app.get('/about', (req, res) => {
    res.status(200).render('about.hbs');
});

app.get('/blog', (req, res) => {
    res.status(200).render('blog.hbs');
});



//SERVER LISTENING
app.listen(port, () => {
    console.log(`Server established on http://localhost:${port}`)
})