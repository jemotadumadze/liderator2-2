
import {MongoClient, ObjectId} from 'mongodb'
import {Connection} from '../connection.js'
import bodyParser from "body-parser";
import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";
import {Client} from "./module/users.js";


const modules = {
    client:Client,
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.all("/api/:controller/:method", (req, res) => {
    if (req.params.controller) {
        modules[req.params.controller][req.params.method].call(
            null,
            req,
            res,
            req.body
        );
    }
});

app.get(['/*', '/'], (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})


MongoClient.connect(
    'mongodb://database:27017',
    (error, client) => {
        if (error) {
            return console.error(error);
        }

        Connection.set(client.db('bog_db'));

    },
);

app.listen(8083, () => {
    console.log('App is running...');
})
