import express from 'express'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import bodyParser from 'body-parser';
// import req from 'express/lib/request';
// import { MongoClient, ObjectId } from 'mongodb'
// import { Connection } from './connection.js'
// import { prototype } from 'events';

// MongoClient.connect(
//   'mongodb+srv://tadumadze:Tadumadze-123@clusterbog.zfxcp1g.mongodb.net/?retryWrites=true&w=majority',
//   (error, client) => {
//     if (error) {
//       return console.error(error);
//     }

//     Connection.set(client.db('bog_db'));

//     Connection.db
//       .collection('bog_collection')
//       .find({})
//       .toArray((err, res) => {
//         if (err) {
//           return console.error(err)
//         }
//         console.log(res)
//       })
//   },
// );

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
