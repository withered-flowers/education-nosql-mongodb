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

### Install MongoDB Atlas

### Perintah Dasar MongoDB

- `use [namadatabase]`
- `db.[namadocument].insertMany()`
- `db.[namadocument].find().pretty()`
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
