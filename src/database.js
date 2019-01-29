'use strict'

const mysql = require('mysql')

// connection to sql file
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'dom',
  password: 'Dom_1234',
  database: 'saisdb'
})

// for checking the connection
connection.connect( (err) => {
  if (!err)
    console.log('Successfully connected to database!')
  else
    console.log('Error connected to the database.')
})

