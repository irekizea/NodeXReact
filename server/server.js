const express = require('express');
const app = express();
const basic = require('./routes/index');
const cors = require('cors');

app.use(cors());
app.use('/', basic);

const port = 3001;
app.listen(port, () => console.log(`listening on port ${port}`));