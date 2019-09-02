const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Members = mongoose.model('Members');
let newId;


router.get('/',(req, res)=>{

  Members.find((err,data)=>{
    let userIds = data.map(e=>e._doc.userId)
    // console.log(userIds);
    newId = Math.max(...userIds);
    newId = newId + 1
  })

  res.render("members/addOrEdit",{
    viewTitle : "Insert Contact"

  });//as the first param we have to pass the path of the view || as the second parameter we have to pass properties which has to be rendered inside the view
});


router.post('/',(req, res)=>{
  insertRecord(req, res);
});

function insertRecord(req,res){
  var members = new Members();//create an object of Contacts schema
  console.log(newId)
  members.userId = newId;
  newId = req.body.userId;
  members.first_name = req.body.first_name;//in here we populate form control body values from the request object
  members.last_name = req.body.last_name;
  members.gender = req.body.gender;
  members.email = req.body.email;
  members.ip_address = req.body.ip_address;
  members.save((err,doc)=>{//in order to save this record we jsut need to call this function
    if (!err)
      res.redirect('members/list');//if there is no error we will be redirected to the list page
      //all the inserted contacts record will be listed
    else {
      console.log('Error during record insertion : ' + err) //if there is an error it will be printed here
    }
  });
}

router.get('/list',(req, res)=>{
  Members.find((err,docs)=>{
    if (!err) {
      res.render("members/list", {
        list: docs
      });
    }
    else {
      console.log('Error in retrieving employee list:' + err);
    }
  });
});

router.get('/:id',(req, res, next) => {
  const id = req.params.id;
  Members.findById(id)
    .exec()
    .then(doc => {
      console.log(doc)
      res.render("members/addOrEdit", {
        viewTitle: "Update Contact",
        members: doc
      // res.status(200).json(doc)
      });
    });
});



//   Members.find(req.params.userId, (err, doc) => {
//       if (!err) {
//         console.log(req.params.userId)
//         res.render("members/addOrEdit", {
//           viewTitle: "Update Contact",
//           members: doc
//         });
//       }
//     });
// });

module.exports = router;
