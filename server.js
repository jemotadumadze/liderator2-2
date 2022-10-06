import { MongoClient, ObjectId } from 'mongodb'
import { Connection } from './connection.js'

MongoClient.connect(
  'mongodb+srv://tadumadze:Tadumadze-123@clusterbog.zfxcp1g.mongodb.net/?retryWrites=true&w=majority',
  (error, client) => {
    if (error) {
      return console.error(error)
    }

    Connection.set(client.db('bog_db'))
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
)
