let mysql = require('mysql');
var bodyParser = require('body-parser')

const express = require('express');
const { error } = require('console');
const app = express()
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// parse application/json
app.use(bodyParser.json())
// app.use(express.json()) 
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'sms'
});
connection.connect(
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('success');
    }
  }
);
// app.get(
//   '/name', function (req, res) {
//     console.log(req.query);
//     const b = req.query.a;

//     console.log('tamim');
//     res.send('hi ' + b);
//   });
// app.post(
//   '/name', function (req, res) {
//     console.log(req.body);
//     // res.send('success')
//     const a = {
//       name: 'name',
//       body: req.body,
//       error: null,
//       success: true
//     };
//     res.json(a);


//   }

// );
app.post('/add-user', function (req, res) {
  console.log(req.body);

  const user = {
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      dob: req.body.dob,
      gender: req.body.gender,
      password: req.body.password
  };

  const query = `INSERT INTO user
                  (fname, lname, email, gender, dob, password)
                  VALUES
                  ('${user.fname}', '${user.lname}', '${user.email}', '${user.gender}', '${user.dob}', '${user.password}');`;
  console.log(query);

  connection.query(query,
      function (err, result) {
          if (err) {
              res.json({
                  error: err,
              })
          } else {
              console.log(result);
              res.json({
                  result: result,
              })
          }
      }
  );
})
// app.post('/test-post', function (req, res) {
//   console.log(req.body);
//   return res.json({
//       message: 'Post API called successfully!',
//       data: req.body
//   });
// });



// app.get('/dfgdfg', function (req, res) {
//     connection.query(`INSERT INTO user (fname, lname, email, gender, dob, password) VALUES ('${user.fname}', '${user.lname}', '${user.email}', '${user.gender}', '${user.dob}', '${user.password}');`,
//         function(err, result ){
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log(result);
//             }
//         }
//     );
// })

// insert_user({
//     fname: "Wardun",
//     lname: "Islam",
//     email: "wardun@gmail.com",
//     dob: "2024-12-12",
//     gender: "Male",
//     password: "Wardun"
// })

app.listen(3000)