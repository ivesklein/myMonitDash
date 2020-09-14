const express = require('express');
const app = express();

app.use(express.static(__dirname + '/static'));






app.listen(3000, () => console.log('Listening on port 3000'));



const gracefulShutdown = () => {
    db.teardown()
        .catch(() => {})
        .then(() => process.exit());
};

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);
process.on('SIGUSR2', gracefulShutdown); // Sent by nodemon
