fetch('http://localhost:3000/class_count', {
  method: 'post',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  }
})
.then(res => res.json())
.then(data => {
  console.log(data);
  const totalClass = document.getElementById("class");
  totalClass.textContent = data.total;

   const activeClass = document.getElementById("classactive");
   activeClass.textContent = data.total;
})
.catch(error => console.error('Error fetching data:', error));

console.log("after fetch");