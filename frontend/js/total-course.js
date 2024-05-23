fetch('http://localhost:3000/course_count', {
  method: 'post',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  }
})
.then(res => res.json())
.then(data => {
  console.log(data);
  const totalCourse = document.getElementById("course");
  totalCourse.textContent = data.total;

  const activeCourse = document.getElementById("courseactive");
  activeCourse.textContent = data.total;
})
.catch(error => console.error('Error fetching data:', error));

console.log("after fetch");