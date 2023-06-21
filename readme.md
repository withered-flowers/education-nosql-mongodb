# Education NoSQL MongoDB

## Table of Contents

- Apa itu NoSQL
- Perbedaan NoSQL dengan SQL
- Mapping Istilah SQL ke NoSQL (MongoDB)
- Let's Learn MongoDB
  - Install MongoDB Local
  - Intro to MongoDB Atlas
  - Perintah dasar MongoDB
- Dive into Code
  - Struktur Folder
  - Membuat config/connectionToDb.js
  - Membuat controller
  - Membuat model

## Apa itu NoSQL

- https://www.mongodb.com/nosql-explained

## Perbedaan NoSQL dengan SQL

## Mapping Istilah SQL ke NoSQL

- https://www.mongodb.com/docs/manual/reference/sql-comparison/

| SQL          | MongoDB      |
| ------------ | ------------ |
| database     | database     |
| table        | collection   |
| row          | document     |
| column       | field        |
| index        | index        |
| primary key  | primary key  |
| transactions | transactions |

| Deskripsi     | Postgres | MongoDB |
| ------------- | -------- | ------- |
| DB            | postgres | mongod  |
| Client        | psql     | mongosh |
| Driver (Node) | pg       | mongodb |

## Let's Learn MongoDB

### Install MongoDB Local

- https://www.mongodb.com/docs/manual/administration/install-community/

### Install MongoDB Atlas

- https://www.mongodb.com/atlas/database

### Perintah Dasar MongoDB

- `use [namadatabase]`
- `db.[namadocument].insertMany()`
- `db.[namadocument].insertOne()`
- `db.[namadocument].find().pretty()`
- `db.[namadocument].findOne()`
- `db.[namadocument].deleteMany()`

## Dive into Code

### Struktur Folder

Karena nantinya kita akan membuatnya secara micro(services), pastikan untuk membuat struktur foldernya dengan baik yah.

Umumnya struktur folder micro(services) adalah sebagai berikut:

- rootFolderServer
  - services
    - namaDomainServicesPertama
      - app.js (start di sini untuk kode server (service) pertama)
    - namaDomainServicesKedua
      - app.js (start di sini untuk kode server (service) kedua)
    - dst

### Membuat config/connectionToDb.js

- Install package `mongodb`
- Membuat connection db (https://www.mongodb.com/docs/drivers/node/current/fundamentals/connection/connect/#std-label-node-connect-to-mongodb)

### Membuat controller

### Membuat model

### References

- [nosql](https://www.mongodb.com/nosql-explained)
- [nosql vs sql](https://www.mongodb.com/nosql-explained/nosql-vs-sql)
- [Why use nosql](https://www.mongodb.com/developer/products/mongodb/top-4-reasons-to-use-mongodb/)
- [mongodb install](https://docs.mongodb.com/manual/installation/)
- [mongosh install](https://docs.mongodb.com/mongodb-shell/)
- [crud operation](https://docs.mongodb.com/manual/crud/)
- [terminology](https://docs.mongodb.com/manual/reference/sql-comparison/)
- [mongo driver](https://www.mongodb.com/docs/drivers/)
- [challenge](https://docs.google.com/document/d/1beJXG8ObzkP1t20rAOF2avcPj2U7fyLwIv_BoDfGZ24/edit)
