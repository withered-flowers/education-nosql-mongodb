const { getDatabase } = require("../config/mongoConnection");
const { ObjectId } = require("mongodb");
const User = require("../models/user");

module.exports = {
  findAllUsers: async (req, res, next) => {
    /* Cara Pertama - non model */

    // // Di sini sebelum bisa query ke db, kita harus mendapatkan dbnya
    // // terlebih dahulu
    // const db = getDatabase();

    // // Ambil collection (table)
    // const users = db.collection("users");

    // // Query di sini

    // // Ingat .find itu mengembalikan cursor
    // // Untuk iterasi data harus gunakan toArray / next
    // const data = await users.find().toArray();

    /* Cara Kedua - via model */
    const data = await User.findAll();

    res.status(200).json({
      statusCode: 200,
      message: "Ping Pong",
      data,
    });
  },
  createUser: async (req, res, next) => {
    const { email, username } = req.body;

    /* Cara Pertama - non model */
    // const db = getDatabase();

    // // ambil collection (table)
    // const users = db.collection("users");

    // const newUser = await users.insertOne({
    //   email,
    //   username,
    // });

    /* Cara Kedua - via model */
    const newUser = await User.createUser({
      email,
      username,
    });

    res.status(201).json({
      statusCode: 201,
      id: newUser.insertedId,
      email,
      username,
    });
  },
  findUserById: async (req, res, next) => {
    // asumsikan yang diambil adalah id
    const { id } = req.params;

    /* Cara Pertama - non model */
    // const db = getDatabase();

    // // ambil collection (table)
    // const users = db.collection("users");

    // // Ingat id bentuknya adalah "string"
    // // sedangkan _id pada MongoDB adalah ObjectId
    // // Untuk parsing / konversi bisa menggunakan ObjectId
    // // dari driver mongodb
    // const foundUser = await users.findOne({
    //   _id: new ObjectId(id),
    // });

    /* Cara Kedua - via model */
    const foundUser = await User.findById(id);

    res.status(200).json({
      statusCode: 200,
      data: foundUser,
    });
  },
};
