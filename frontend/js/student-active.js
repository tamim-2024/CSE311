fetch('http://localhost:3000/takes_count', {
  method: 'post',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  }
})
.then(res => res.json())
.then(data => {
  console.log(data);
  const studentActive = document.getElementById("studentactive");
  studentActive.textContent = data.count;
})
.catch(error => console.error('Error fetching data:', error));