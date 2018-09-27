// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err)
        return console.log('Unable to connect to MongoDB server');

    console.log('Connected to MongoDB server');

    //deleteMany
    // db.collection('Todos').deleteMany({test:'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({test: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // })

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // })

    // db.collection('Users').deleteMany({name: 'Shane'}).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5b5e3811a66704d6bf6fb9f0')}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    })

    //db.close();
});