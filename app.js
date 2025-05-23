import express from 'express';

const app = express();

import { PORT } from './config/env.js';

app.get('/', (req, res) =>{
    console.log("hello");
    res.send("Welcome here")
})


app.listen(PORT, () => {
    console.log("Subscription tracker API is running on port 3000");
});


export default app;


