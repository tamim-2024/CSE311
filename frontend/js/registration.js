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
    return
  }
  if (!last_name || last_name == '') {
    alert('Please Insert last_name');
    return
  }
  if (!date) {
    alert('Please Insert dob');
    return
  }

  if (!email) {
    alert('Please Insert email');
    return
  } else {
    if (!validateEmail(email)) {
      alert('Invalid email');
      return
    }
  }
  if (!password || !retype_password || password.length < 5 || retype_password.length < 5) {
    alert('use strong password');
    return
  }
  else {
    if (retype_password != password) {
      alert(' password not matched!');
      return
    }
  }
  
  const user = { fname: fname_text, lname: last_name, email: email, dob: date, gender: gender, password: password }
  fetch('http://localhost:3000/add_user', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
   

    body: JSON.stringify(user)
  }).then(function (res) {return res.json(); })
    .then(function (res) { 
      console.log(res); 
      if(res.result) {
         window.localStorage.setItem('user',JSON.stringify(res.user));
        window.location.href ="./Adminhome.html"      }
    
    })
    .catch(function (error) {
      console.error('Error:', error);
    });


  console.log(fname_text, last_name, gender, date, email, password, retype_password);
  // window.location.replace("http://www.w3schools.com");

}
