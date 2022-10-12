import express from 'express'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { MongoClient, ObjectId } from 'mongodb'
import { Connection } from '../connection.js'

MongoClient.connect(
  'mongodb://database:27017',
  (error, client) => {
    if (error) {
      return console.error(error);
    }

    Connection.set(client.db('bog_db'));

    Connection.db
      .collection('bog_collection')
      .find({})
      .toArray((err, res) => {
        if (err) {
          return console.error(err)
        }
        console.log(res)
      })
  },
);

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const app = express()
app.use(express.static('public'))

app.get(['/*', '/'], (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.listen(8083,()=>
{console.log('asdasd');
})
