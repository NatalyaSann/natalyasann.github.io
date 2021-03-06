const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config/config');
const app = express();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use(require('./routes/files'));

mongoose.connect(config.dbURL, config.dbOptions);
mongoose.connection
    .once('open', () => {
        console.log(`Mongoose - successful connection ...`);
        app.listen(process.env.PORT || config.port,
            () => console.log(`Server start on port ${config.port} ...`))
    })
    .on('error', error => console.warn(error));
