require('dotenv').config();
const express = require('express');
const plannerRoutes = require('./routes/plannerRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Gebruik de routes
app.use('/api/planner', plannerRoutes);

app.listen(PORT, () => {
    console.log(`API draait op http://localhost:${PORT}`);
});
