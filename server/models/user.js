var mongoose = require('mongoose');

var User = mongoose.model('User', {
    User: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        minlenght: 1,
        trim: true
    }
});


/* var newUser = new User({
    User: 'Joaquim',
    email: ' joaquim@connexall.com '
});

newUser.save().then((user) => {
    console.log('Added new User', user)
})
.catch((error) => {
    console.log('Unable to create new user', error);
}); */

module.exports = {User};