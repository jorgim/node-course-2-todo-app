const expect = require('expect');
const request = require ('supertest');

const {app} = require('./../app');
const {Todo} = require('./../models/todo');

const todos = [{
    text: 'First test todo'
}, {
    text: 'Seconf test todo'
}];

beforeEach((done) => {
    Todo.remove({}).then(() => {
       return Todo.insertMany(todos);
    }).then (() => done());
});

describe('POST /todos', () => {
    it('Should create new todo', (done) => {
        var text = 'Test todo Text';

        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
             })
            .end((err,res) => {
            if (err) {
                return done(err);
            }
            Todo.find({text}).then((todos) => {
                expect(todos.length).toBe(1);
                expect(todos[0].text).toBe(text);
                done();
            }).catch((error) => {
                done(error);
            })
        });
    });

    it('Should not create todo with invalid body data', (done) => {
        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err,res) => {
            if (err) {
                return done(err);
            }

            Todo.find().then((todos) => { 
                expect(todos.length).toBe(2);
                done();
            }).catch((error) => {
                done(error);
            }) 
        });
    });
});

describe('GET / Todos', () => {
it('Should get all todos', (done) => {
    request(app)
        .get('/todos')
        .expect(200)
        .expect((res) => {
            expect(res.body.todos.length).toBe(2);
        })
        .end(done);
});
});