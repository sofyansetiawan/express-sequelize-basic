## DEMO Express + Sequelize

- Setup Package

  - (Siapkan data JSON untuk seeding)
  - npm init -y
  - Install Sequelize dan package lain
    - `npm install pg express ejs sequelize sequelize-cli`
    - `npx sequelize --version` (versi di saya)
    - Jika install sequelize secara global, maka install sequelize-cli secara global juga
  - .gitignore (node_modules)


- Setup project sequelize

  - `npx sequelize init`
  - Generate config, models, migrations, seeders

- Setup Database

  - config/config.json
  - Tidak perlu membuat database di Postgre
  - Pakai development (untuk saat belajar yang lain dihapus)
  - Atur nama database yang ingin dibuat dan pakai, username, password, host) dan dialect postgres | port bila menggunakan port lain
  - `npx sequelize db:create` (membuat database dari config.json)

- Perintah perintah CLI di sequelize : `npx sequelize --help`

- Setup Model

  - `npx sequelize model:generate --name Namamodel --attributes column:type,column:type,column:type`
    - Contoh: npx sequelize model:generate --name People --attributes firstname:string,lastname:string,age:integer,address:string,ismale:boolean
    - Nama model di CLI ditulis secara Singular dan PascalCase
    - Kolom id tidak perlu di generate (otomatis oleh sequelize)
  - Mengenerate model dan migration
    - Model berhubungan dengan interaksi user dan database
    - Migration berhubungan bentuk dan struktur database
  - Membuat Model index dan namamodel (poeple.js)
    - File index.js di models jangan diubah
    - Terdapat struktur kolom table

- Setup Migration

  - Kolom createdAt, updatedAt sudah digenerate oleh sequelize
  - Nama file migration berdasarkan timestamp dan sesuai nama model
  - Migration ada 2 properti: up dan down adalah langkah dilakukan
    - up: menjalankan perintah DDL table
    - down: undo menjalankan perintah DDL table
  - async await di ganti return  (karena kita masih belajar promise)

- Melakukan Migration

  - Ketika mengenerate model, table di database belum terbentuk, yang perlu dijalankan adalah melakukan migrate
  - Migration tidak dijalankan langsung karena ini masih perintah pending (keamanan juga)
  - `npx sequelize db:migrate`
    - Menjalankan migrasi yang pending. Menjalankan promise migrate
    - Perintah DDL sudah dijalankan (Tabel sudah terbentuk)
    - Terdapat tambahan id, createdAt dan updatedAt
    - Terdapat tabel SequelizeMeta (menyimpan migrate yang sudah dijalankan)

- Setup Seeding

  - `npx sequelize seed:generate --name namaseeding`

    - npx sequelize seed:generate --name seed-people 

    - Nama seeding menggunakan timestamp

    - terdapat up: bulkInsert dan down: bulkDelete

      - bulkInsert ke tablename (recordnya arrayOfObject bisa jadi JSON fs.readFileSync)
      - createdAt dan updatedAt: diisi new Date()

      - bulkDelete diisi tablename

    - proses async diganti return

    - Contoh menggunakan data/people.json

- Melakukan Seeding

  - `npx sequelize db:seed:all`
    - Jika ingin single file npx sequelize db:seed --seed namafile
    - Melakukan seeding data ke database

- Membuat Server

  - Membuat appjs - `code app.js`

    - Require package (express, ejs, router) dan sebagainya

  - Membuat folder yang diperlukan - `mkdir controllers views routers`

- Membuat Router

  - Membuat router index.js dan people.js

- Membuat Struktur Controller dan EJS

  - Membuat file Controller.js - membuat class, require models dan module.exports

  - Membuat file untuk addForm, editForm dan showAll

- Buat Controller untuk melakukan perintah Create - Read - Update - Delete

  - NamaModel.findAll, NamaModel.findByPk, NamaModel.create, NamaModel.update, NamaModel.destroy

  - Pastinya proses yang harus diperhatikan disini adalah antara `router - method di controller - penggunaan method model usage - views`

- Silakan bermain-main dengan Sequelize

