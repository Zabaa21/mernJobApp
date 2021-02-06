const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./server/routes/index')
const morgan = require('morgan')
const cors = require('cors');
const path = require('path')
const history = require('connect-history-api-fallback')


// connect to database
mongoose.Promise = global.Promise;

const dbUrl = 'mongodb+srv://NicoZaba:zaba123@cluster0.nzki6.mongodb.net/jobInterview?retryWrites=true&w=majority';

//const dbUrl = 'mongodb://localhost:27017/jobInterview';
mongoose.connect(dbUrl, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
    .then(mongoose => console.log('Connected to DB'))
    .catch(err => console.log(err));
    

const app = express();
app.set('port', process.env.PORT || 3001)
app.use(cors()); 
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
});

app.use('/', routes)

app.use(history({verbose: true}))

app.use(express.static(path.join(__dirname,"public")))

app.listen(app.get("port"), () =>
  console.log('server running in localhost:3001')
);