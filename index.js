import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/contactRoute.js';
import errorHandler from './middleware/errorHandler.js';
import connectDb from './config/dbConnection.js';


dotenv.config();
connectDb.authenticate().then(()=>{
    console.log('Connected to the database');
});

const app = express();
// Middleware
app.use(express.json());

// Routes
app.use('/api/contacts',routes)

// Error handler middleware
app.use(errorHandler)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});