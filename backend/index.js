const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/all_routes')(app)

const driver = require('./config/neo4j').driver;

// Example Route
app.get('/', (req, res) => {
    // Create Driver session
    const session = driver.session();

    // Run Cypher query
    const cypher = 'MATCH (n:Player) RETURN n as count';

    session.run(cypher)
        .then(result => {
            // On result, get count from first record
            const count = result.records[0].get('count');

            // Send response
            res.send({ count: count });
        })
        .catch(e => {
            // Output the error
            res.status(500).send(e);
        })
        .then(() => {
            // Close the session
            return session.close();
        });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});