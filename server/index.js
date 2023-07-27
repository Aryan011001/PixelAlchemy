import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './mongodb/connect.js';//.js is just because it works in react but not in node


import postRoutes from './routes/postRoutes.js'
import ImageGenRoutes from "./routes/ImageGenRoutes.js";
dotenv.config();


const app=express();
app.use(cors());
app.use(express.json({limit:'50mb'}));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/imageGen", ImageGenRoutes);

app.get('/', async(req,res) =>{
    res.send('Hello from IMAGE AI');
})

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);
          app.listen(8080, () =>
            // console.log(`Server has started on port http://localhost:8080`)
            console.log(`Server has started on port https://pixelalchemy.onrender.com`)
          );
    } catch (error) {
        console.log(error);
    }
  
}
startServer();