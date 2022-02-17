var dotenv = require('dotenv'),
    express = require('express'),
    app = express(),
    bodyparser = require('body-parser'),
    connectdb = require('mongoose'),
    swagger_ui = require('swagger-ui-express'),
    swagger_doc = require('./app/lib/swagger-ui/api_docs')

require('./app/routes/routes')(app);

app.use(bodyparser.json());

dotenv.config()
connectdb.connect(process.env.MONGODB_URL, { useNewUrlParser: true ,useCreateIndex: true, useUnifiedTopology: true });
const connection = connectdb.connection;
connection.once ('open',() => {
    console.log("Mongodb database connection established succesfully");
})

app.use('/swagger/api', swagger_ui.serve, swagger_ui.setup(swagger_doc));

app.listen(process.env.PORT, () => {
    console.log("Server is running on port: " + process.env.PORT);
    connectdb;
});
