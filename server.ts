import express from 'express';


const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/posts', async (req, res) => {
//   const response = await axios.get('https://jsonplaceholder.typicode.com/posts');


  res.send('post');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
