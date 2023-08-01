import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import routes from './api/v1';

const app = express();
app.use(cors());  // Enable Cross Origin Resource Sharing
app.use(bodyParser.json());  // Parse JSON request body
app.use(bodyParser.urlencoded({ extended: true }));  // Parse URL-encoded request body


app.use('/api/v1', routes);


const port = Number(process.env.PORT) || 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

export default app;
