fetch('http://localhost:3000/teaches_count', {
  method: 'post',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  }
})
.then(res => res.json())
.then(data => {
  console.log(data);
  

  const teacheractive = document.getElementById("teacheractive");
  teacheractive.textContent = data.count;
})
.catch(error => console.error('Error fetching data:', error));