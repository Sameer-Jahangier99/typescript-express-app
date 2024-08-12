//  External Imports
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
//  Internal Imports
import errorHandler from './middleware/errorHandler';
import resourceRoutes from './routes/resourceRoutes';
import connectDB from './config/db';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Resource Express JS app with TypeScript');
  });
app.use(bodyParser.json());
app.use('/api/resources', resourceRoutes);
// Use the error handling middleware
app.use(errorHandler);

// MongoDB connection
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

