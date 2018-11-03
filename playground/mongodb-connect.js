//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        return console.log('Unable to connect MongoDB server');
    }
    console.log('Connected to MongoDB server');
    
 /*    db.collection('Todos').insertOne({
        text: 'Something to do 3',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to Insert Todo');
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    }); */

    /* db.collection('Users').insertOne({
        name: 'Jorge',
        age: 37,
        location: 'Azores'

    }, (err, result)=> {
        if (err) {
            return console.log('Unable to Insert User');
        }
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    }); */
    db.close();
});