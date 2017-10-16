var express = require('express'),
    router = express.Router();

// Static departments for now
var departmentList = require('../departmentList.json');

router.get('/', function(req, res){
    // console.log(departmentList.departments);
    return res.render('forms/launch', {
        title : "launch",
        list : departmentList
    });
});

router.get('/test', function(req, res){
    res.render('forms/template');
})


router.post('/getsurveylist', function(req, res){
    var deptID = req.body.deptID,
        email = req.body.email,
        deptName = req.body.deptName;
        console.log(req.body);
    if(deptID == 0){
        res.json([{
            "id":"id-821",
            "date":"April 2017",
            "desc":"sample",
            "survey": "Math-123"
        }, {
            "id":"id-418",
            "date":"Jane 2017",
            "desc":"new data",
            "survey": "Eng-231"
        }, {
            "id":"id-821",
            "date":"April 2017",
            "desc":"sample",
            "survey": "Math-123"
        }, {
            "id":"id-418",
            "date":"Jane 2017",
            "desc":"new data",
            "survey": "Eng-231"
        }, {
            "id":"id-821",
            "date":"April 2017",
            "desc":"sample",
            "survey": "Math-123"
        }, {
            "id":"id-418",
            "date":"Jane 2017",
            "desc":"new data",
            "survey": "Eng-231"
        }, {
            "id":"id-821",
            "date":"April 2017",
            "desc":"sample",
            "survey": "Math-123"
        }, {
            "id":"id-418",
            "date":"Jane 2017",
            "desc":"new data",
            "survey": "Eng-231"
        }]);
    }
    else if (deptID == 1){
        res.json([{
            "id":"id-121",
            "date":"Dec 2014",
            "desc":"Some survey data",
            "survey": "Phys-218"
        }, {
            "id":"id-345",
            "date":"Jan 2011",
            "desc":"chips",
            "survey": "The-782"
        }, {
            "id":"id-345",
            "date":"Jan 2011",
            "desc":"chips",
            "survey": "The-782"
        }, {
            "id":"id-121",
            "date":"Dec 2014",
            "desc":"Some survey data",
            "survey": "Phys-218"
        }, {
            "id":"id-121",
            "date":"Dec 2014",
            "desc":"Some survey data",
            "survey": "Phys-218"
        }, {
            "id":"id-345",
            "date":"Jan 2011",
            "desc":"chips",
            "survey": "The-782"
        }, {
            "id":"id-345",
            "date":"Jan 2011",
            "desc":"chips",
            "survey": "The-782"
        }, {
            "id":"id-121",
            "date":"Dec 2014",
            "desc":"Some survey data",
            "survey": "Phys-218"
        }]);
    }
    // console.log('getting email :: '+ email);
    // console.log('getting dept id :: '+ deptId);
})

router.post('/survey', function(req, res){
// router.get('/survey/:email/:deptid/:surveyId', function(req, res){
    console.log(req.body);
    console.log('build survey');
    res.render('forms/survey'
    , {
        email: req.body.email,
        deptId: req.body.deptID,
        surveyData: {
            surveyName: "sample-name",
            questionKey: [
                {
                    id: 0,
                    question: "What is soap?",
                    questionType: 1, // single input, multiple choice (checkbox)
                    answerKey: [
                        { ans: "soapy" },
                        { ans: "super soap" },
                        { ans : "sub-soap" }
                    ]
                }, {
                    id: 1,
                    question: "Floof?",
                    questionType: 2, // single input, multiple choice (checkbox)
                    answerKey: [
                        { ans: "woof" },
                        { ans: "Moo?" },
                        { ans : "Chup" }
                    ]
                }
            ]
        }
    });
    // Take survey code, pass to query. Render ejs along with query response
    // return res.render('forms/survey', {
    //     title: "saml",
    //     surveyData :{
    //         surveyId: "sample-survey",
    //         surveyName: "sample-name",
    //         questionKey: [
    //             {
    //                 id: 0,
    //                 question: "What is soap?",
    //                 questionType: 1, // single input, multiple choice (checkbox)
    //                 answerKey: [
    //                     { ans: "soapy" },
    //                     { ans: "super soap" },chec
    //                     { ans : "sub-soap" }
    //                 ]
    //             }, {
    //                 id: 1,
    //                 question: "What does cow say?",
    //                 questionType: 2, // Allow multiple inputs (checkbox)
    //                 answerKey: [
    //                     { ans: "MOO!" },
    //                     { ans: "BAAHH!!" },
    //                     { ans : "BUUHHH" },
    //                     { ans : "ARF!"}
    //                 ]   
    //             }, {
    //                 id: 2,
    //                 question: "On a scale of 1-5, How much do you like pizza?",
    //                 questionType: 3, // single input, rating scale (radio)
    //                 answerKey: [
    //                     { ans: "1" },
    //                     { ans: "2" },
    //                     { ans: "3" },
    //                     { ans: "4" },
    //                     { ans: "6" }
    //                 ]
    //             }, {
    //                 id: 3,
    //                 question: "What is your favorite type of floof?",
    //                 questionType: 0, // user string entry
    //                 answerKey: []
    //             }
    //         ]
    //     }
    // })
});

router.post('/submit', function(req, res){
    console.log(req.body);
    res.send('SUBMIT!');
})
module.exports = router;