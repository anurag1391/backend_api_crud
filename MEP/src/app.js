const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const propertiesRoutes = require('./routes/properties');
const inquiriesRoutes = require('./routes/inquiries');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/properties', propertiesRoutes);
app.use('/api/inquiries', inquiriesRoutes);  // Add this line

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
