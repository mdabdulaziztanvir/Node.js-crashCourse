const express = require('express');

const app = express();
// register view engine
app.set('view engine', 'ejs');



app.listen(3000);

app.get('/', (req, res) => {
    const blogs =[
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Yoshi finds eggs2', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Yoshi finds eggs3', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];
    res.render('index', {title: 'home', blogs} );
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});

});
// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

app.get('/blogs/create', (req, res)=>{
    res.render('create', {title: 'Create'});
});

// page not found 404
app.use((req, res) =>{
    res.status(404).render('404', {title: '404'});
});
