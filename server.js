const app = require("./src/app");
const database = require("./src/config/database");
require("dotenv").config();

try {
  database.sync({ force: true }).then(() => {
    console.log("DB synced");
  });
} catch (error) {
  console.error("DB Sync Error:", error);
}

const PORT = process.env.PORT || 5555;
app.listen(PORT, () => console.log(`The server is running on port ${PORT}!`));
