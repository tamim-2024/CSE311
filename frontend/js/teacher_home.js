const logedinteacher=JSON.parse(window.localStorage.getItem('user'));
console.log(logedinteacher);
if (logedinteacher==null  )
{
  window.location.href = "./teacher_login.html";
}
function logout(){
    localStorage.removeItem('user');
    window.location.href = "./teacher_login.html";
}

fetch('http://localhost:3000/teaches', { 
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ID: logedinteacher.ID }) 
})
.then(res => res.json())
.then(data => {
    console.log(data);
    const tableBody = document.getElementById("teachesBody"); 
    data.result.forEach(teach => { 
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${teach.ID}</td>
            <td>${teach.name}</td> 
            <td>${teach.course_id}</td>
            <td>${teach.sec_id}</td>
            <td>${teach.semester}</td>
            <td>${teach.year}</td> 
        `;
        tableBody.appendChild(row);
    });
})
.catch(error => console.error('Error fetching data:', error));

console.log("after fetch");
