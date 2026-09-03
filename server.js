import express from "express";
import studentRoutes from "./routes/studentRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/student", studentRoutes);


app.listen(PORT, () => {
    console.clear();
    console.log(`Server is running on port ${PORT}`);
});