const app = require("./src/app");
const database = require("./src/config/database");

const PORT = process.env.PORT || 5555;
app.listen(PORT, () => console.log(`The server is running on port ${PORT}!`));
