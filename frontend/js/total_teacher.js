fetch('http://localhost:3000/teacher_count', {
  method: 'post',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  }
})
.then(res => res.json())
.then(data => {
  console.log(data);
  const teacherCount = document.getElementById("teacherCount");
  teacherCount.textContent = data.count;


})
.catch(error => console.error('Error fetching data:', error));

console.log("after fetch");


