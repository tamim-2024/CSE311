const logedinuser=JSON.parse(window.localStorage.getItem('user'));
console.log(location.href);
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function register() {
  const f_input = document.getElementById('first_name');
  const fname_text = f_input.value;
  const last_name = document.getElementById('last_name').value;
  const gender = document.getElementById('gender').value;
  const date = document.getElementById('date').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const retype_password = document.getElementById('retype_password').value;

  if (!fname_text || fname_text == '') {
    alert('Please Insert First Name');
    return;
  }
  if (!last_name || last_name == '') {
    alert('Please Insert Last Name');
    return;
  }
  if (!date) {
    alert('Please Insert Date of Birth');
    return;
  }
  if (!email) {
    alert('Please Insert Email');
    return;
  } else {
    if (!validateEmail(email)) {
      alert('Invalid Email');
      return;
    }
  }
  if (!password || !retype_password || password.length < 5 || retype_password.length < 5) {
    alert('Use Strong Password');
    return;
  } else {
    if (retype_password != password) {
      alert('Passwords Do Not Match!');
      return;
    }
  }
  
  const user = { fname: fname_text, lname: last_name, email: email, dob: date, gender: gender, password: password };

  fetch('http://localhost:3000/add_user', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, /',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(res => {
    if (!res.ok) {
      throw new Error('Network response was not ok ' + res.statusText);
    }
    return res.json();
  })
  .then(res => {
    console.log(res);
    if (res.result) {
      window.localStorage.setItem('user', JSON.stringify(res.user));
      console.log('User data saved in local storage');
       window.location.href ="./Adminhome.html"
    } else {
      alert('User registration failed: ' + (res.message || 'Unknown error'));
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('There was a problem with the registration: ' + error.message);
  });

  console.log(fname_text, last_name, gender, date, email, password, retype_password);
}