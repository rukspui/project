var express = require('express');
var router = express.Router();
var User = require('../model/userModel');
var Exam = require('../model/examModel');

//Operations on the collection of users
router.route('/')
  //Get all users
  .get(function (req, res) {
    var query = {};
    if (req.query) {
      if (req.query.email) {
        query.email = req.query.email;
      }
    }

    User.find(query, {password: 0}, function (err, users) {
      if (err) {
        return res.send(err);
      }
      res.json(users);
    });
  })
  //Add a new user to the collection
  .post(function (req, res) {
    var user = new User(req.body);
    user.password = user.hashPassword(req.body.password);

    user.save(function (err, user) {
      if (err) {
        return res.send(err);
      }
      return res.send('Successfuly added user ' + user.id + '.');
    });
  });

//Operations on a single User
//query string example: /users/1234 (1234 is an Users's id)
router.route('/:id')
  //Get a single User
  .get(function (req, res) {
    User.findOne({_id: req.params.id}, function (err, user) {
      if (err) {
        return res.send(err);
      }
      res.json(user);
    });
  })
  //Update an existing user
  .put(function (req, res) {
    User.findOne({_id: req.params.id}, function (err, user) {
      if (err) {
        return res.send(err);
      }
      //Update the user with the received fields
      for (p in req.body) {
        user[p] = req.body[p];
      }

      //save the user
      user.save(function (err) {
        if (err) {
          return res.send(err);
        }
        res.json({message: 'User ' + req.params.id + ' successfuly updated'});
      });

    });
  })
  //Remove a user
  .delete(function (req, res) {
    User.remove({_id: req.params.id}, function (err) {
      if (err) {
        return res.send(err);
      }
      res.json({message: 'User ' + req.params.id + ' deleted'});
    });
  });

router.route('/:id/exams')
  .get(function (req, res) {
    User.findOne({_id: req.params.id}, {_id: 1, exams: 1, year: 1})
      .populate('exams.exam')
      .exec(function (err, user) {
        if (err) {
          return res.send(err);
        }
        res.json(user);
      });
  })
  .put(function (req, res) {
  User.findOne({_id: req.params.id}, function (err, user) {
    if (err) {
      return res.send(err);
    }
    Exam.findOne({courseName: req.body.courseName}, function(err, exam) {
      if(err) {
        return res.send(err);
      }
      user.exams.push(exam._id);
      //save the user
      user.save(function (err) {
        if (err) {
          return res.send(err);
        }
        res.json({message: 'User ' + req.params.id + ' successfuly updated'});
      });
    })
  });
})
;


module.exports = router;
