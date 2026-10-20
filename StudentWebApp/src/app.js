const express = require('express');

const app = express();

const PORT=3000;
const message="Hello from MCA ICT Lab!";

app.get("/", (req, res) => {
    res.send(message);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
