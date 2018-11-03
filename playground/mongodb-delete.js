//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        return console.log('Unable to connect MongoDB server');
    }
    console.log('Connected to MongoDB server');

 //deleteMany

 /* db.collection('Todos').deleteMany({text: 'Something to do 3'}).then((result) => {
    console.log (result);
 }); */


 //deleteOne
 db.collection('Todos').deleteOne({text: 'Something to do 3'}).then((result) => {
    console.log (result);
 });

 //findOneDelete
/*  db.collection('Todos').deleteMany({text: 'Something to do 3'}).then((result) => {
    console.log (result);
 }); */

    
db.collection('Todos').findOneAndDelete({text: 'Something to do 3'}).then((result) => {
    console.log(result);
    }, (err) => {
        console.log('Unavbe to delate todos', err);
    });


  //  db.close();
});
