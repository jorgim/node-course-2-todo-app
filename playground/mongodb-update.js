//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        return console.log('Unable to connect MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5bdb9c036b5653591c864a88')
    }, {
        $set: {
            name: 'Joaquim'
        },
 
        $inc: { 
            age: 1 
        } 
    
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });


  //  db.close();
});
