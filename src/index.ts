import express, { Request, Response } from "express";
import db from "./config/db";
import userRoutes from "./routes/userRoutes";
import medicalRoutes from "./routes/medical.aid.routes";

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

db();

app.get('/status', (request: Request, response: Response) => {
    response.send(`Hello, this is our new Typescript backend which is running on port: ${PORT}`);
});

app.use('/api', userRoutes)
app.use('/api', medicalRoutes)

app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
})
