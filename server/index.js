const path = require('path');
const express = require('express');
const history = require('connect-history-api-fallback');

const parts = require('./parts');

const app = express();

app.use(history());

app.use('/api/images', express.static(path.join(__dirname, 'images')));

app.use('/', express.static(path.join(__dirname, '..', 'dist')));

app.get('/api/parts', (req, res) => res.send(parts));

app.post('/api/cart', (req, res) => setTimeout(
  () => res.status(201).send(), 800,
));

app.post('/api/sign-in', (req, res) => res.status(200).send());

app.listen(process.env.PORT || 8081,
  () => console.log('Server listening on port 8081!'));
