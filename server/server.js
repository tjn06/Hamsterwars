const express = require('express');
const { ObjectID } = require('mongodb');
const app = express();
const MongoClient = require("mongodb",).MongoClient;
const DB_URL = "mongodb+srv://Pontus:test123@hamstercluster.drmd0.mongodb.net/<dbname>?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;
const cors = require("cors");


// MIDDLEWARE
app.use(express.json());
app.use(cors())
// ROUTES

app.get('/hamsters', (req, res) => {
    MongoClient.connect(DB_URL, { useUnifiedTopology: true }, async function (err, client) {
        const db = client.db("hamster_wars");
        const collection = db.collection("hamsters");
        collection.find({}).sort({ name: 1 }).toArray(function (err, hamsters) {
            if (err) {
                res.send(err)
                client.close()
                console.log("Connection CLOSED")
            }
            res.send(hamsters)
            client.close();
            console.log("Connection CLOSED")

        })
    })
});
app.get('/hamster/:id', (req, res) => {
    MongoClient.connect(DB_URL, { useUnifiedTopology: true }, async function (err, client) {
        const db = client.db("hamster_wars");
        const collection = db.collection("hamsters");
        collection.find({id: Number(req.params.id)}).sort({}).toArray(function (err, hamster) {
            if (err) {
                res.send(err)
                client.close()
                console.log("Connection CLOSED")
            }
            res.send(hamster)
            client.close();
            console.log("Connection CLOSED")

        })
    })
});
app.get('/hamsters/wins', (req, res) => {
    MongoClient.connect(DB_URL, { useUnifiedTopology: true }, function (err, client) {
        const db = client.db("hamster_wars");
        const collection = db.collection("hamsters");
        if (err) {
            res.send(err)
            client.close()
            console.log("Connection CLOSED")
        }
        collection.find({ wins: { $gte: 1 } }).sort({ wins: -1 }).toArray(function (err, wins) {
            res.send(wins);
            client.close();
            console.log("Connection CLOSED")
        })
    })
});
app.get('/hamsters/defeats', (req, res) => {
    MongoClient.connect(DB_URL, { useUnifiedTopology: true },  function (err, client) {
        const db = client.db("hamster_wars");
        const collection = db.collection("hamsters");
        try {
             collection.find({ defeats: { $gte: 1 } }).sort({ defeats: -1 }).toArray(function (err, defeats) {
                res.send(defeats)
            })
        }
        catch (error) {
            console.log(error)
        }
        finally {
            
            console.log("Connection CLOSED")
        }
    })
});
app.get('/battle/:id1/:id2', (req, res) => {
    MongoClient.connect(DB_URL, { useUnifiedTopology: true }, async function (err, client) {
        const db = client.db("hamster_wars");
        const collection = db.collection("hamsters");
        const id1 = Number(req.params.id1);
        const id2 = Number(req.params.id2);

        try {
            collection.find({ id: { $in: [id1, id2] } }).toArray(function (err, battleIds) {
                res.send(battleIds)
            })
        }
        catch (error) {
            console.log(error)
        }
        finally {
            //client.close()
            console.log("Connection CLOSED")
        }
    })
});

app.get('/battle', (req, res) => {
    MongoClient.connect(DB_URL, { useUnifiedTopology: true }, async function (err, client) {
        const db = client.db("hamster_wars");
        const collection = db.collection("hamsters");
        collection.aggregate([{ $sample: { size: 2 } }]).toArray(function (err, client) {
            res.send(client)
        })
    })
})


app.put('/hamsters/updatewins/:id', (req, res) => {
    MongoClient.connect(DB_URL, { useUnifiedTopology: true }, async function (err, client) {
        const db = client.db("hamster_wars");
        const collection = db.collection("hamsters");
        let hamsterId = Number(req.params.id)
        collection.updateOne({ id: hamsterId }, { $inc: { wins: 1, games: 1 } }, function (err, client) {
            res.send(client)
        })
    })
})
app.put('/hamsters/updatedefeats/:id', (req, res) => {
    MongoClient.connect(DB_URL, { useUnifiedTopology: true }, async function (err, client) {
        const db = client.db("hamster_wars");
        const collection = db.collection("hamsters");
        let hamsterId = Number(req.params.id)
        collection.updateOne({ id: hamsterId }, { $inc: { defeats: 1, games: 1 } }, function (err, client) {
            res.send(client)
        })
    })
})
let baseId = 40;
app.post('/addhamster', (req, res) => {
    MongoClient.connect(DB_URL, { useUnifiedTopology: true }, async function (err, client) {
        const db = client.db("hamster_wars");
        const collection = db.collection("hamsters");
        let { name, age, favFood, loves, imgName } = req.body
        console.log(req.body)
        collection.insertOne({
            id: baseId + 1,
            name,
            age,
            favFood,
            loves,
            imgName,
            wins: 0,
            defeats: 0,
            games: 0
        }, function (err, client) {
            res.send(client)
            baseId = baseId + 1
        })
    })
})
app.delete('/deletehamster/:id', (req, res) => {
    MongoClient.connect(DB_URL, { useUnifiedTopology: true }, async function (err, client) {
        const db = client.db("hamster_wars");
        const collection = db.collection("hamsters");
        collection.deleteOne({ id: Number(req.params.id) }, function (err, client) {
            res.send(client)
        })
    })
})
// app.get('/hamsters/function/wins', (req, res) => {
//     getHamsterWins(result => {
//         res.send(result)
//     })

//     //GET FUNCTIONS
//     function getHamsterWins(callback) {
//         get({ wins: { $gte: 1 } }, {}, callback)
//     }

//     function get(filter, sort, callback) {
//         MongoClient.connect(DB_URL, { useUnifiedTopology: true }, async function (err, client) {
//             const db = client.db("hamster_wars");
//             const collection = db.collection("hamsters");

//             let result = await collection.find(filter).sort(sort).toArray()
//             callback(result)
//         })
//     }
// });
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
