import express from 'express';

import { PORT, DB_URI } from './config/env.js';

import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import connectToDatabase from './database/mongodb.js'

const app = express();


app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);

app.get('/', (req, res) =>{
    console.log("hello");
    res.send("Welcome here")
})


app.listen(PORT, async () => {
    console.log("Subscription tracker API is running on port 3000");
    await connectToDatabase();
});


export default app;

