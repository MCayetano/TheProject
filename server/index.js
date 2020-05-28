require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
// const path = require('path');

const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env;
const {signin, register, signout, userSession} = require('./controller/authCtrl');
const {getCars, soldCars, createVehicle, updatePrice} = require('./controller/Controller');

const app = express();
app.use(express.json());

app.use( express.static( `${__dirname}/../build` ) );

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14
    }
}));

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    console.log('Connected to db')
    app.set('db', db)
}).catch( err => console.log(err));

//AUTH//
app.post('/auth/signin', signin); 
app.post('/auth/register', register); // 500 ISE, blank object
app.get('/auth/signout', signout); 
app.get('/auth/user_session', userSession);  


//HOME/VOCAB-VIEW//
// app.get('/api/words', getAllWords); // returned  "code": "ERR_INVALID_ARG_TYPE"

//STUDY-VIEW//
// app.get('/api/study', getUserStudyWords) // 500 ISE, blank object
// app.post('/api/words/:id', addWord) // 404 not found, shows html & 'cannot POST /api/words
// app.delete('/api/words/:id', deleteWord) // 404 not found, shows html & 'cannot DELETE /api/words
// app.get('*', (req, res)=>{
//     res.sendFile(path.join(__dirname, '../build/index.html'));
// });

app.get('/api/inventory', getCars);
app.delete('/api/sold/:id', soldCars);
app.post('/api/createVehicle', createVehicle);
app.put('/api/updatePrice/:id', updatePrice);

const port = 4500;
app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));