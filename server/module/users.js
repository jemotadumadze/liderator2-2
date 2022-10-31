import {Connection} from "../../connection.js";

const DB = () => Connection.db;

class Client {
    static async getClientInfo(req, res) {
        try {
            const users = await DB().collection("users").find().toArray();
            res.status(200).send(JSON.stringify(users));
        } catch (exception) {
            console.error(exception.message);
            res.status(500).send();
        }
    }

    static async updateClientData(req, res,params) {
        console.log(params);
        try {
            await DB()
                .collection("users")
                .insertMany([
                    params
                ])
            res.status(200).send({});
        } catch (exception) {
            console.error(exception.message)
            res.status(500).send()
        }
    }
}

export {Client};