 // Import the Express app

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const rootRouter = require('./routes/index'); 
require('./db/db'); 
const{server,app}=require("./Socket/socket")

app.use(cors());
app.use(express.json());
app.use('/api/v1', rootRouter);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV !== 'production') {
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;