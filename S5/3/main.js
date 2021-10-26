/**
 * Below we import the dependencies that we are going 
 * to use in our small application.
 * We use the special ```require``` function with the name of
 * the package as a parameter.
 */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

/** 
 * Mock data. Static.
 */
const studentData = [
    { id: 1, fullName: 'Florin', age: 25 },
    { id: 2, fullName: 'Andrei', age: 25 },
    { id: 3, fullName: 'Daniel', age: 24 },
    { id: 4, fullName: 'Dan', age: 18 },
    { id: 5, fullName: 'Catalin', age: 19 },
    { id: 6, fullName: 'Vlad', age: 22 },
    { id: 7, fullName: 'Flavia', age: 23 },
    { id: 8, fullName: 'Diana', age: 21 },
];

/**
 * A constant to declare a static port number.
 */
const port = 3000;

/**
 * Creates an Express application. The express() function is a top-level 
 * function exported by the express module.
 */
const app = express();

/**
 * Creates a express router instance so we can expose different
 * API endpoints to the network.
 */
const router = express.Router();

/**
 * Returns middleware that only parses urlencoded bodies and only looks at 
 * requests where the Content-Type header matches the type option.
 */
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * This is how we determine the data format of our body parser.
 * Basically what it does is to only parse JSON and looks only at requests 
 * where the Content Type header matches the type option.
 */
app.use(bodyParser.json());

/**
 * Here we enable the CORS option for our API.
 */
app.use(cors());

/**
 * Create a middleware for the express router.
 * Basically the root for all the requests starts from localhost:3000/
 * Port is 3000 since I declared and initialised it above on line 28.
 */
app.use('/', router);

/**
 * Create a route for the express router.
 * Handle a specific route, such as ```student/:id```, where we can dynamically get the
 * id that we pass as a path parameter in the request. Using the identifier provided, we
 * can query for data in the student data array.
 */
router.route('/student/:id').get((req, res) => {
    const id = Number(req.params.id);
    const selectedStudent = studentData.find((student) => student.id === id);
    res.json(selectedStudent);
});

/**
 * Start up the express server on the desired port and as a
 * callback, show a success message. If something goes wrong,
 * log the error message and end the execution.
 */
app.listen(port, (error) => {
    if (error) {
        return error;
    }
    console.log(`The server is running on ${port}.`);
});
