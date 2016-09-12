  var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {

 // Store common vars

 res.locals.formData = "";
 res.locals.formQuery = "?";
 res.locals.data = {};

 for (var name in req.query){
   var value = req.query[name];
   res.locals.formData += '<input type="hidden" name="'+name+'" value="' + value + '">\n';
   res.locals.formQuery += name + "=" + value + "&";
   res.locals.data[name] = value;
 }

 res.locals.formQuery = res.locals.formQuery.slice(0,-1);

 next();
 
});

router.get('/', function (req, res) {
  res.render('index');

});


// Branching

// Question for questions/country/index.html

router.get('/questions/eligibility/age', function (req, res) {

  console.log("i love you princess");

  // get the answer from the query string (eg. ?over18="yes")
  var country = req.query.country;

  if (country == "northern_ireland" ){

    // if user lives in NORTHERN IRELAND
    res.redirect("/questions/result" + res.locals.formQuery);

  } else if (country == "scotland" ){

    // if user lives in SCOTLAND
    res.redirect("/questions/result" + res.locals.formQuery);

  } else if (country == "wales" ){

    // if user lives in WALES
    res.redirect("/questions/result" + res.locals.formQuery);

  } else {

    // if users lives in ENGLAND
    res.render('questions/eligibility/age/index.html');

  }

});

// Question for questions/eligibility/index.html
router.get('/questions/eligibility/right_to_work_in_uk', function (req, res) {

  console.log("over18");

  // get the answer from the query string (eg. ?over18="yes")
  var over18 = req.query.over18;

  if (over18 == "no" ){

    // if users is NOT 18 or over
    res.redirect("/questions/result" + res.locals.formQuery);

  } else {

    // if users IS 18 or over
    res.render('questions/eligibility/right_to_work_in_uk/index.html');

  }

});

// Question for questions/eligibility/right_to_work_in_uk/index.html
router.get('/questions/eligibility/criminal_history', function (req, res) {

  console.log("right_to_work");

  // get the answer from the query string (eg. ?over18="yes")
  var right_to_work = req.query.right_to_work;

  if (right_to_work == "no" ){

    // if users does NOT have right to work in the UK
    res.redirect("/questions/result" + res.locals.formQuery);

  } else {

    // if users is DOES have right to work in the UK
    res.render('questions/eligibility/criminal_history/index.html');

  }

});


// Question for questions/eligibility/criminal_history/index.html
router.get('/questions/will_you_be_paid', function (req, res) {

  console.log("criminal_history");

  // get the answer from the query string (eg. ?over18="yes")
  var criminal_history = req.query.criminal_history;

  if (criminal_history == "yes" ){

    // if user DOES have a criminal history
    res.redirect("/questions/result" + res.locals.formQuery);

  } else {

    // if user does NOT have criminal history
    res.render('questions/will_you_be_paid/index.html');

  }

});

// Question for questions/will_you_be_paid/index.html
router.get('/questions/care_time_per_day', function (req, res) {

  console.log("will_you_be_paid");

  // get the answer from the query string (eg. ?over18="yes")
  var will_you_be_paid = req.query.will_you_be_paid;

  if (will_you_be_paid == "no" ){

    // if user will NOT be paid
    res.redirect("/questions/result" + res.locals.formQuery);

  } else {

    // if user WILL be paid
    res.render('questions/care_time_per_day/index.html');

  }

});

// Question for questions/care_time_per_day/index.html
router.get('/questions/related_to_child', function (req, res) {

  console.log("care_time_per_day");

  // get the answer from the query string (eg. ?over18="yes")
  var care_time_per_day = req.query.care_time_per_day;

  if (care_time_per_day == "less_than_two_hours" ){

    // if user will work LESS than two hours
    res.redirect("/questions/result" + res.locals.formQuery);

  } else {

    // if user will work MORE than two hours
    res.render('questions/related_to_child/index.html');

  }

});

// Question for questions/related_to_child/index.html
router.get('/questions/child_age', function (req, res) {

  console.log("related_to_child");

  // get the answer from the query string (eg. ?over18="yes")
  var related_to_child = req.query.related_to_child;

  if (related_to_child == "yes" ){

    // if user IS related to child
    res.redirect("/questions/result" + res.locals.formQuery);

  } else {

    // if user is NOT related to child
    res.render('questions/child_age/index.html');

  }

});

// Question for questions/child_age/index.html
router.get('/questions/number_of_children', function (req, res) {

  console.log("child_age");

  // get the answer from the query string (eg. ?over18="yes")
  var child_age = req.query.child_age;

  if (child_age == "8_and_over" ){

    // if user IS related to child
    res.redirect("/questions/result" + res.locals.formQuery);

  } else {

    // if user is NOT related to child
    res.render('questions/number_of_children/index.html');

  }

});

module.exports = router;
