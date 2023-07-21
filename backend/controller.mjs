import 'dotenv/config';
import express from 'express';
import * as meditations from './model.mjs';//collection name

const PORT = process.env.PORT;
const app = express(); //middleware using express json in our server code
app.use(express.json());  // REST needs JSON MIME type.

// route handlers
// creating a resource by sending HTTP method request of POST; body will contain json obj with new resource's properties
// CREATE controller ******************************************
// route defined by express method: app.post
// creating a new meditation using REST and POST with STATUS errors
app.post('/meditations', (req, res) => { // /meditations is collection name
    meditations.createZen(
        // route handler gets properties of newly created resource from body
        req.body.title,
        req.body.duration,
        req.body.guide,
        req.body.category,
        req.body.date
        )
        .then(meditation => {
            // returns a promise of newly created resource, with ID, properties and status code
            res.status(201).json(meditation); // setting status code
        })
        .catch(error => {
            console.log(error); //bad requeset 400
            res.status(400).json({ error: 'Take a deep breath! Your ZenDiary creation of document failed due to invalid syntax.' });
        });
});


// Read
// RETRIEVE controller ****************************************************
app.get('/meditations', (req, res) => {//retrieves collection of
    meditations.findMeditations()
        .then(meditation => {
            if (meditation !== null) {
                res.json(meditation); // exercise
            } else {
                res.status(404).json({ Error: 'Uhoh, cannot find your ZenDiary document.' });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Oopsides, your request to retrieve ZenDiary document has failed.' });
        });
});


// RETRIEVE subsection of resources for meditations by ID provided in URL route parameter controller
// filtered subset of collection
app.get('/meditations/:_id', (req, res) => { // route parameter includes path with id parameter
    meditations.findMeditationById(req.params._id) // checking by ID
        .then(meditation => {
            if (meditation !== null) {
                res.json(meditation); // sending the promise
            } else {
                res.status(404).json({ Error: 'Uhoh, cannot find you your ZenDiary document.' });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Oopsies, Failed to retrieve your ZenDiary document row information.' });
        });

});


// UPDATE controller ************************************
// update also based on Id
app.put('/meditations/:_id', (req, res) => {
    meditations.updateMeditation(
        req.params._id,
        req.body.title,
        req.body.duration,
        req.body.guide,
        req.body.category,
        req.body.date
    )
        .then(meditation => {
            res.json(meditation); // if found, update meditation exercise
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'Your ZenDiary document row update has failed.' });
        });
});


// DELETE Controller ******************************
// delete based on Id
app.delete('/meditations/:_id', (req, res) => {
    meditations.deleteMeditationById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();// no content
            } else {// not found
                res.status(404).json({ Error: 'Uh oh, your ZenDiary row entry no longer exists.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Oopsies, Failed to delete your ZenDiary document row by ID.' });
        });
});

// REST & Express listen to port
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});