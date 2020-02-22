const express = require('express');
const http = express();

http.use(express.static('public'));

http.get('/', (req, res) => {
  res.send('An Alligator was here');
});

http.listen(5555, () => {
  console.log('SERVER RUNNING ON 5555');
});
