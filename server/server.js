const app = require("./app");
const connectDatabase = require("./db");

require("dotenv").config({ path: "server/config/config.env" });

connectDatabase();

const server = app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}/`);
});
