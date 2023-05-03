const app = require("./app");
require("dotenv").config();

require("./db/database");

PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`App now listening @ PORT ${PORT}`);
});
