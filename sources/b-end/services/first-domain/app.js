const cors = require("cors");
const express = require("express");
const { mongoConnect } = require("./config/mongoConnection");
const router = require("./routers/user");
const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/users", router);

// Jadi sekarang sebelum masuk ke routing di bawah,
// kita harus koneksi ke db kita terlebih dahulu
(async () => {
  try {
    await mongoConnect();
    app.listen(port, (_) => console.log(`Apps is listening at port ${port}`));
  } catch (err) {
    console.log(`Failed to connect to mongodb`);
  }
})();
