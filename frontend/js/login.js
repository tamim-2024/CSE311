const logedinuser=JSON.parse(window.localStorage.getItem('user'));
console.log(location.href);
if (logedinuser == null && location.href == "http://127.0.0.1:5500/html/Adminhome.html")
{
  
  window.location.href = "./login.html";
}
else if(logedinuser != null && location.href =="http://127.0.0.1:5500/html/login.html") {
 window.location.href = "./Adminhome.html";
}


function logout(){
  localStorage.removeItem('user');
  // history.pushState(null, null, window.location.href);
  window.location.href = "./login.html";
}
function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (!username || username == '') {
    alert('Please insert username');
    return;
  }
  if (!password || password == '') {
    alert('Please insert password');
    return;
  }

  const user = { username: username, password: password };

  fetch('http://localhost:3000/user_check', {
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
       window.localStorage.setItem('user',JSON.stringify(res.user));
      window.location.href = "./Adminhome.html";
      // return false;
    } else {
      alert(res.error || "Unknown error occurred.");
    }
  })
  .catch(function (error) {
    console.error('Error:', error);
    alert("An error occurred while processing your request.");
  });
}
