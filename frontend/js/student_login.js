const loggedInUser = JSON.parse(window.localStorage.getItem('user'));
console.log(loggedInUser);
if (loggedInUser != null) {
  window.location.href = "./student_home.html";
}

function login() {
  const Username = document.getElementById('Username').value;
  const Password = document.getElementById('Password').value;

  if (!Username || Username == '') {
    alert('Please insert Username');
    return;
  }
  if (!Password || Password == '') {
    alert('Please insert Password');
    return;
  }

  const user = { Username: Username, Password: Password };

  fetch('http://localhost:3000/student_check', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(function (res) { 
    return res.json(); 
  })
  .then(function (res) { 
    console.log(res); 
    if (res.message === "Login successful") {
      window.localStorage.setItem('user', JSON.stringify(res.student));
      window.location.href = "./student_home.html";
    } else {
      alert(res.error || "Unknown error occurred.");
    }
  })
  .catch(function (error) {
    console.error('Error:', error);
    alert("An error occurred while processing your request.");
  });
} 
