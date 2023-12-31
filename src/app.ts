import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => { });

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on port: ${port}`));