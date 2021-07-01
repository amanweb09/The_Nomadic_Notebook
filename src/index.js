const { urlencoded } = require('express');
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const fs = require('fs');

//BUILT-IN MIDDLEWARE

//console.log(path.join(__dirname, '../public'));     //for reaching the public directory
const staticPath = path.join(__dirname, '../public');
app.use(express.static(staticPath));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../public/views'));
console.log(path.join(__dirname, '../public/views'));

app.use(express.urlencoded());
fs.writeFileSync()
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

app.post('/contact', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let num = req.body.num;

    let userInput = `Name: ${name}, <br> Contact number: ${num}, <br> email: ${email}`;

    const message = {"message": "Your post has been submitted successfully", "content": ""};
    res.status(200).render('contact.hbs', message);
    console.log(req.body);
    
    fs.writeFileSync("output.txt", userInput);
})


//SERVER LISTENING
app.listen(port, () => {
    console.log(`Server established on http://localhost:${port}`)
})