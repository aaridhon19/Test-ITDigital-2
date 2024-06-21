const express = require("express");
const app = express();
const port = 4000 ;
const taskRoutes = require("./routers/taskRouter");
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Menggunakan router dari taskRoutes
app.use('/tasks', taskRoutes);

// Menjalankan server pada port 4000
app.listen(port, () => {
    console.log(`Server running on Port : ${port}`);
});

module.exports = app;