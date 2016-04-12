var express = require('express');
var router = express.Router();
var Exam = require('../model/examModel');

router.route('/')
  .get(function (req, res) {
    //Process query parameters
    var query = {};
    if (req.query) {
      if (req.query.year) {
        query.year = req.query.year;
      }
      if (req.query.semester) {
        query.semester = req.query.semester;
      }
    }

    Exam.find(query, function (err, exams) {
      if (err) {
        return res.send(err);
      }
      res.json(exams);
    });
  })
  .post(function (req, res) {
    var exam = new Exam(req.body);

    exam.save(function (err, exam) {
      if (err) {
        return res.send(err);
      }
      res.send({message: 'Successfully added new exam', new: exam});
    })
  });

router.route('/:id')
  .get(function (req, res) {
    Exam.findById(req.params.id, function (err, exam) {
      if (err) {
        return res.send(err);
      }
      res.json(exam);
    })
  })
  .put(function (req, res) {
    Exam.findByIdAndUpdate(req.params.id, req.body, function (err, exam) {
      if (err) {
        return res.send(err);
      }
      res.json({message: 'Successfully updated record', updated: exam});
    });
  })
  .delete(function (req, res) {
    Exam.remove({_id: req.params.id}, function (err) {
      if (err) {
        return res.send(err);
      }
      res.json({message: 'Successfully removed exam.'});
    })
  });

module.exports = router;
