import express from "express";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";
import path from "node:path";

import swaggerSpec from "./configs/swagger.config.js";
import userRouter from "./routes/user.route.js";
import teacherRouter from "./routes/teacher.route.js";


const app = express();

const PORT = 3000;

//middleware
app.use(express.json());

app.use(express.static(path.resolve("public")));

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//database
const MONGODB_URL = "mongodb://localhost:27017/B30DB";

await mongoose.connect(MONGODB_URL);

console.log("DB Connected!");


//route
app.use("/api/users", userRouter);
app.use("/api/teachers", teacherRouter);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

