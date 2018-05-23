import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import multer from 'multer';
import swaggerUi from'swagger-ui-express';
import swaggerDocument from './swagger';

import rootRouter from './routers/index';
import { customErrorHandler, uncaughtExceptionHandler, pgPoolErrorHandler } from './middlewares/errorHandlers';
var upload = multer();


var app = express();

/***************** Middleware before routing **************/

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
/** Error handler */
//An error handling middleware
// TODOprocess.on('uncaughtException', uncaughtExceptionHandler(app));
//app.use(customErrorHandler);

//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }));

//To parse json data
app.use(bodyParser.json());

//Cookie parser
app.use(cookieParser());
/***************** Middleware before routing **************/
// let connectionConfig = databaseConfig[process.env.NODE_ENV];
// let connectionPool = mysql.createPool(connectionConfig);
/** Root Router */
app.use('/api/v1', rootRouter,function(next){
	next();
});

/***************** Middleware after routing **************/
app.use(customErrorHandler);
/***************** Middleware after routing **************/

app.listen(5001);