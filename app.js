const express = require('express');
const app = express();
const path = require('path');

// Serve static files (HTML, CSS, JavaScript, etc.) from a directory named "public"
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});