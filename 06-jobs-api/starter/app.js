require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();

//db

const connetDB = require('./db/connect')
const authorizateUser = require('./middleware/authentication')


// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());


// extra security packages
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');

app.set('trust proxy', 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  })
);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());





// routes
app.get('/', (req, res) => {
  res.send('jobs api');
});

const authRouter = require('./routes/auth')
const jobRouter = require('./routes/jobs')

app.use('/api/v1/auth',authRouter)
app.use('/api/v1/job',authorizateUser,jobRouter)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connetDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
