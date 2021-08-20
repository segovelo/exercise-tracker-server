const app = require('./server');

const port = process.env.PORT || 5000;

// run the server locally
app.listen(port, () => {
   console.log(`Server listening at http:\\localhost:${port}`);
 });