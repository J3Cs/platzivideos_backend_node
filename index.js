const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies');

const { errorLogs, wrapError, errorHandler } = require('./utils/middleware/errorHandlers')
const notFoundHandler = require('./utils/middleware/notFoundHandler');
app.use(express.json());

moviesApi(app);
app.use(notFoundHandler);
//Error Handlers
app.use(errorLogs);
app.use(wrapError);
app.use(errorHandler);

app.listen(config.port), function() {
    console.log(`listening in http://localhost:${config.port}`);
} 