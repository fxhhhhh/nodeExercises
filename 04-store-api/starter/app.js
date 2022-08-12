require('dotenv').config()
//async errors


const express = require('express');
const app = express();

const connectDB = require('./db/connect')
const productsRouter = require('./routes/products') 

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');


app.use(express.json())

app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});


app.use('/api/v1/products',productsRouter)



const port = process.env.port || 5000

//products route

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const start = async()=>{
    try {
        //connect DB
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`Server is listening`))
    } catch (error) {
        console.log(error);
    }
}
start()