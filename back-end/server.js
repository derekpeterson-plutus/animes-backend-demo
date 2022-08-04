const app = require('./app');

require('dotenv').config();

const PORT = process.env.PORT || 8080;

app.listen(PORT, (req, res) => {
  console.log(`🚀 Our app is running on port ${PORT} 🚀 `);
});
