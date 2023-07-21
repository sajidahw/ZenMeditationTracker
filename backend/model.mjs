// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if (err) {
        res.status(500).json({ error: '500:Connection to the server failed.' });
    } else {
        console.log('Successfully connected to MongoDB ZenDiary collection using Mongoose.');
    }
});

// SCHEMA: Define the collection's schema.
const zenSchema = mongoose.Schema({
    title: { type: String, required: true },
    duration: { type: Number, required: true, default: 0, min: [0, 'Spend some time to Zen']
            },
    guide: { type: String, required: true },
    category: { type: String, required: true},
    date: { type: Date, required: true, min: '2023-01-01', default: Date.now
        }
});

// Compile the model from the schema.
const Meditation = mongoose.model('ZenTime', zenSchema);


// CREATE model *****************************************
// create a zen log document (row) in the collection(table)
const createZen = async (title, duration, guide, category, date) => {
    // calls the constructor to create an instance of model class ZenTime;
    // const lower case with new instantiation uppercase class
    const meditation = new Meditation({
        title: title,
        duration: duration,
        guide: guide,
        category: category,
        date: date
    });
    // call save to persist this object as a doc(row) in MongoDB
    return meditation.save();
}


// RETRIEVE models *****************************************
// Retrieve based on a filter and return a promise.
const findMeditations = async () => {
    const query = Meditation.find();
    return query.exec();
}

// RETRIEVE by ID
const findMeditationById = async (_id) => {
    const query = Meditation.findById({ _id: _id });
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteMeditationById = async (_id) => {
    const result = await Meditation.deleteOne({ _id: _id });
    return result.deletedCount;
};


// UPDATE/replace model *****************************************************
const updateMeditation = async (_id, title, duration, guide, category, date) => {
    const result = await Meditation.replaceOne({ _id: _id }, {
        title: title,
        duration: duration,
        guide: guide,
        category: category,
        date: date
    });
    return {
        _id: _id,
        title: title,
        duration: duration,
        guide: guide,
        category: category,
        date: date
    }
}



// Export our variables for use in the controller file.
export { createZen, findMeditations, findMeditationById, updateMeditation, deleteMeditationById }