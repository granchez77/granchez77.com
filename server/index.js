const express = require('express');
const app = express();
const PORT  = 3000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})

app.use(express.static('client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

module.exports = app;