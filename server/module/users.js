import {Connection} from "../../connection.js";
import {ObjectId} from "mongodb";

const DB = () => Connection.db;

class Client {
    static async getClientInfo(req, res) {
        try {
            const users = await DB().collection("users")
                .find()
                .toArray();
            res.status(200).send(JSON.stringify(users));
        } catch (exception) {
            console.error(exception.message);
            res.status(500).send();
        }
    }

    static async updateClientData(req, res, params) {
        try {
            if (params._id) {
                await DB()
                    .collection("users")
                    .updateOne(
                        {_id: ObjectId(params._id)},
                        {
                            $set: {
                                firstName: params.firstName,
                                lastName: params.lastName,
                                email: params.email,
                                paroliOne: params.paroliOne,
                                paroliTwo: params.paroliTwo,
                            },
                        }
                    )
            } else {
                await DB()
                    .collection("users")
                    .insertOne({
                            firstName: params.firstName,
                            lastName: params.lastName,
                            email: params.email,
                            paroliOne: params.paroliOne,
                            paroliTwo: params.paroliTwo,
                            creationDate: new Date()
                        });

            }

            res.status(200).send({});
        } catch (exception) {
            console.error(exception.message)
            res.status(500).send()
        }
    }


    static async deleteUser(req, res, params) {
        console.log(params)
        try {
            await Connection.db
                .collection('users')
                .deleteOne({_id: ObjectId(params._id)})
            res.status(200).send({})
        } catch (error) {
            res.status(500).send({error: true, message: error.message})
        }
    }
    //chat

    static async getMessages(req, res) {
        try {
            const users = await DB().collection('messages').find().toArray()
            res.status(200).send(JSON.stringify(users))
        } catch (exception) {
            console.error(exception.message)
            res.status(500).send()
        }
    }

    static async saveMessage(req, res, params) {
        try {
            await DB().collection('messages').insertOne({
                senderId: params.senderId,
                senderFirstName: params.senderFirstName,
                // senderLastName: params.senderLastName,
                receiverId: params.receiverId,
                receiverFirstName: params.receiverFirstName,
                // receiverLastName: params.receiverLastName,
                message: params.message,
            })
            res.status(200).send({
                success: true,
                message: 'success to post data',
                ...params,
            })
        } catch (error) {
            res.status(500).send({ error: true })
        }
    }


}

export {Client};