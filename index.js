const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const PORT = 3000;
const nodemailer = require('nodemailer');

app.use(express.static('public'));
app.use(express.json());

// Set Handlebars as the view engine
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home', { layout: false, title: 'Casca' });
});

app.post('/send_email', async (req, res) => {
  try {
    console.log(req.body)
      // Create a transporter object
      const transporter = nodemailer.createTransport({
          service: 'gmail', // For Gmail; modify for other providers
          auth: {
              user: 'rahulojha22@gmail.com', // Your email
              pass: 'nkkbozwbeaxcrxax', // Your email password
          },
      });

      // Email options
      const mailOptions = {
          from: 'rahulojha22@gmail.com',
          to: 'rahulojha22@gmail.com',
          subject: 'subject',
          text: 'text',
      };

      // Send the email
      const info = await transporter.sendMail(mailOptions);
      res.send({success: true})
  } catch (error) {
      console.error('Error sending email:', error);
      res.send({success: false})
  }
});

app.get('/demo', (req, res) => {
  res.render('demo', { layout: false, title: 'Casca' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
