// function addnew() {
//   const ID = document.getElementById('ID').value;
//   const Name = document.getElementById('Name').value;
//   const No_of_Section = document.getElementById('No_of_Sections').value;
//   const Salary = document.getElementById('Salary').value;
//   const Join_Date = document.getElementById('Join_Date').value;

//   if (!ID || ID === '') {
//     alert('Please enter ID');
//     return;
//   }
//   if (!Name || Name === '') {
//     alert('Please enter Name');
//     return;
//   }
//   if (!No_of_Section || No_of_Section === '') {
//     alert('Please enter Number of Sections');
//     return;
//   }
//   if (!Salary || Salary === '') {
//     alert('Please enter Salary');
//     return;
//   }
//   if (!Join_Date || Join_Date === '') {
//     alert('Please select Join Date');
//     return;
//   }

//   const teacher = {
//     ID: ID,
//     Name: Name,
//     No_of_Sections: No_of_Sections,
//     Salary: Salary,
//     Join_Date: Join_Date
//   };

//   fetch('http://localhost:3000/add_teacher', {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json, text/plain, */*',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(teacher)
//   })
//   .then(function (res) { return res.json(); })
//   .then(function (res) { 
//     console.log(res); 
//     if (res.result) {
//       window.location.href = "./tadmin.html";
//     }
//   })
//   .catch(function (error) {
//     console.error('Error:', error);
//   });
// }
function addnew() {
  const ID = document.getElementById('ID').value;
  const Name = document.getElementById('Name').value;
  const Department_Name = document.getElementById('Department_Name').value;
  const Salary = document.getElementById('Salary').value;
  const Join_Date = document.getElementById('Join_Date').value;
  const Password = document.getElementById('Password').value;

  if (!ID || ID === '') {
    alert('Please enter ID');
    return;
  }
  if (!Name || Name === '') {
    alert('Please enter Name');
    return;
  }
  if (!Department_Name || Department_Name === '') {
    alert('Please enter Department Name');
    return;
  }
  if (!Salary || Salary === '') {
    alert('Please enter Salary');
    return;
  }
  if (!Join_Date || Join_Date === '') {
    alert('Please select Join Date');
    return;
  }
  if (!Password || Password === '') {
    alert('Please enter Password');
    return;
  }

  const teacher = {
    ID: ID,
    Name: Name,
    Department_Name: Department_Name,
    Salary: Salary,
    Join_Date: Join_Date,
    Password: Password
  };

  fetch('http://localhost:3000/add_teacher', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(teacher)
  })
  .then(function (res) { return res.json(); })
  .then(function (res) { 
    console.log(res); 
    if (res.result) {
      window.location.href = "./tadmin.html";
    }
  })
  .catch(function (error) {
    console.error('Error:', error);
  });
}
