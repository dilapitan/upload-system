const connection = require(__dirname + '../../database')

module.exports = {
  retrieveStudentRecords (callback) {
    return connection.query('SELECT * FROM student', callback);
  }
}