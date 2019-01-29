const StudentController = require('./controllers/StudentController')

module.exports = (app) => {
  app.get('/viewStudentRecords',
    StudentController.retrieveStudentRecords)
}