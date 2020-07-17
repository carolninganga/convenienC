const express = require("express");
const app = express();

//Connect Database
require("./config/db")();

//Init Middleware
app.use(express.json({ extended: false }));
app.use(express.json());

//app.get('/test', (req, res) => res.json({ msg: 'test' }));
//app.get('/login', (req, res) => res.json({ msg: 'test' }));
//Define Routes
 app.use(require('./routes'))
// app.use("/api/users", require("./routes/users"));
// app.use("/api/auth", require("./routes/auth"));
// app.use("/api/businesses", require("./routes/businesses"));

//serve static assets if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendfile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));