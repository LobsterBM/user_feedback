const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const events = require('./events');

const connection = mysql.createConnection({
  host     : 'kandula.db.elephantsql.com',
  user     : 'pbmtlhnw',
  password : 'zxkwKJAUmzv77yzlG_5bRV6YrZJ2_f_N',
  database : 'pbmtlhnw'
});

connection.connect();

const port = process.env.PORT || 8080;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(events(connection));

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
