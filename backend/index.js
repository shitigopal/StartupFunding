const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const startupRouter = require('./routers/startupRouter');
const productRouter = require('./routers/productRouter');
const investorRouter= require('./routers/investorRouter');
const utilRouter= require('./routers/util');

const cors = require('cors');
const { PORT } = require('./config');

const app = express();

app.use(cors(
    {
        origin : 'http://localhost:3000',
        credentials : true
    }
));
app.use(express.json());
app.use('/startup', startupRouter);
app.use('/product', productRouter);
app.use('/investor',investorRouter);
app.use('/util',utilRouter);


app.get('/', (req, res) => {
    console.log('Request at index');
    res.status(299).send('Working Perfectly!!');
})

app.listen(PORT, () => console.log(`Express server has started at ${PORT}`));