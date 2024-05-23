function registerCourse() {
  const ID = document.getElementById('ID').value;
  const Title = document.getElementById('Title').value;
  const Department_Name = document.getElementById('Department_Name').value;
  const Credits = document.getElementById('Credits').value;

  if (!ID || ID === '') {
    alert('Please enter Course ID');
    return;
  }
  if (!Title || Title === '') {
    alert('Please enter Title');
    return;
  }
  if (!Department_Name || Department_Name === '') {
    alert('Please enter Department Name');
    return;
  }
  if (!Credits || Credits === '') {
    alert('Please enter Credits');
    return;
  }

  const course = {
    ID: ID,
    Title: Title,
    Department_Name: Department_Name,
    Credits: Credits
  };

  fetch('http://localhost:3000/add_course', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(course)
  })
  .then(function (res) { return res.json(); })
  .then(function (res) { 
    console.log(res); 
    if (res.result) {
      
      window.location.href = "./cadmin.html";
    }
  })
  .catch(function (error) {
    console.error('Error:', error);
  });
}
