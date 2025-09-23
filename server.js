const http = require('http');
const mongodb = require('mongodb');

let db;
const connectionString = "mongodb+srv://OtabekDev:yWiq4HCqMxW1W88a@cluster0.o9fqjaj.mongodb.net/";

mongodb.connect(
    connectionString, 
{
    userNewUrlParser:true, 
    useUnifiedTopology: true,
}, 
(err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
        console.log("MongoDB connecton succeed");
        module.exports = client;
        const app = require('./app');
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function () {
            console.log(`The server is running succesfully on port: ${PORT}`);
            });
        }
    }
);

