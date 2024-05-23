// function addstudent() {
//   const ID = document.getElementById('ID').value;
//   const Name = document.getElementById('Name').value;
//   const Department_Name = document.getElementById('Department_Name').value;
//   const Total_Credit = document.getElementById('Total_Credit').value;

//   if (!ID || ID === '') {
//     alert('Please enter ID');
//     return;
//   }
//   if (!Name || Name === '') {
//     alert('Please enter Name');
//     return;
//   }
//   if (!Department_Name || Department_Name === '') {
//     alert('Please enter Department Name');
//     return;
//   }
//   if (!Total_Credit || Total_Credit === '') {
//     alert('Please enter Total Credit');
//     return;
//   }

//   const student = {
//     ID: ID,
//     Name: Name,
//     Department_Name: Department_Name,
//     Total_Credit: Total_Credit
//   };

//   fetch('http://localhost:3000/add_student', {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json, text/plain, */*',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(student)
//   })
//   .then(function (res) { return res.json(); })
//   .then(function (res) { 
//     console.log(res); 
//     if (res.result) {
//       window.location.href = "./sadmin.html";
//     }
//   })
//   .catch(function (error) {
//     console.error('Error:', error);
//   });
// }
function addstudent() {
  const ID = document.getElementById('ID').value;
  const Name = document.getElementById('Name').value;
  const Department_Name = document.getElementById('Department_Name').value;
  const Total_Credit = document.getElementById('Total_Credit').value;
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
  if (!Total_Credit || Total_Credit === '') {
    alert('Please enter Total Credit');
    return;
  }
  if (!Password || Password === '') { 
    alert('Please enter Password');
    return;
  }

  const student = {
    ID: ID,
    Name: Name,
    Department_Name: Department_Name,
    Total_Credit: Total_Credit,
    Password: Password 
  };

  fetch('http://localhost:3000/add_student', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(student)
  })
  .then(function (res) { return res.json(); })
  .then(function (res) { 
    console.log(res); 
    if (res.result) {
      window.location.href = "./sadmin.html";
    }
  })
  .catch(function (error) {
    console.error('Error:', error);
  });
}
