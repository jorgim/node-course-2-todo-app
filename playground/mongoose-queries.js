const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');
const {Todo} = require('./../server/models/todo');

/* var id = '123465';
if (!ObjectID.isValid(id)) {
    console.log('Id not valid');

} */

/* Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);

});

 Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});  */

/* Todo.findById(id).then((todo) => {
    if(!todo) {
        return console.log('Id not found');
    }
    console.log('Todo Id:', todo);
}).catch((error) => console.log(error)); */

var userid = '65bde35faf5b0244588ea15e8';

User.findById(userid).then((user) => {
    if(!user) {
        return console.log('Id not found');
    }
    console.log('Todo Id:', user);
}).catch((error) => console.log(error));