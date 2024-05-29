// Need to install
// npm install mysql
// npm install express
// npm install cors
// npm install body-parser
// npm install nodemon
// to open node post-end-point.js or nodemon index.js

// Basic setup of library
let mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'school'
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

app.get('/', function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  return res.json(a + b);
});
app.post('/teaches_count', (req, res) => {
  console.log(req.body);

  connection.query('SELECT COUNT(DISTINCT ID) AS count FROM teaches', function (err, result) {
    console.log(result);

    if (err) {
      res.json({
        error: err,
      });
    } else {
      res.json({
        count: result[0].count,
      });
    }
  });
});
app.post('/takes_count', (req, res) => {
  console.log(req.body);

  connection.query('SELECT COUNT(DISTINCT ID) AS count FROM takes', function (err, result) {
    console.log(result);

    if (err) {
      res.json({
        error: err,
      });
    } else {
      res.json({
        count: result[0].count,
      });
    }
  });
});
app.post('/teacher_count', function (req, res) {
 
  console.log(req.body);

  
  connection.query('SELECT COUNT(ID) AS count FROM teacher', function (err, result) {
   
    console.log(result);

    
    if (err) {
      
      res.json({
        error: err,
      });
    } else {
     
      res.json({
        count: result[0].count,
      });
    }
  });
});
app.post('/student_count', (req, res) => {
  console.log(req.body);

  connection.query('SELECT COUNT(ID) AS count FROM student', function (err, result) {
    console.log(result);

    if (err) {
      res.json({
        error: err,
      });
    } else {
      res.json({
        count: result[0].count,
      });
    }
  });
});
app.post('/class_count', (req, res) => {
  connection.query('SELECT COUNT(*) AS total FROM classroom', function (err, result) {
    if (err) {
      res.json({
        error: err,
      });
    } else {
      res.json({
        total: result[0].total,
        total: result[0].total,
      });
    }
  });
});
app.post('/course_count', (req, res) => {
  connection.query('SELECT COUNT(*) AS total FROM course', function (err, result) {
    if (err) {
      res.json({
        error: err,
      });
    } else {
      res.json({
        total: result[0].total,
        total: result[0].total,
      });
    }
  });
});


app.post('/user_check', function (req, res) {

  const username = req.body.username;
  const password = req.body.password;
  console.log(username,password);

  connection.query(`SELECT * FROM user WHERE user.email='${username}' `, function (err, result) {
    if (err) {
      res.json({
        error: err,
      });
    } else {
      console.log(result);
      if (result.length === 0) {
        res.json({
          error: "User not found",
        });
      } else {
        const user = result[0];
        if (user.password === password) {
          res.json({
            message: "Login successful",
            result: result,
            user:user
            
          });
        } else {
          res.json({
            error: "Incorrect password",
          });
        }
      }
    }
  });
});
app.post('/teacher_check', function (req, res) {
  const Username = req.body.Username;
  const Password = req.body.Password;
  console.log(Username,Password)
  

  connection.query(`SELECT * from teacher WHERE ID=${Username} and Password='${Password}';`, function (err, result) {
    console.log("result",result);
    console.log("err",err);
    if (err) {
      res.json({
        error: err,
      });
    } else {
      if (result.length === 0) {
        res.json({
          error: "Incorrect username or password",
        });
      } else {
        console.log(result);
        const teacher = result[0];
        const teacherId = teacher.id;

       
        connection.query(`SELECT * FROM teaches WHERE ID='${teacherId}'`, function (teachErr, teachResult) {
          if (teachErr) {
            res.json({
              error: teachErr,
            });
          } else {
            res.json({
              message: "Login successful",
              teacher: teacher,
              teaches: teachResult
            });
          }
        });
      }
    }
  });
});
app.post('/teaches', function (req, res) {
  console.log(req.body);
  console.log(req.body.ID);

  connection.query(
    `SELECT teaches.*, teacher.name, course.title 
     FROM teaches 
     INNER JOIN teacher ON teaches.ID = teacher.ID 
     INNER JOIN course ON teaches.course_id = course.course_id 
     WHERE teaches.ID = ?`, 
    [req.body.ID], 
    function (err, result) {
      console.log(result);
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({ result: result });
      }
      console.log(result);
    }
  );
});

app.post('/takes', function (req, res) {
  console.log(req.body);
  console.log(req.body.ID);

  connection.query(
    `SELECT takes.*, student.name, course.title 
     FROM takes 
     INNER JOIN student ON takes.ID = student.ID 
     INNER JOIN course ON takes.course_id = course.course_id 
     WHERE student.ID = ?`,
    [req.body.ID], 
    function (err, result) {
      console.log(result);
      if (err) {
        res.json({
          error: err,
        });
      } else {
        res.json({
          result: result,
        });
      }
      console.log(result);
    }
  );
});



app.post('/student_check', function (req, res) {
  const Username = req.body.Username;
  const Password = req.body.Password;

  connection.query(`SELECT * FROM  student WHERE  ID=${Username} AND Password='${Password}';`, function (err, result) {
    
    if (err) {
      res.json({
        error: err,
      });
    } else {
      if (result.length === 0) {
        res.json({
          error: "Incorrect username or password",
        });
      } else {
        console.log(result);
        const student = result[0];
        const studentId = student.id;

       
        connection.query(`SELECT * FROM takes WHERE takes.ID='${studentId}'`, function (takesErr, takesResult) {
          if (takesErr) {
            res.json({
              error: takesErr,
            });
          } else {
            res.json({
              message: "Login successful",
              student: student,
              takes: takesResult
            });
          }
        });
      }
    }
  });
});




app.post('/test-post', function (req, res) {
  console.log(req.body);
  connection.query(`SELECT ID, name, dept_name, salary,join_date FROM teacher`,
    function (err, result) {
      console.log(result);
      if (err) {
        res.json({
          error: err,
        });
      } else {
        res.json({
          result: result,
        });
      }
      console.log(result);
    }
  );
});

app.post('/test-post_1', function (req, res) {
  console.log(req.body);
  connection.query(`select * from student`,
    function (err, result) {
      console.log(result);
      if (err) {
        res.json({
          error: err,
        })
        
      } else {
        res.json({
          result: result,
        })
      }
      console.log(result);
    }
  );
});
app.post('/test-post_2', function (req, res) {
  console.log(req.body);
  connection.query(`select * from course`,
    function (err, result) {
      console.log(result);
      if (err) {
        res.json({
          error: err,
        })
        
      } else {
        res.json({
          result: result,
        })
      }
      console.log(result);
    }
  );
});
app.post('/test-post_3', function (req, res) {
  console.log(req.body);
  connection.query(`select * from classroom`,
    function (err, result) {
      console.log(result);
      if (err) {
        res.json({
          error: err,
        })
        
      } else {
        res.json({
          result: result,
        })
      }
      console.log(result);
    }
  );
});
app.post('/test-post_4', function (req, res) {
  console.log(req.body);
  
  connection.query(`select * from department`,
    function (err, result) {
      console.log(result);
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({ result: result });
      }
      console.log(result);
    }
  );
});
// DB
app.post('/add_user', function (req, res) {

  const user = {
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    dob: req.body.dob,
    gender: req.body.gender,
    password: req.body.password
  };

  connection.query(`INSERT INTO user (fname, lname, email, gender, dob, password) VALUES ('${user.fname}', '${user.lname}', '${user.email}', '${user.gender}', '${user.dob}', '${user.password}');`,
    function (err, result) {
      if (err) {
        res.json({
          error: err,
        })
      } else {
        connection.query(`SELECT * FROM user WHERE email='${user.email}'`, function (err, result) {
          if (err) {
            res.json({ error: err });
          } else {
            if (result.length === 0) {
              res.json({ error: "User not found" });
            } else {
              
                res.json({ message: "Login successful", result: result, user: result[0] });
              } 
            
          }
        });
      }
    }
  );
})

app.post('/add_teacher', function (req, res) {

  const teacher = {
    ID: req.body.ID,
    Name: req.body.Name,
    Department_Name: req.body.Department_Name,
    Salary: req.body.Salary,
    Join_Date: req.body.Join_Date,
    Password: req.body.Password
  };

  connection.query(`INSERT INTO teacher (ID, name, dept_name, salary, join_Date, password) VALUES ('${teacher.ID}', '${teacher.Name}', '${teacher.Department_Name}', '${teacher.Salary}', '${teacher.Join_Date}', '${teacher.Password}');`,
    function (err, result) {
      if (err) {
        res.json({
          error: err,
        })
      } else {
        res.json({
          result: result,
        })
      }
    }
  );
})


app.post('/add_student', function (req, res) {

  const student = {
    ID: req.body.ID,
    Name: req.body.Name,
    Department_Name: req.body.Department_Name,
    Total_Credit: req.body.Total_Credit,
    Password: req.body.Password 
  };

  connection.query(`INSERT INTO student (ID, name, dept_name, tot_credit, password) VALUES ('${student.ID}', '${student.Name}', '${student.Department_Name}', '${student.Total_Credit}', '${student.Password}');`,
    function (err, result) {
      if (err) {
        res.json({
          error: err,
        })
      } else {
        res.json({
          result: result,
        })
      }
    }
  );
})



app.post('/add_course', function (req, res) {
  const course = {
    ID: req.body.ID,
    Title: req.body.Title,
    Department_Name: req.body.Department_Name,
    Credits: req.body.Credits
  };

  connection.query(`INSERT INTO course (course_id, title, dept_name, credits) VALUES ('${course.ID}', '${course.Title}', '${course.Department_Name}', '${course.Credits}');`,
    function (err, result) {
      if (err) {
        res.json({
          error: err,
        });
      } else {
        res.json({
          result: result,
        });
      }
    }
  );
});

app.post('/t_reset-password', function (req, res) {
  const username = req.body.username;
  const newPassword = req.body.newPassword;
 console.log(username,newPassword);
  
  connection.query(
    `UPDATE teacher SET teacher.password = '${newPassword}' WHERE teacher.ID = '${username}' ` ,
    function (err, result) {
      console.log(err,result)
      if (err) {
        res.json({
          success: false,
          error: err,
        });
      } else {
        res.json({
          success: true,
          result: result,
        });
      }
    }
  );
});

app.post('/s_reset-password', function (req, res) {
  const username = req.body.username;
  const newPassword = req.body.newPassword;
 console.log(username,newPassword);
  
  connection.query(
    `UPDATE student SET student.password = '${newPassword}' WHERE student.ID = '${username}' ` ,
    function (err, result) {
      console.log(err,result)
      if (err) {
        res.json({
          success: false,
          error: err,
        });
      } else {
        res.json({
          success: true,
          result: result,
        });
      }
    }
  );
});
app.post('/u_reset-password', function (req, res) {
  const username = req.body.username;
  const newPassword = req.body.newPassword;
 console.log(username,newPassword);
  
  connection.query(
    `UPDATE user SET user.password = '${newPassword}' WHERE user.email = '${username}' ` ,
    function (err, result) {
      console.log(err,result)
      if (err) {
        res.json({
          success: false,
          error: err,
        });
      } else {
        res.json({
          success: true,
          result: result,
        });
      }
    }
  );
});
app.listen(3000);