import {MongoClient, ObjectId} from 'mongodb'
import {Connection} from '../connection.js'
import bodyParser from "body-parser";
import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";
import {Client} from "./module/users.js";
import WebSocket, {WebSocketServer} from "ws";


const modules = {
    client: Client,
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.all("/api/:controller/:method", (req, res) => {
    if (req.params.controller) {
        const params = req.method === "POST" ? req.body : req.query;
        modules[req.params.controller][req.params.method].call(
            null,
            req,
            res,
            params,
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


        app.listen(8083, () => {
            console.log('App is running...');
        })


         // sockets

        const wss = new WebSocketServer({port: 8088});
        wss.on("connection", (ws) => {
            console.log('socker connecteD');
            ws.on("message", (data) => {
                console.log(`Client has sent us: ${data}`);
                try {
                    wss.clients.forEach((client) => {
                        if (client.readyState === WebSocket.OPEN) {
                            client.send(data, {binary: false});
                        }
                    });
                } catch (exception) {
                    console.error(exception.message);
                }
            });
            ws.on("close", () => {
                console.log("The client has connected");
            });
            ws.onerror = function () {
                console.log("Some Error occurred");
            };
        });
        console.log("The WebSocket server is running");
    }
);
