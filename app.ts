const express = require('express');

const app = express();

const PORT: number = 4000;
// listening to server on Port 4000

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});
