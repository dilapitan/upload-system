const StudentModel = require('../models/Student')

module.exports = {
  retrieveStudentRecords (req, res) {
    StudentModel.retrieveStudentRecords((err, rows, fields) => {
      if (!err)
        res.send(rows)
      else
        console.log('Erron retrieving student records')
    })
  }
}