const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const PORT = 3000;

app.use(express.static('public'));

// Set Handlebars as the view engine
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home', { layout: false, title: 'Casca' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
